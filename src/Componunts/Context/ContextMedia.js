import { createContext, useEffect, useState } from "react";
import getData from "../../Apimethods"

export let Contextmedia = createContext("");

export default function ContextmediaProvider(props) {

    let [trendingMovies, settrendingMovies] = useState([]);
    let [trendingTv, settrendingTv] = useState([]);
    let [trendingPeople, settrendingPeople] = useState([]);

    async function getTrending() {
        let movie = await getData('movie');
        settrendingMovies(movie)

        let tv = await getData('tv');
        settrendingTv(tv);

        let people = await getData('person');
        settrendingPeople(people);
    }
    useEffect(() => {
        getTrending()
    }, [])

    return <Contextmedia.Provider value={{ trendingMovies, trendingTv, trendingPeople }}>
        {props.children}
    </Contextmedia.Provider>
}