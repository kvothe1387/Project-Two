import axios from 'axios';

const REBRICKABLE_API_URL = 'https://rebrickable.com/api/v3/lego/sets/';
const API_KEY = process.env.REBRICKABLE_API_KEY; // Ensure to load your API key from .env

// Function to search LEGO sets by set number
export const searchSetByNumber = async (setId: string) => {
  try {
    const response = await axios.get(`${REBRICKABLE_API_URL}${setId}/`, {
      headers: {
        Authorization: `key ${API_KEY}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching set by number:', error);
    throw error;
  }
};

// Function to search LEGO sets by set name
export const searchSetByName = async (setName: string) => {
  try {
    const response = await axios.get(REBRICKABLE_API_URL, {
      headers: {
        Authorization: `key ${API_KEY}`,
      },
      params: {
        search: setName,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching sets by name:', error);
    throw error;
  }
};
