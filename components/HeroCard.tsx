"use client"

import { baseImgUrl } from "@lib/constants"
import { Movie } from "@lib/types"
import { InfoOutlined, PlayCircleOutlineOutlined } from "@mui/icons-material"
import { useState } from "react"
import Modal from "./Modal"

const HeroCard = ({trendingMovie}:{trendingMovie:Movie}) => {
    const [showModel,setShowModel]=useState(false);

    const openModel=()=>setShowModel(true);
    const closeModel=()=>setShowModel(false);
  return (
    <div className="hero">
        <div className="hero-bg">
            <img src={`${baseImgUrl}${trendingMovie?.backdrop_path || trendingMovie?.poster_path}`} alt="trendingMovie" className="hero-bg-image" />
            <div className="overlay"></div>
        </div>
        <h1 className="hero-title">
            {trendingMovie?.title || trendingMovie?.name}
        </h1>
        <p className="hero-overview">
            {trendingMovie?.overview}
        </p>
        <div className="hero-btns" >
   <button onClick={openModel} className="hero-btn">
    <PlayCircleOutlineOutlined/>
    Play Now</button>
    <button  onClick={openModel} className="hero-btn">
   <InfoOutlined/> More Info
        </button>
        </div>
        {showModel && (
            <Modal movie={trendingMovie} closeModal={closeModel}/>
        )}
    </div>
  )
}

export default HeroCard