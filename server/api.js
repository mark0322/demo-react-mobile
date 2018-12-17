const express = require('express')

const routerApi = express.Router()

routerApi
	.get('/data', (req, res) => {
		res.json(
      [
        {
          id: 1,
          title: "Alice's Adventures in Wonderland",
          author: "Charles Lutwidge Dodgson",
          age: 37
        }
      ]
    )
  })

exports.routerApi = routerApi
