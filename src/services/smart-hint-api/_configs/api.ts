import axios from "axios";

export default function useConfigSmartHintApi() {

    const apiSmartHint = axios.create({
        baseURL: import.meta.env.VITE_BASE_URL_API_SMART_HINT || "",
        timeout: Number(import.meta.env.VITE_TIMOUT_API_SMART_HINT) || 15000,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "Content-Type",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        }
    });

    return { apiSmartHint }
}