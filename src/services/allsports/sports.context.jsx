import React, { useState, useEffect, createContext } from 'react';
import { getAllSports , getMatchList } from './sports.service';

export const SportsContext = createContext();

const SportsProvider = ({ children }) => {
  const [allSports, setAllSports] = useState([]);
  const [matchList, setMatchList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSports = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await getAllSports();
        setAllSports(response.data);
      } catch (err) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };
    fetchSports();
    getMatchListById(4);
  }, []);

  const getMatchListById = async (matchId) => {
    setLoading(true);
    setError(null);
    try {
      const response = await getMatchList(matchId);
      setMatchList([...(response.data.t1 || []), ...(response.data.t2 || [])]);
    //  setMatchList(response.data);
      
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  

  return (
    <SportsContext.Provider value={{ allSports, loading, error, getMatchListById, matchList }}>
      {children}
    </SportsContext.Provider>
  );
};

export default SportsProvider;