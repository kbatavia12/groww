import axios from "axios";
import { getExploreUrl } from "../constants/Api"
import jsonData from "@/gainers_losers.json"

export async function getExploreData() {
    // const apiUrl = getExploreUrl();
    // console.log(apiUrl);
    // const response = await axios.get(apiUrl);
    // console.log(response.status)
    // return response.data;

    //! Toggle this if API rate limits
    return JSON.parse(JSON.stringify(jsonData))
}