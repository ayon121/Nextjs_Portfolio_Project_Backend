/* eslint-disable no-console */
import { Request, Response } from "express";
import { Project } from "./project.model";
import { QueryBuilder } from "../../utils/QueryBuilder";

// Create Project
export const createProject = async (req: Request, res: Response) => {
  try {
    const project = await Project.create(req.body);
    res.status(201).json({
      success: true,
      message: "Project created successfully",
      data: project,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to create project",
      error,
    });
  }
};

// Delete Project
export const deleteProject = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deletedProject = await Project.findByIdAndDelete(id);

    if (!deletedProject) {
      return res.status(404).json({
        success: false,
        message: "Project not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Project deleted successfully",
      data: deletedProject,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to delete project",
      error,
    });
  }
};

// Update Project
export const updateProject = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updatedProject = await Project.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updatedProject) {
      return res.status(404).json({
        success: false,
        message: "Project not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Project updated successfully",
      data: updatedProject,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to update project",
      error,
    });
  }
};

// Get Project By ID
export const getProjectById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const project = await Project.findById(id);

    if (!project) {
      return res.status(404).json({
        success: false,
        message: "Project not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Project fetched successfully",
      data: project,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch project",
      error,
    });
  }
};


export const getAllProjects = async (req: Request, res: Response) => {
  try {
    const builder = new QueryBuilder(Project.find(), req.query as Record<string, string>);

    // Apply query features
    builder.filter().search(['title']).sort().fields().paginate();

    const blogs = await builder.build();
    const meta = await builder.getMeta();

    res.status(200).json({
      success: true,
      message: 'Projects fetched successfully',
      data: blogs,
      meta
    });

  } catch (error) {
    console.error('Error fetching blogs:', error);
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
    });
  }
};
