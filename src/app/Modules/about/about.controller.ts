/* eslint-disable no-console */
import { Request, Response } from "express";
import { AboutMe } from "./about.model"; 
import { IAboutMe } from "./about.interface";

// GET About Me
export const getAboutMe = async (req: Request, res: Response) => {
  try {
    const about = await AboutMe.findOne();
    if (!about) {
      return res.status(404).json({
        success: false,
        message: "No About Me info found",
      });
    }

    res.status(200).json({
      success: true,
      data: about,
    });
  } catch (error) {
    console.error("Error fetching AboutMe:", error);
    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};

// PATCH /about
export const upsertAboutMe = async (req: Request, res: Response) => {
  try {
    const updateData: Partial<IAboutMe> = req.body;

    // Find existing AboutMe
    let about = await AboutMe.findOne();

    if (about) {
      // Update existing
      about = await AboutMe.findByIdAndUpdate(about._id, updateData, {
        new: true,
        runValidators: true,
      });
    } else {
      // Create new
      about = await AboutMe.create(updateData);
    }

    res.status(200).json({
      success: true,
      data: about,
      message: "About Me saved successfully",
    });
  } catch (error) {
    console.error("Error in upsertAboutMe:", error);
    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};


// DELETE About Me
export const deleteAboutMe = async (req: Request, res: Response) => {
  try {
    const about = await AboutMe.findOneAndDelete();
    if (!about) {
      return res.status(404).json({
        success: false,
        message: "No About Me info found to delete",
      });
    }

    res.status(200).json({
      success: true,
      message: "About Me deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting AboutMe:", error);
    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};
