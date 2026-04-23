import axios from "axios"

const API_URL = "https://flotta.vbdev.hu/api/"

//AUTH
export async function fetchToken(username, password) {
    try {

        const response = await axios.post(API_URL + "auth/login", {
            username,
            password
        })

        return response.data

    } catch (error) {
        if (error.response) {
            console.error("Server error: " + error)
        } else {
            console.error("Network error: " + error)
        }
    }
}

export async function fetchUser(token) {
    try {

        const response = await axios.get(API_URL + "auth/profile", {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })

        return response.data

    } catch (error) {
        if (error.response) {
            console.error("Server error: " + error)
        } else {
            console.error("Network error: " + error)
        }
    }
}

export async function fetchDrivers(token) {
    try {

        const response = await axios.get(API_URL + "drivers", {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })

        return response.data

    } catch (error) {
        if (error.response) {
            console.error("Server error: " + error)
        } else {
            console.error("Network error: " + error)
        }
    }
}

export async function fetchDriverById(token, id) {
    try {

        const response = await axios.get(API_URL + `drivers/${id}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })

        return response.data

    } catch (error) {
        if (error.response) {
            console.error("Server error: " + error)
        } else {
            console.error("Network error: " + error)
        }
    }
}

export async function fetchVehicles(token) {
    try {

        const response = await axios.get(API_URL + "vehicles", {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })

        return response.data

    } catch (error) {
        if (error.response) {
            console.error("Server error: " + error)
        } else {
            console.error("Network error: " + error)
        }
    }
}

export async function fetchVehicleById(token, id) {
    try {

        const response = await axios.get(API_URL + `vehicles/${id}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })

        return response.data

    } catch (error) {
        if (error.response) {
            console.error("Server error: " + error)
        } else {
            console.error("Network error: " + error)
        }
    }
}

export async function fetchTravelDocs(token) {
    try {

        const response = await axios.get(API_URL + "travel-logs", {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })

        return response.data

    } catch (error) {
        if (error.response) {
            console.error("Server error: " + error)
        } else {
            console.error("Network error: " + error)
        }
    }
}

export async function fetchFuelings(token) {
    try {

        const response = await axios.get(API_URL + "fuelings", {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })

        return response.data

    } catch (error) {
        if (error.response) {
            console.error("Server error: " + error)
        } else {
            console.error("Network error: " + error)
        }
    }
}

//POSTS

export async function addTravelDoc(token, body) {
    try {

        const response = await axios.post(API_URL + "travel-logs", body, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })

        return response.data

    } catch (error) {
        if (error.response) {
            console.error("Server error: " + error)
        } else {
            console.error("Network error: " + error)
        }
    }
}

export async function addFueling(token, body) {
    try {

        const response = await axios.post(API_URL + "fuelings", body, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })

        return response.data

    } catch (error) {
        if (error.response) {
            console.error("Server error: " + error)
        } else {
            console.error("Network error: " + error)
        }
    }
}

//PUT
export async function updateOdometer(token, id, body) {
    try {

        const response = await axios.put(API_URL + `vehicles/updateOdo/${id}`, body, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })

        return response.data

    } catch (error) {
        if (error.response) {
            console.error("Server error: " + error)
        } else {
            console.error("Network error: " + error)
        }
    }
}

//DELETES
export async function deleteDriverById(token, id) {
    try {

        const response = await axios.delete(API_URL + `drivers/${id}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })

        return response.data

    } catch (error) {
        if (error.response) {
            console.error("Server error: " + error)
        } else {
            console.error("Network error: " + error)
        }
    }
}
