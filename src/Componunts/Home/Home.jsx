import React, { useEffect } from 'react'
import { useState } from 'react'
import homeStyle from "./Home.module.css"
import getData from "../../Apimethods"
import Item from '../Item/Item';
import Loading from '../LoadingPage/Loading';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Online, Offline } from "react-detect-offline"
import DisConected from '../Offline/DisConected';
import { useContext } from 'react';
import { Contextmedia } from '../Context/ContextMedia';
import axios from 'axios';
export default function Home({search}) {
    let { trendingMovies, trendingTv } = useContext(Contextmedia);
    
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 8,
        slidesToScroll: 5,
        autoplay: true,
        speed: 10000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            }
        ]
    };
    

    return <>
        <div className="container">
            <div className="row">
                {search ? search.filter((ele) => ele.poster_path != null).map((ele, ind) => <Item key={ind} data={ele} />) : ""}
            </div>
        </div>
    <Slider {...settings}>
            {trendingMovies.map((ele, ind) => <img key={ind} height={`250px`} src={`https://image.tmdb.org/t/p/w500/${ele.poster_path}`} />)}
    </Slider>

        <Offline><DisConected /></Offline>


        {trendingMovies.length > 0 ? <div className="container my-5">
            <div className="row g-4 py-3n">
                <div className="col-md-4">
                    <div className={`${homeStyle.Caption} py-4 w-25`}></div>
                    <div>
                        <h3>Trending<br />Movies<br />to Watch now</h3>
                        <p className='text-muted mt-4'>Most watch Movies by days</p>
                    </div>
                    <div className={`${homeStyle.Caption} py-4 w-100`}></div>
                </div>

                {trendingMovies.map((ele, ind) =>
                    <Item key={ind} data={ele} />)}
            </div>

        </div> : <Loading />}
        <Slider {...settings}>
            {trendingTv.map((ele, ind) => <img key={ind} height={`300px`} src={`https://image.tmdb.org/t/p/w500/${ele.poster_path}`} />)}
        </Slider>

        <div className="container my-4">
            <div className="row g-4">
                <div className="col-md-4 d-block">
                    <div className={`${homeStyle.Caption} py-4 w-25`}></div>
                    <div>
                        <h3>Trending<br />Tv<br />to Watch now</h3>
                        <p className='text-muted mt-4'>Most watch Tv by days</p>
                    </div>
                    <div className={`${homeStyle.Caption} py-4 w-100`}></div>
                </div>

                {trendingTv.map((ele, ind) => <Item key={ind} data={ele} />)}

            </div>

        </div>
    </>
}
