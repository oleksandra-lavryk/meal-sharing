const { query } = require("express");
const express = require("express");
const { where } = require("../database");
const router = express.Router();
const knex = require("../database");

router.get("/", async (request, response) => {
  try {
    const queryToReview = await knex("review").select(
      "title",
      "description",
      "created_date",
      "stars",
      "meal_id"
    );

    if (queryToReview.length === 0) {
      response.status(404).json({ message: "Reviews not found" });
    } else {
      response.json(queryToReview);
    }
  } catch (error) {
    throw error;
  }
});

router.post("/", async (request, response) => {
  try {
    if (
      !request.body.title ||
      !request.body.description ||
      !request.body.created_date ||
      !request.body.stars ||
      !request.body.meal_id
    ) {
      response.status(400).json({ error: "Data is not complete" });
      return;
    }
    const insertReview = await knex("review").insert(request.body);
    response.json(insertReview);
  } catch (error) {
    throw error;
  }
});

router.get("/:id", async (request, response) => {
  try {
    const reviewId = Number(request.params.id);
    if (isNaN(reviewId)) {
      response.status(400).json({ error: "Invalid data" });
      return;
    }
    const reviewResult = await knex("review")
      .where({ id: reviewId })
      .select("title", "description", "created_date", "stars", "meal_id");
    if (reviewResult.length === 0) {
      response.status(404).json({ message: "Review not found" });
    } else {
      response.json(reviewResult);
    }
  } catch (error) {
    throw error;
  }
});

router.put("/:id", async (request, response) => {
  try {
    const reviewId = Number(request.params.id);
    if (isNaN(reviewId)) {
      response.status(400).json({ error: "Invalid data" });
      return;
    }
    const changeReview = await knex("review")
      .where({ id: reviewId })
      .update(request.body);
    response.json(changeReview);
  } catch (error) {
    throw error;
  }
});

router.delete("/:id", async (request, response) => {
  try {
    const reviewId = Number(request.params.id);
    if (isNaN(reviewId)) {
      response.status(400).json({ error: "Invalid data" });
      return;
    }
    const deleteReview = await knex("review").where({ id: reviewId }).del();
    response.json(deleteReview);
  } catch (error) {
    throw error;
  }
});

module.exports = router;
