const express = require("express");
const cors = require("cors");
const app = express();

const citiesJson = require("./world-cities.json");
let countries = null;

app.use(cors());

app.get("/api/cities", async (req, res) => {
  let {
    limit = 500,
    from = 0,
    country = null,
    // Search could be omitted and only added for the 1st interview after completing the project.
    search = null,
  } = req.query;

  if (typeof limit == "string") limit = Number(limit);
  if (typeof from == "string") from = Number(from);

  if (limit > 500) return res.status(400).send("Limit must be <= 500");

  let cities = citiesJson;

  if (country !== null) {
    cities = cities.filter((city) => city.country === country);
  }
  // Search could be omitted and only added for the 1st interview after completing the project.
  if (search !== null && search !== "") {
    cities = cities.filter((city) => city.name.includes(search));
  }
  cities = cities.slice(from, from + limit);

  res.json(cities);
});

app.get("/api/countries", async (req, res) => {
  if (!countries) {
    countriesCount = {};

    citiesJson.reduce((countriesCount, city) => {
      if (!countriesCount[city.country]) {
        countriesCount[city.country] = 0;
      }
      countriesCount[city.country] += 1;
      return countriesCount;
    }, countriesCount);

    countries = Object.entries(countriesCount)
      .map(([name, count]) => ({
        name,
        count,
      }))
      .sort((a, b) => a.name.localeCompare(b.name));
  }

  res.json(countries);
});

module.exports = app;
