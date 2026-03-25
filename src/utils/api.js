import axios from "axios"

const API_URL = "https://flotta.vbdev.hu/api/"

export async function fetchUser(token) {
    try {

        const response = await axios.get(API_URL + "auth", {
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

export async function fetchToken(username, password) {
    try {

        const response = await axios.post(API_URL + "login", username, password)

        return response.data

    } catch {
        if (error.response) {
            console.error("Server error: " + error)
        } else {
            console.error("Network error: " + error)
        }
    }
}