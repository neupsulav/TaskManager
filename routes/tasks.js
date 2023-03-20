const express = require("express");
const router = express.Router();
const Task = require("../db/schema");

// api to get all the tasks
router.get("/api/", async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).send(tasks);
  } catch (error) {
    res.status(400).send(error);
  }
});

// api to get a specific task
router.get("/api/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const task = await Task.findOne({ _id: id });
    if (!task) {
      return res.status(404).send({ msg: `No such task found with id: ${id}` });
    }
    res.status(200).send(task);
  } catch (error) {
    res.status(500).send(error);
  }
});

// api to create a task
router.post("/api/", async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).send(task);
  } catch (error) {
    res.status(400).send(error);
  }
});

// api to update a task
router.patch("/api/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const task = await Task.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!task) {
      return res.status(404).send({ msg: `No task found with id:${id}` });
    }
    res.status(201).send(task);
  } catch (error) {
    res.status(500).send(error);
  }
});

// api to delete a task
router.delete("/api/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const task = await Task.findOneAndDelete({ _id: id });
    if (!task) {
      return res.status(404).send({ msg: `No such task found with id: ${id}` });
    }
    res.status(200).send(task);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
