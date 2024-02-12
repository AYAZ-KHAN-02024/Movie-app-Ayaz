import { useEffect, useState } from 'react'
import './Details.css'
import { useParams } from 'react-router-dom'

const Details = () => {
  const [MovieDetail, setMovieDetail] = useState([])
  const [production_companies, setCompanies] = useState([])
  const [genres, setgenres] = useState([])
  const { id } = useParams()
  useEffect(() => {
    GetData()
  }, [])
  const GetData = () => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
      .then(data => data.json())
      .then(data2 => { setMovieDetail(data2), setgenres(data2.genres), setCompanies(data2.production_companies) })


  }



  return (

    <div className='details-page'>
      <img className='backdrop-img' src={`https://image.tmdb.org/t/p/original/${MovieDetail.backdrop_path}`} alt="" />
      <div className="poster-details">
        <div className="poster-details-img">
          <img className='poster-img' src={`https://image.tmdb.org/t/p/original/${MovieDetail.poster_path}`} alt="" />
        </div>
        <div className="poster-details-text">
          <div className="title">{MovieDetail.original_title
          }</div>

          <div className="overview">
            {MovieDetail.overview}
          </div>
          <div className="genres">
            {
             genres && genres.map((value, index) => {
                return (
                  <div className="geners-name" key={index}>
                    {value.name}
                  </div>)
              })
            }
          </div>

          <div className="relase-date">
            {
              MovieDetail.release_date
            }

          </div>


          <div className="languages">
            languages-{MovieDetail.original_language}
          </div>

          <div className="rating">
            ⭐{MovieDetail.vote_average
            }
          </div>

          <div className="duration">
            duration:-{MovieDetail.runtime}min
          </div>
        </div>
      </div>
      <br />
      <div className="production-company">
        <h1>production-companies</h1>

        {production_companies &&
          production_companies.map((value, i) => {
            return (

              <div className='company-logo' key={i} >

                <div className="logo">
                  <img src={`https://image.tmdb.org/t/p/original${value.logo_path}`} alt="" />
                </div>
                <div className="company-name">
                  {value.name}
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
    
  )
}

export default Details
