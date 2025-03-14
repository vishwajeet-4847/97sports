import React, { createContext, useEffect, useState } from 'react';
import { getAllCasinoGame } from './casino.service.js';

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

    return (
        <CasinoContext.Provider value={{ allCasinoGames, loading, error }}>
            {children}
        </CasinoContext.Provider>
    );
};

export default CasinoProvider;
