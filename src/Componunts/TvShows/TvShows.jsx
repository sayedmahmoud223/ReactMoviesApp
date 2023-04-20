import React, { useEffect, useState } from 'react'
import getData from '../../Apimethods';
import Item from '../Item/Item';
import Loading from '../LoadingPage/Loading';
import DisConected from '../Offline/DisConected';
import { Online, Offline } from "react-detect-offline" 
import tvStyle from "./Tv.module.css"
import { useContext } from 'react';
import { Contextmedia } from '../Context/ContextMedia';
export default function TvShows() {
  let { trendingTv } = useContext(Contextmedia)
  // let [tv, setTv] = useState([])
  // async function detaTv() {
  //   let trendingTv = await getData("tv");
  //   setTv(trendingTv);
  // }

  // useEffect(() => {
  //   detaTv()
  // })
  return <>
    <Offline><DisConected /></Offline>
    {trendingTv.length > 0 ? <div className="container py-5">
      <div className="row g-4">
        <div className="col-md-4">
          <div className={`${tvStyle.Caption} py-4 w-25`}></div>
          <div>
            <h3>Trending<br />Tv<br />to Watch now</h3>
            <p className='text-muted mt-4'>Most watch Tv by days</p>
          </div>
          <div className={`${tvStyle.Caption} py-4 w-100`}></div>
        </div>

        {trendingTv.map((ele, ind) => <Item key={ind} data={ele} />)}
      </div>
    </div>: <Loading/>}
      
  </>
}
