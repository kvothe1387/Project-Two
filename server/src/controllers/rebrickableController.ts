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

export const getThemeIdByName = async (themeName: string) => {
  try {
    const response = await axios.get(`${REBRICKABLE_API_URL}themes/`, {
      headers: {
        Authorization: `key ${API_KEY}`,
      },
    });

    const themes = response.data.results;

    // Find the theme with the matching name (case-insensitive)
    const theme = themes.find((theme: any) =>
      theme.name.toLowerCase() === themeName.toLowerCase()
    );

    if (theme) {
      return theme.id;  // Return the theme ID
    } else {
      throw new Error(`Theme '${themeName}' not found`);
    }
  } catch (error) {
    console.error('Error fetching theme ID:', error);
    throw error;
  }
};

export const getSetsByThemeId = async (themeId: number) => {
  try {
    const response = await axios.get(`${REBRICKABLE_API_URL}sets/`, {
      headers: {
        Authorization: `key ${API_KEY}`,
      },
      params: {
        theme_id: themeId,
      },
    });

    return response.data.results;  // Return the list of sets
  } catch (error) {
    console.error('Error fetching sets by theme ID:', error);
    throw error;
  }
};

export const getSetsByThemeName = async (themeName: string) => {
  try {
    const themeId = await getThemeIdByName(themeName);
    const sets = await getSetsByThemeId(themeId);
    return sets;
  } catch (error) {
    console.error('Error fetching sets by theme name:', error);
    throw error;
  }
};