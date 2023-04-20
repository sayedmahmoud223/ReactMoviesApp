import axios from "axios"
export default async function getData(type) {
    let { data } = await axios.get(`https://api.themoviedb.org/3/trending/${type}/week?api_key=f6dff9b1bb4c50824a9567e9e6bbccff`);
    return data.results;
}
export async function getDetails(id, mediaType) {
    let { data } = await axios.get(`https://api.themoviedb.org/3/${mediaType}/${id}?api_key=f6dff9b1bb4c50824a9567e9e6bbccff`);
    return data;
}
