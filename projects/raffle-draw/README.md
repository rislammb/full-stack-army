# Raffle Draw

## Project Summary

A ticket selling and raffle draw api where users can purchase tickets and draw to check winners. The focus here is on functionality, not design.

## For open live

[Click](https://raffle-draw-5j94.onrender.com)

This live project is initially served from `viewServer.js` and this file imports `viewRoutes.js` and `viewControllers.js` files. If you want the REST API, you need to edit the `package.json` file. From-

```json
"start": "node viewServer.js"
```

to-

```json
"start": "node server.js"
```

## Requirements

- sell new ticket
- sell multiple tickets at once to a single user
- each ticket will have the following properties
  - ticket id
  - username
  - price
  - cratedAt
  - updatedAt
- get all tickets
- get ticket by id
- get tickets by username
- update ticket by id
- update tickets by username
- delete ticket by id
- delete tickets by username
- draw to get winners
