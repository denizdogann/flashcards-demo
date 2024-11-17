const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Card = require("../models/cardModel");


//get all flashcards
router.get("/", async (req, res) => {
    const cards = await Card.find({}).sort({createdAt: -1})
    res.status(200).json(cards)
})

//get a single flashcard

router.get("/:id", async (req,res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({ error: "no such card" })
    }

    const card = await Card.findById(id)
    if(!card){
        return res.status(404).json({ error: "no such card" })
    }
    res.status(200).json(card)
})


//create a flashcard
router.post("/", async (req, res) => {
    const { front, back, color } = req.body;
    try {
        const card = await Card.create({ front, back, color })
        res.status(200).json(card)
      } catch (error) {
        res.status(400).json({ error: error.message })
      }
})

//delete a flashcard 
router.delete("/:id", async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({error: 'no such flashcard'})
    }
    const card = await Card.findOneAndDelete({_id: id})

    if(!card){
        return res.status(404).json({ error: 'no such vard' })
    }
    res.status(200).json(card)

})

//update a flashcard
router.patch("/:id", async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({ error: "no such card"})
    }
    const card = await Card.findOneAndUpdate({_id: id}, {
        ...req.body
    })
    if(!card){
        return res.status(400).json({ error: "no such card"})
    }
    res.status(200).json(card)
})

module.exports = router