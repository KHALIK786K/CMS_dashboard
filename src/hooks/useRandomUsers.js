import { useState, useEffect } from 'react';

const useRandomUsers = () => {
  const [randomUsers, setRandomUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://randomuser.me/api/?results=12');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        const formattedData = data.results.map((user) => ({
          id: user.login.uuid,
          username: user.login.username,
          email: user.email,
          image: user.picture.thumbnail,
          status: Math.random() < 0.5 ? 'active' : 'passive',
          age: Math.floor(Math.random() * 40) + 18, // Random age between 18 and 57
        }));
        setRandomUsers(formattedData);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return { randomUsers, isLoading, error };
};

export default useRandomUsers;
