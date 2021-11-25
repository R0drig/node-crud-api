const mongoose = require("mongoose")
const Person = require("../models/person")

const create  = (req,res,next) =>{

    let firstName  = req.body.firstName;
    let lastName  = req.body.lastName;
    let age  = req.body.age;
    let yearOfBirth = req.body.yearOfBirth;

    let person = new Person({
        firstName,
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
    })
}

const personUpdate =(req,res,next) =>{
    Person.findByIdAndUpdate(req.params.id,req.body, (err,emp)=>{
        if (err){
            return res.status(500).send({error: "Problem with the person recorded"})
        }
        res.send({sucess:"Person updated"});
    })
}


const personDelete =(req,res,next) =>{
    Person.findByIdAndDelete(req.params.id, (err,emp)=>{
        if (err){
            return res.status(500).send({error: "Problem with the deleting person recorded"})
        }
        res.send({sucess:"Operation sucessful"});
    })
}

module.exports.create = create 
module.exports.personView = personView 
module.exports.personUpdate = personUpdate
module.exports.personDelete = personDelete
