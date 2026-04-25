import { createContext, useState, useContext } from "react";

const RefreshContext = createContext();

export const RefreshProvider = ({ children }) => {

    const [triggers, setTriggers] = useState({
        vehicles: 0,
        travelDocs: 0,
        fuelings: 0,
        services: 0,
        drivers: 0,
    });

    const triggerRefresh = (type) => {
        if (triggers.hasOwnProperty(type)) {
            setTriggers((prev) => ({ ...prev, [type]: prev[type] + 1 }));
        } else {
            console.warn(`Ismeretlen frissítési típus: ${type}`);
        }
    };

    return (
        <RefreshContext.Provider value={{ triggers, triggerRefresh }}>
            {children}
        </RefreshContext.Provider>
    );
};

export const useRefresh = () => useContext(RefreshContext);