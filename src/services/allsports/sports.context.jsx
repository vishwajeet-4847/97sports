import React, { useState, useEffect, createContext } from 'react';
import { getAllSports } from './sports.service';

export const SportsContext = createContext();

const SportsProvider = ({ children }) => {
  const [allSports, setAllSports] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSports = async () => {
      setLoading(true);
      setError(null);
      try {
        const sportsData = await getAllSports();
        setAllSports(sportsData.data);
      } catch (err) {
        setError(err.message || 'Something went wrong');
      } finally {
        setLoading(false);
      }
    };

    fetchSports();
  }, []);

  return (
    <SportsContext.Provider value={{ allSports, loading, error }}>
      {children}
    </SportsContext.Provider>
  );
};

export default SportsProvider ;