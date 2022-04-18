const { query } = require("express");
const express = require("express");
const { where } = require("../database");
const router = express.Router();
const knex = require("../database");

router.get("/", async (request, response) => {
  try {
    const queryToResevation = await knex("reservation").select(
      "number_of_guests",
      "created_date",
      "contact_phonenumber",
      "contact_name",
      "contact_email",
      "meal_id"
    );

    if (queryToResevation.length === 0) {
      response.status(404).json({ message: "Reservations not found" });
    } else {
      response.json(queryToResevation);
    }
  } catch (error) {
    throw error;
  }
});

router.post("/", async (request, response) => {
  try {
    if (
      !request.body.number_of_guests ||
      !request.body.created_date ||
      !request.body.contact_phonenumber ||
      !request.body.contact_name ||
      !request.body.contact_email ||
      !request.body.meal_id
    ) {
      response.status(400).json({ error: "Data is not complete" });
      return;
    }
    const insertReservation = await knex("reservation").insert(request.body);
    response.json(insertReservation);
  } catch (error) {
    throw error;
  }
});

router.get("/:id", async (request, response) => {
  try {
    const reservationId = Number(request.params.id);
    if (isNaN(reservationId)) {
      response.status(400).json({ error: "Invalid data" });
      return;
    }
    const reservationResult = await knex("reservation")
      .where({ id: reservationId })
      .select(
        "number_of_guests",
        "created_date",
        "contact_phonenumber",
        "contact_name",
        "contact_email",
        "meal_id"
      );
    if (reservationResult.length === 0) {
      response.status(404).json({ message: "Reservation not found" });
    } else {
      response.json(reservationResult);
    }
  } catch (error) {
    throw error;
  }
});

router.put("/:id", async (request, response) => {
  try {
    const reservationId = Number(request.params.id);
    if (isNaN(reservationId)) {
      response.status(400).json({ error: "Invalid data" });
      return;
    }
    const changeReservation = await knex("reservation")
      .where({ id: reservationId })
      .update(request.body);
    response.json(changeReservation);
  } catch (error) {
    throw error;
  }
});

router.delete("/:id", async (request, response) => {
  try {
    const reservationId = Number(request.params.id);
    if (isNaN(reservationId)) {
      response.status(400).json({ error: "Invalid data" });
      return;
    }
    const deleteReservation = await knex("reservation")
      .where({ id: reservationId })
      .del();
    response.json(deleteReservation);
  } catch (error) {
    throw error;
  }
});

module.exports = router;
