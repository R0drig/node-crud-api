const express = require ("express");
const create = require("../controller/person");
const bodyparser = require("bodyparser");
let router = express()

router.use(bodyparser.json())
router.post("/create",create.create)

