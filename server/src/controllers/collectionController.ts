import { Request, Response } from "express";
import { Collection, LegoSet } from "../models/index.js";


// Get all lego sets in the user's collection
export const getCollection = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;

    // Find all LEGO sets in the user's collection
    const userCollection = await Collection.findAll({
      where: { userId },
      include: {
        model: LegoSet, // Assuming LegoSet is associated with Collection
        as: 'LegoSet', // Adjust based on your association definition
      },
    });

    if (!userCollection.length) {
      return res.status(404).json({ message: 'No LEGO sets found in collection' });
    }

    return res.status(200).json(userCollection);
  } catch (error) {
    return res.status(500).json({ message: 'Error fetching user collection', error });
  }
};

// Add a lego set to the user's collection
export const addCollection = async (req: Request, res: Response) => {
  try {
    const { userId, legoSetId } = req.body;

    // Validate input data
    if (!userId || !legoSetId) {
      return res.status(400).json({ message: 'userId and legoSetId are required' });
    }

    // Simulate adding the collection
    const newCollection = await Collection.create({ userId, legoSetId });

    // Always send a response back
    return res.status(201).json(newCollection);
  } catch (error) {
    // Send an error response in case of failure
    return res.status(500).json({ message: 'Error adding to collection', error });
  }
};

// Remove a LEGO set from the user's collection
export const removeFromCollection = async (req: Request, res: Response) => {
  try {
    const { collectionId } = req.params;

    // Find the collection item by ID
    const collectionItem = await Collection.findByPk(collectionId);

    if (!collectionItem) {
      return res.status(404).json({ message: 'Collection item not found' });
    }

    // Delete the collection item
    await collectionItem.destroy();

    return res.status(200).json({ message: 'Collection item deleted successfully' });
  } catch (error) {
    return res.status(500).json({ message: 'Error deleting collection item', error });
  }
};