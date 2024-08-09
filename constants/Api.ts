export const BASE_ENDPOINT = "https://www.alphavantage.co/query"

export const exploreEndpoints = {
    "topGainersLosers": "TOP_GAINERS_LOSERS"
}

export const API_KEY = "DYVMAGRKUFYONQ16"

export function getExploreUrl() {
    return `${BASE_ENDPOINT}?function=${exploreEndpoints.topGainersLosers}&apikey=${API_KEY}`
} 