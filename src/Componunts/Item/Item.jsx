import React from 'react'
import { Link } from "react-router-dom"
import itemStyle from "./Item.module.css"

export default function Item(props) {
  let { title, poster_path, overview, vote_average, id, media_type } = props.data;
  return <>
    <div className="col-md-2 text-center">
      <div className={` position-relative text-center ${itemStyle.overLay}`}>
        <img className={`w-100 ${itemStyle.scale}`} src={`https://image.tmdb.org/t/p/w500/${poster_path}`} />
        <Link to={`/details/${id}/${media_type}`}>
          <div className={`position-absolute text-white w-100 h-100 start-0 d-flex align-items-center top-0 ${itemStyle.overCaption}`}>
            <h6>{overview?.split(" ").splice(0, 10).join(" ")}</h6>
          </div>
        </Link>

        <div className="bg-info p-1 position-absolute end-0 top-0 ">{vote_average?.toFixed(1)}</div>
      </div>
      <h6 className='mt-3'>{title}</h6>
    </div>
  </>
}
