import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import movieStyle from "./Movie.module.css"
import getData from '../../Apimethods'
import Item from '../Item/Item';
import { Online, Offline } from "react-detect-offline" 
import Loading from '../LoadingPage/Loading';
import DisConected from '../Offline/DisConected';
import { useContext } from 'react';
import { Contextmedia } from '../Context/ContextMedia';


export default function Movies() {

  let { trendingMovies } = useContext(Contextmedia)
  // let [movie, setMovie] = useState([])
  // async function deMovie() {
  //   let trendingMovie = await getData("movie");
  //   setMovie(trendingMovie);
  // }

  // useEffect(() => {
  //   deMovie()
  // })
  return <>
    <Offline><DisConected /></Offline>
    <div className="container py-5">
      <div className="row g-4">
        <div className="col-md-4">
          <div className={`${movieStyle.Caption} py-4 w-25`}></div>
          <div>
            <h3>Trending<br />Movies<br />to Watch now</h3>
            <p className='text-muted mt-4'>Most watch Movies by days</p>
          </div>
          <div className={`${movieStyle.Caption} py-4 w-100`}></div>
        </div>

        {trendingMovies.length > 10 ? trendingMovies.map((ele, ind) => <Item key={ind} data={ele} />):<Loading/>}
      </div>
    </div>
  </>
}
