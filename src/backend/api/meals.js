const { query } = require("express");
const express = require("express");
const { where } = require("../database");
const router = express.Router();
const knex = require("../database");

router.get("/", async (request, response) => {
  try {
    let mealArrayToChange = await knex
      .raw(
        `SELECT meal.id,meal.title, meal.description, meal.location,meal.when_time, meal.price, meal.created_date,
      meal.max_reservations,
      COALESCE(SUM(reservation.number_of_guests),0) AS total_reserved
      FROM   meal
      LEFT JOIN reservation
      ON meal.id = reservation.meal_id
      GROUP  BY meal.id`
      )
      .then((result) => result[0]);

    if (Object.keys(request.query).length === 0) {
      response.send(mealArrayToChange);
      return;
    }

    if (typeof request.query["availableReservations"] !== "undefined") {
      if (request.query["availableReservations"] === "true") {
        mealArrayToChange = mealArrayToChange.filter(
          (item) => item.total_reserved < item.max_reservations
        );
      } else if (request.query["availableReservations"] === "false") {
        mealArrayToChange = mealArrayToChange.filter(
          (item) =>
            Number(item.total_reserved) === Number(item.max_reservations)
        );
      } else {
        response
          .status(400)
          .json({ error: "Invalid availableReservations param" });
        return;
      }
    }

    if (request.query["maxPrice"]) {
      if (!isNaN(Number(request.query["maxPrice"]))) {
        mealArrayToChange = mealArrayToChange.filter(
          (item) => item.price < Number(request.query["maxPrice"])
        );
      } else {
        response.status(400).json({ error: "Invalid maxPrice param" });
        return;
      }
    }

    if (request.query["title"]) {
      mealArrayToChange = mealArrayToChange.filter((item) =>
        item.title.toLowerCase().includes(request.query["title"].toLowerCase())
      );
    }

    if (request.query["createdAfter"]) {
      const createdAfter = new Date(request.query["createdAfter"]);
      if (createdAfter != "Invalid Date") {
        mealArrayToChange = mealArrayToChange.filter((item) => {
          const itemDate = new Date(item.createdAt);
          return itemDate > createdAfter;
        });
      } else {
        response.status(400).json({ error: "Invalid date param" });
        return;
      }
    }

    if (request.query["limit"]) {
      if (!isNaN(Number(request.query["limit"]))) {
        mealArrayToChange = mealArrayToChange.slice(0, request.query["limit"]);
      } else {
        response.status(400).json({ error: "Invalid limit param" });
        return;
      }
    }

    if (mealArrayToChange.length === 0) {
      response.status(404).json({ message: "Meals not found" });
    } else {
      response.json(mealArrayToChange);
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
