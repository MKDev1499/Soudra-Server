import Section from "../models/Sections/Sections.model.js";
// import "../models/Question/Question.model.js";

// Get all question types
export const listSections = async (req, res) => {
  try {
    const sections = await Section.find()?.populate("whoInPicQ");
    res.status(200).json(sections);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add a new question type
export const addSection = async (req, res) => {
  const { labelEn, labelAr, cover } = req.body;

  const section = new Section({
    labelEn,
    labelAr,
    cover,
  });

  try {
    const newSection = await section.save();
    res.status(201).json(newSection);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update a question type
export const updateSection = async (req, res) => {
  const { id } = req.params;
  const { labelEn, labelAr, cover } = req.body;

  try {
    const updatedSection = await Section.findByIdAndUpdate(
      id,
      { labelEn, labelAr, cover },
      { new: true }
    );
    res.status(200).json(updatedSection);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a question type
export const deleteSection = async (req, res) => {
  const { id } = req.params;

  try {
    await Section.findByIdAndDelete(id);
    res.status(200).json({ message: "Section deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
