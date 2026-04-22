import { useState } from "react";
import { SelectedVehicleContext } from "./SelectedVehicleContext";

function SelectedVehicleProvider({ children }) {

    const [selectedVehicle, setSelectedVehicle] = useState(null)

    return (
        <SelectedVehicleContext.Provider value={{selectedVehicle, setSelectedVehicle}}>
            {children}
        </SelectedVehicleContext.Provider>
    );
}

export default SelectedVehicleProvider;