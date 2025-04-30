import { Answer, AnswerType } from "../models/index.js";
import { translationServer } from "../utils/constants.js";

import axios from "axios";

// Function to add an answer
export const addAnswer = async (req, res) => {
  // Add your implementation here
  const { label, img, type } = req.body;
  const transURL = `${translationServer}/${label}`;

  const { data } = await axios(transURL);
  const answer = new Answer({
    labelAr: data?.translation,
    labelEn: label,
    img,
    type,
  });
  answer
    .save()
    .then((data) => {
      res.status(201).send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "An error occurred while creating the answer.",
      });
    });
};

// Function to update an answer
export const updateAnswer = (req, res) => {
  // Add your implementation here
  const { id } = req.params;
  const { labelEn, labelAr, img, type } = req.body;

  Answer.findByIdAndUpdate(id, { labelAr, labelEn, img, type }, { new: true })
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: `Cannot update Answer with id=${id}. Answer not found.`,
        });
      }
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: `Error updating Answer with id=${id}`,
      });
    });
};

// Function to list answers
export const listAnswers = (req, res) => {
  // Add your implementation here
  Answer.find()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "An error occurred while retrieving answers.",
      });
    });
};

// Function to add an answer type
export const addAnswerType = (req, res) => {
  // Add your implementation here
  const { label } = req.body;
  const answerType = new AnswerType({ label });
  answerType
    .save()
    .then((data) => {
      res.status(201).send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "An error occurred while creating the answer type.",
      });
    });
};

// Function to update an answer type
export const updateAnswerType = (req, res) => {
  // Add your implementation here
};

// Function to list answer types
export const listAnswerTypes = (req, res) => {
  // Add your implementation here
  AnswerType.find()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "An error occurred while retrieving answer types.",
      });
    });
};
