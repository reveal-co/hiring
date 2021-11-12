# App

### Expected time: 2 ~ 3 hrs

### Overview

We'd like you to extend a frontend for a cities database. Users will be able to view all the cities in the database, or filter them by country.

### Starter code

A basic working code has been included in `frontend/src`; please use this as your starting point. This code fetches information from a server. You can find the backend code in `backend/src`.

To start up the app first install all the dependencies with `yarn` inside each folder (backend and frontend). Then run `yarn start` on each one.

### Requirements

N.B. You are only expected to work on the front-end code. Feel free to checkout the available endpoints in the back-end code but you shouldn't change it.

When a user opens the app, they see a list of "all cities" which are in the database.

A user can:

- Click on "(all cities)" to see an unfiltered list of cities in the table;
- Click on a specific country on the left side to see only cities from that country;
- See the number of cities in a particular country in a parenthetical next to the country name (e.g. "France (230)");
- See which country is currently selected with some visual indicator (e.g. a change in the background color of the country item);
- Click on the city link to open the Geoname page for that city in a new tab (the format is this: `https://www.geonames.org/<geonameid>/`).

The table row for a city includes the following elements; please make sure to include all of them:

- Name
- Country
- Sub-country
- Link to geoname page

Some notes:

- There are a LOT of cities in the database; too many to render all at once on the page! Please give some consideration to how this should be handled. We don't want the initial load of the app to be very slow and unresponsive, but it would be okay if the app gets progressively slower as more and more cities are shown when a user is scrolling or paging through the cities.
- More cities will be added to the database as time goes on; this may include the addition of more countries. Your app should handle the addition of more countries WITHOUT needing to change the code at all.

### Evaluation

We will evaluate your solution using the following assessments:

- Does it implement the "user requirements"?
- Is the code well-organized, easy to read, and reasonably modular?
- Is the code idiomatic for the language and framework?
- Is the code tested? And do the tests pass?

We will NOT evaluate your solution based on how the UI looks.

Please think about how you test at least one aspect of the code.

### API Documentation

`localhost:3001/api/cities?from=__&to=__&country=__`:

```
[
  {
    "country": "Andorra",
    "geonameid": 3040051,
    "name": "les Escaldes",
    "subcountry": "Escaldes-Engordany"
  },
  {
    "country": "Andorra",
    "geonameid": 3041563,
    "name": "Andorra la Vella",
    "subcountry": "Andorra la Vella"
  },
  ...
]
```

`localhost:3001/api/countries`:

```
[
  {
    "name": "Afghanistan",
    "count": 48
  },
  {
    "name": "Aland Islands",
    "count": 1
  },
  {
    "name": "Albania",
    "count": 20
  },
  ...
]
```
