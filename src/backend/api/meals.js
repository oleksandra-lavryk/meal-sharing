const { query } = require("express");
const express = require("express");
const { where } = require("../database");
const router = express.Router();
const knex = require("../database");

router.get("/", async (request, response) => {
  try {
    let queryToMeal = knex("meal");

    if (
      typeof request.query["availableReservations"] !== "undefined" &&
      request.query["availableReservations"] === "true"
    ) {
      queryToMeal = queryToMeal
        .leftJoin("reservation", "meal.id", "=", "reservation.meal_id")
        .select(
          "meal.id",
          "meal.title",
          "meal.description",
          "meal.location",
          "meal.when_time",
          "meal.created_date",
          "meal.price",
          "meal.max_reservations",
          knex.raw(
            "COALESCE(SUM(reservation.number_of_guests),0) as total_guests"
          ),
          knex.raw(
            "(meal.max_reservations-COALESCE(SUM(reservation.number_of_guests),0)) AS available_reservation"
          )
        )
        .groupBy("meal.id")
        .having(
          knex.raw(
            "(max_reservations > COALESCE(SUM(reservation.number_of_guests),0))"
          )
        );
    }

    if (
      request.query["maxPrice"] &&
      !isNaN(Number(request.query["maxPrice"]))
    ) {
      queryToMeal = queryToMeal.where("price", "<", request.query["maxPrice"]);
    }

    if (request.query["title"]) {
      queryToMeal = queryToMeal.where(
        "title",
        "like",
        "%" + request.query["title"] + "%"
      );
    }

    if (request.query["createdAfter"]) {
      const createdAfter = new Date(request.query["createdAfter"]);
      if (createdAfter != "Invalid Date") {
        queryToMeal = queryToMeal.where("created_date", ">", createdAfter);
      } else {
        response.status(400).json({ error: "Invalid date value" });
        return;
      }
    }

    if (request.query["limit"] && !isNaN(Number(request.query["limit"]))) {
      queryToMeal = queryToMeal.limit(request.query["limit"]);
    }

    const allMeals = await queryToMeal;
    if (allMeals.length === 0) {
      response.status(404).json({ message: "Meals not found" });
    } else {
      response.json(allMeals);
    }
  } catch (error) {
    throw error;
  }
});

router.get("/:id", async (request, response) => {
  try {
    const mealId = Number(request.params.id);
    if (isNaN(mealId)) {
      response.status(400).json({ error: "Invalid data" });
      return;
    }
    const meal = await knex("meal")
      .where({ id: mealId })
      .select(
        "title",
        "description",
        "location",
        "when_time",
        "max_reservations",
        "price",
        "created_date"
      );
    if (meal.length === 0) {
      response.status(404).json({ message: "Meal not found" });
    } else {
      response.json(meal);
    }
  } catch (error) {
    throw error;
  }
});
router.post("/", async (request, response) => {
  try {
    if (
      !request.body.title ||
      !request.body.when_time ||
      !request.body.max_reservations ||
      !request.body.price ||
      !request.body.created_date
    ) {
      response.status(400).json({ error: "Data is not complete" });
      return;
    }
    const insertMeal = await knex("meal").insert(request.body);
    response.json(insertMeal);
  } catch (error) {
    throw error;
  }
});

router.put("/:id", async (request, response) => {
  try {
    const mealId = Number(request.params.id);
    if (isNaN(mealId)) {
      response.status(400).json({ error: "Invalid data" });
      return;
    }
    const changeMeal = await knex("meal")
      .where({ id: mealId })
      .update(request.body);
    response.json(changeMeal);
  } catch (error) {
    throw error;
  }
});

router.delete("/:id", async (request, response) => {
  try {
    const mealId = Number(request.params.id);
    if (isNaN(mealId)) {
      response.status(400).json({ error: "Invalid data" });
      return;
    }
    const deleteMeal = await knex("meal").where({ id: mealId }).del();
    response.json(deleteMeal);
  } catch (error) {
    throw error;
  }
});

module.exports = router;
