import type { UserLogin } from '../interfaces/UserLogin';

const login = async (userInfo: UserLogin) => {
  try {
    const response = await fetch('/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userInfo),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error('User information not retrieved, check network tab!');
    }

    return data;
  } catch (err) {
    if (err instanceof Error) {
      console.error('Error from user login:', err.message);
    } else {
      console.error('Error from user login:', err);
    }
    return Promise.reject('Could not fetch user info');
  }
};

export { login };
