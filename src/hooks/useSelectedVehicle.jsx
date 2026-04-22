import { useContext } from "react";
import { SelectedVehicleContext } from "../contexts/selected-vehicle/SelectedVehicleContext";

export default function useSelectedVehicle() {
    const context = useContext(SelectedVehicleContext)

    if (!context) {
        throw new Error("AuthContext not found")
    } else {
        return context
    }
}