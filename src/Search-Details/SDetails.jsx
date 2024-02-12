import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../Movie-details-page/Details.css";
import "./SDetails.css";

function SDetails() {
  const [MovieDetail, setMovieDetail] = useState([]);
  const { imdbID } = useParams();

  useEffect(() => {
    GetData();
  }, []);
  const GetData = () => {
    fetch(`https://www.omdbapi.com/?i=${imdbID}&apikey=263d22d8`)
      .then((data) => data.json())
      .then((data2) => {
        setMovieDetail(data2);
      });
  };

  return (
    <div className="details-page Sdetails">
      <div className="poster-details">
        <div className="poster-details-img">
          <img className="poster-img" src={MovieDetail.Poster} alt="" />
        </div>

        <div className="poster-details-text">
          <div className="title">{MovieDetail.Title}</div>

          <div className="overview">{MovieDetail.Plot}</div>
          <div className="genres">
            <div className="geners-name">{MovieDetail.Genre}</div>
          </div>

          <div className="relase-date">{MovieDetail.Released}</div>

          <div className="languages">languages-{MovieDetail.Language}</div>

          <div className="rating">rating - ⭐{MovieDetail.imdbRating}</div>

          <div className="duration">duration:-{MovieDetail.Runtime}</div>
          <div className="duration">Actors- {MovieDetail.Actors}</div>
          <div className="duration">Director- {MovieDetail.Director}</div>
        </div>
      </div>
      <br />
    </div>
  );
}

export default SDetails;
