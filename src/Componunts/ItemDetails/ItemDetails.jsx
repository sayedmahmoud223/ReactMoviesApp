import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import { getDetails } from '../../Apimethods';

export default function ItemDetails() {
    let urlData = useParams();
    console.log(urlData.id);
    let [details, setdetails] = useState('')
    async function getDetailItem() {
        let details = await getDetails(urlData.id, urlData.type);
        setdetails(details);
    }
    console.log(details);

    useEffect(() => {
        getDetailItem()
    }, [])
    return <>
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <img className='w-100' src={`https://image.tmdb.org/t/p/w500/${details.poster_path}`} />
                </div>
                <div className="col-md-8">
                    <h1>{details.original_title} {details.name}</h1>
                    <p className='text-muted'>{details.tagline}</p>
                    {/* {details.genres.map((ele, ind) =><span key={ind} className='badge bg-info p-2 m-2'>{ele.name}</span>)} */}
                    <ul className="list-unstyled py-2 my-2">
                        <li>Vote : {details.vote_average}</li>
                        <li>Vote Count : {details.vote_count}</li>
                        <li>Release Data : {details.release_date} {details.first_air_date}</li>
                        <li>Popularity : {details.popularity}</li>
                    </ul>
                    <p className='py-5 text-muted'>{details.overview}</p>
                </div>
            </div>
        </div>
    </>
}
