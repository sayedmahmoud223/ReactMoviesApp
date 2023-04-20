import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import getData from '../../Apimethods'
import Item from '../Item/Item';
import { Online, Offline } from "react-detect-offline"
import Loading from '../LoadingPage/Loading';
import DisConected from '../Offline/DisConected';
import { useContext } from 'react';
import { Contextmedia } from '../Context/ContextMedia';


export default function People() {

  let { trendingPeople } = useContext(Contextmedia)
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
          <div className={` py-4 w-25`}></div>
          <div>
            <h3>Trending<br />People<br />to Watch now</h3>
            <p className='text-muted mt-4'>Most watch Movies by days</p>
          </div>
          <div className={`py-4 w-100`}></div>
        </div>

        {trendingPeople.map((ele, ind) => <>

          <div key={ind} className="col-md-2 text-center">
            <div className={` position-relative text-center `}>
              <img className={`w-100 `} src={`https://image.tmdb.org/t/p/w500/${ele.profile_path}`} />

              {/* <div className="bg-info p-1 position-absolute end-0 top-0 ">{ele.known_for?.vote_average}</div> */}
            </div>
            <h6 className='mt-3'>{ele.title}</h6>
          </div>

        </>)}
      </div>
    </div>
  </>
}

