const express = require ("express");
const create = require("../controller/person");
const personView = require("../controller/person");
const personUpdate = require("../controller/person");
const personDelete = require("../controller/person");
const bodyparser = require("bodyparser");
let router = express()

router.use(bodyparser.json())
router.post("/create",create.create)
router.get("/",personView.personView) 
router.patch("/:id", personUpdate.personUpdate)
router.delete("/delete/:id", personDelete.personDelete)

