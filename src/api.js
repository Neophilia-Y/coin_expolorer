import axios from "axios";

const api = axios.create({
    baseURL: "https://api.coinpaprika.com/v1/"
});

export const coinApi = {
    prices: () => api.get("tickers"),
    exchanges: () => api.get("exchanges"),
    coins: () => api.get("coins"),
    getDetail: (id) => api.get(`coins/${id}`),
    getMarket: (id) => api.get(`coins/${id}/markets`),
    getExchange: (id) => api.get(`coins/${id}/exchanges`)
}
