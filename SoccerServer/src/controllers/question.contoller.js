import QuestionType from "../models/Question/QuestionType.model.js";
import WhoInPicQ from "../models/Question/WhoInPicQ.model.js";
import Section from "../models/Sections/Sections.model.js";
import BannkQ from "../models/Question/BankQ.model.js";

// Get all question types
export const listQuestionTypes = async (req, res) => {
  try {
    const questionTypes = await QuestionType.find();
    res.status(200).json(questionTypes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add a new question type
export const addQuestionType = async (req, res) => {
  const { label } = req.body;

  const questionType = new QuestionType({
    label,
  });

  try {
    const newQuestionType = await questionType.save();
    res.status(201).json(newQuestionType);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update a question type
export const updateQuestionType = async (req, res) => {
  const { id } = req.params;
  const { label } = req.body;

  try {
    const updatedQuestionType = await QuestionType.findByIdAndUpdate(
      id,
      { label },
      { new: true }
    );
    res.status(200).json(updatedQuestionType);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all question types
export const listWhoInPicQs = async (req, res) => {
  try {
    const questions = await WhoInPicQ.find().populate("correctAnswers");
    res.status(200).json(questions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const addWhoInPicQ = async (req, res) => {
  const { labelEn, labelAr, img, correctAnswers, section } = req.body;

  const whoInPicQ = new WhoInPicQ({
    labelEn,
    labelAr,
    img,
    correctAnswers,
    section,
  });

  try {
    const newWhoInPicQ = await whoInPicQ.save();
    await Section.findByIdAndUpdate(section, {
      $addToSet: { whoInPicQ: newWhoInPicQ._id },
    });

    res.status(201).json(newWhoInPicQ);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const addBankQ = async (req, res) => {
  const { labelEn, labelAr, correctAnswer, section } = req.body;

  const bankQ = new BannkQ({
    labelEn,
    labelAr,
    correctAnswer,
    section,
  });

  try {
    const newBankQ = await bankQ.save();
    await Section.findByIdAndUpdate(section, {
      $addToSet: { whoInPicQ: newBankQ._id },
    });

    res.status(201).json(newBankQ);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
