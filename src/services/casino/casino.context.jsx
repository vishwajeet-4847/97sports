import React, { createContext, useEffect, useState } from "react";
import { getAllCasinoGame , getCasinoGameDetailsById } from "./casino.service.js";

export const CasinoContext = createContext();

const CasinoProvider = ({ children }) => {
  const [allCasinoGames, setAllCasinoGames] = useState([]);
  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchCasinoGames();
  }, []);

  const fetchCasinoGames = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await getAllCasinoGame();
      setAllCasinoGames(res.data.t1);
    } catch (err) {
      setError(err.message || "Failed to fetch casino games");
    } finally {
      setLoading(false);
    }
  };

  const getCasinoById = (id) => {
    if (loading) return null;
    return allCasinoGames.find((game) => game.gmid === id) || null;
  };

  const getCasinoDetails = async (id) => {
    setLoading(true);
    setError(null);
    try {
      const res = await getCasinoGameDetailsById(id);
      return res.data;
    } catch (err) {
      setError(err.message || "Failed to fetch casino game details");
    } finally {
      setLoading(false);
    }
  }
  return (
    <CasinoContext.Provider
      value={{ allCasinoGames, loading, error, getCasinoById , getCasinoDetails }}
    >
      {children}
    </CasinoContext.Provider>
  );
};

export default CasinoProvider;
