const mongoose = require("mongoose")
const Person = require("../models/person")

const create  = (req,res,next) =>{

    let firstName  = req.body.firstName;
    let lastName  = req.body.lastName;
    let age  = req.body.age;
    let yearOfBirth = req.body.yearOfBirth;

    let person = new Person({
        FirstName,
        lastName,
        age,
        yearOfBirth
    })

    person.save().then((data)=>{
        res.send(data)
    })
}

const personView = (req,res,next) =>{
    Person.find({}).then((data)=>{
        res.send(data)
    )})
}

module.exports.create = create 
module.exports.personView = personView 
