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
      // This way to make query not working in some reason. "Having" part does not act as expected
      //
      // queryToMeal = queryToMeal
      //   .sum({ totalReserved: "reservation.number_of_guests" })
      //   .join("reservation", "reservation.meal_id", "=", "meal.id")
      //   .groupBy(
      //     "meal.title",
      //     "meal.description",
      //     "meal.location",
      //     "meal.when_time",
      //     "meal.max_reservations",
      //     "meal.price",
      //     "meal.created_date"
      //   )
      //   .having("meal.max_reservations", ">", "totalReserved");     //act like ">=" not ">"
      //
      // This variant works, but with this way I can't handle several parameters in the same time
      //
      // const result =
      //   await knex.raw(`SELECT meal.title, meal.description, meal.location,meal.when_time, meal.price, meal.created_date,
      //   meal.max_reservations,
      //   SUM(reservation.number_of_guests) AS reserved_meal
      //   FROM   meal
      //   JOIN reservation
      //   ON meal.id = reservation.meal_id
      //   GROUP  BY meal.title, meal.description, meal.location,meal.when_time, meal.price, meal.created_date,
      //   meal.max_reservations
      //   HAVING reserved_meal < meal.max_reservations`);
      // if (result[0].length === 0) {
      //   response.status(404).json({ message: "No meal available" });
      // } else {
      //   response.send(result[0]);
      // }
      // return;
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

    const allMeals = await queryToMeal.select(
      "meal.title",
      "meal.description",
      "meal.location",
      "meal.when_time",
      "meal.max_reservations",
      "meal.price",
      "meal.created_date"
    );
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
