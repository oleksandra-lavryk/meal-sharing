<p align="center">
  <a href="" rel="noopener">
 <img width=150px height=100px src="https://www.hackyourfuture.dk/static/logo-dark.svg" alt="Project logo"></a>
</p>

<h3 align="center">Meal sharing api</h3>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---

<p align="center"> Website api for sharing meals together. Invite your best friends or your family for dinner!
    <br> 
</p>

## 📝 Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Usage](#usage)
- [Built Using](#built_using)
- [Authors](#authors)

## 🧐 About <a name = "about"></a>

Link to deployed website: [MealSharing](https://meal-sharing-2ar5.onrender.com/) 

This project will was built out over 3 different classes:

- **Nodejs week 3** - Here we were building the backend api. We worked in the `src/backend` folder.
- **React week 5** - Here we were building the frontend components and routing. This week we worked in the `src/client` folder.
- **Meal sharing class** - After week 5 of react we had a specific class for finishing the MealSsharing website. We made everything work and deployed the website to the internet.

## 🏁 Getting Started <a name = "getting_started"></a>


### Environment variables

All sensitive data like fx passwords and usernames, we dont want to add to git! This problem we solve by having environment variables. Environment variables are not committed to git and have a key value structure.

Remember to copy the `.env.example` file, and rename the copied file to `.env`. In the `.env` file add the relevant host, database name, database user and pasword to your own local database. If you are unsure of these things then select your database in the Mysql Workbench. Now press `Database` -> `Manage Connections...`. Here you can see everything you need except the password. If you forgot that, reset it.

### Prerequisites

- Postman
- MySQL Workbench

### Installing

To install run `npm install`

## 🎈 Usage <a name="usage"></a>

To run `npm run dev`

The api can now be found on `http://localhost:3000/api/` an example is `http://localhost:3000/api/meals`

## ⛏️ Built Using <a name = "built_using"></a>

- [Mysql](https://www.npmjs.com/package/mysql) - Database
- [Express](https://expressjs.com/) - Server Framework
- [NodeJs](https://nodejs.org/en/) - Server Environment

## ☁️ Deployment <a name = "deployment"></a>

Deployed using [Render](https://render.com/)

[Deployment guide](https://github.com/HackYourFuture-CPH/deployment-guide)

## ✍️ Authors <a name = "authors"></a>

- [@benna100](https://github.com/benna100) - Idea & Initial work
