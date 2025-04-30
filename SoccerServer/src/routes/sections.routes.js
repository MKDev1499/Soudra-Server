import express from "express";
import {
  listSections,
  addSection,
  updateSection,
  deleteSection,
} from "../controllers/section.contoller.js";

const sectionRouter = express.Router();

// Add a section
sectionRouter.post("/", (req, res) => {
  // Call the addSection controller function
  addSection(req, res);
});

// Update a section
sectionRouter.put("/:id", (req, res) => {
  // Call the updateSection controller function
  updateSection(req, res);
});

// List sections
sectionRouter.get("/", (req, res) => {
  // Call the listSections controller function
  listSections(req, res);
});

// Delete a section
sectionRouter.delete("/:id", (req, res) => {
  // Call the deleteSection controller function
  deleteSection(req, res);
});

export default sectionRouter;
