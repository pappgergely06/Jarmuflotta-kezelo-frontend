import axios from "axios";

const api = axios.create({
    baseURL: "https://flotta.vbdev.hu/api/",
});

const authHeader = (token) => ({
    headers: { Authorization: `Bearer ${token}` }
});

const handleError = (error) => {
    console.error(error.response ? "Server error" : "Network error", error);
    throw error;
};

//AUTH
export const fetchToken = (username, password) => 
    api.post("auth/login", { username, password }).then(r => r.data).catch(handleError);

export const fetchUser = (token) => 
    api.get("auth/profile", authHeader(token)).then(r => r.data).catch(handleError);

//GET
export const fetchDrivers = (token) => api.get("drivers", authHeader(token)).then(r => r.data);
export const fetchDriverById = (token, id) => api.get(`drivers/${id}`, authHeader(token)).then(r => r.data);
export const fetchVehicles = (token) => api.get("vehicles", authHeader(token)).then(r => r.data);
export const fetchVehicleById = (token, id) => api.get(`vehicles/${id}`, authHeader(token)).then(r => r.data);
export const fetchTravelDocsByVehicleId = (token, id) => api.get(`travel-logs/vehicle/${id}`, authHeader(token)).then(r => r.data);
export const fetchFuelingsByVehicleId = (token, id) => api.get(`fuelings/vehicle/${id}`, authHeader(token)).then(r => r.data);

//POST
export const addTravelDoc = (token, body) => api.post("travel-logs", body, authHeader(token)).then(r => r.data);
export const addFueling = (token, body) => api.post("fuelings", body, authHeader(token)).then(r => r.data);
export const addVehicle = (token, body) => api.post("vehicles", body, authHeader(token)).then(r => r.data);
export const addService = (token, body) => api.post("services", body, authHeader(token)).then(r => r.data)

//PUT
export const updateOdometer = (token, id, body) => api.put(`vehicles/updateOdo/${id}`, body, authHeader(token)).then(r => r.data);
export const updateVehicle = (token, id, body) => api.put(`vehicles/${id}`, body, authHeader(token)).then(r => r.data);

//DELETE
export const deleteDriverById = (token, id) => api.delete(`drivers/${id}`, authHeader(token)).then(r => r.data);
export const deleteVehicleById = (token, id) => api.delete(`vehicles/${id}`, authHeader(token)).then(r => r.data);