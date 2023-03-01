# Social Network API
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

A social media API routing project that uses CRUD principles for users, friends, reactions, and thoughts.

## Table of Contents

- [Built With](#build-with)
- [Installation](#installation)
- [Usage](#usage)
- [Preview](#preview)
- [License](#license)

## Built With

- Express.js
- Node.js
- mySQL
- MongoDB
- Mongoose

## Installation

To run this application:
- Install the required packages via `npm install` in the console
- Then input `npm start` to start the application

## Usage

- AS A social media startup
- I WANT an API for my social network that uses a NoSQL database
- SO THAT my website can handle large amounts of unstructured data

- GIVEN a social network API
- WHEN I enter the command to invoke the appliation
- THEN my server is started and the Mongoose models are synced to the MongoDB database
- WHEN I open API GET routes in Insomnia for users and thoughts
- THEN the data for each of these routes is displayed in a formatted JSON
- WHEN I test API POST, PUT, and DELETE routes in Insomnia
- THEN I am able to successfully create, update, and delete users and thoughts in my database
- WHEN I test API POST and DELETE routes in Insomnia
- THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user's friend list

## Bonus

- WHEN I delete a user
- THEN all associated thoughts and reactions are removed as well

## Preview

https://user-images.githubusercontent.com/114375310/222224651-768aeba6-437c-4d65-8900-3f3ff189c0e3.mp4

## License

See LICENSE in repo
