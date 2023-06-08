const express = require('express');
const router = express.Router();
const fetchuser = require('../middleware/fetchuser');
const Note = require('../models/Note');
const { body, validationResult } = require('express-validator');



//Route1:Get all notes using GET "/api/notes/fetchallnotes".

router.get('/fetchallnotes', fetchuser, async (req, res) => {

  try {

    const notes = await Note.find({ user: req.user.id });

    res.json(notes)

  } catch (error) {

    console.error(error.message)
    res.status(500).send("Internal Server Error")
  }

})



//Route2: Add a new note using POST "/api/notes/addnote".

router.post('/addnote', fetchuser, [

  body('title', 'Enter a valid title').exists(),

], async (req, res) => {

  try {
    const { title } = req.body

    //if there are errors return bad request and errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const note = new Note({
      title, user: req.user.id
    })
    const savedNote = await note.save()

    res.json(savedNote)

  } catch (error) {

    console.error(error.message)
    res.status(500).send("Internal Server Error")

  }

})



//Route3: Delete an existing note using DELETE "/api/notes/deletenote". Login required

router.delete('/deletenote/:id', fetchuser, async (req, res) => {


  try {

    //Find a note to be deleted and delete it

    let note = await Note.findById(req.params.id);
    if (!note) { return res.status(404).send("Not Found") };


    //Allow updation only if that note belongs to user
    if (note.user.toString() !== req.user.id) {
      return res.status(401).send("Not Alowed")
    }

    note = await Note.findByIdAndDelete(req.params.id);

    res.json({ "Success": "Note Deleted" })

  }
  catch (error) {
    console.error(error.message)
    res.status(500).send("Internal Server Error")
  }

})

module.exports = router; 