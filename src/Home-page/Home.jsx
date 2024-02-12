import { useEffect, useState } from 'react'
import './Home.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {Carousel}  from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import PopularCard from '../Popular-Card/PopularCard';
import Footeer from '../Footer/Footer';


function Home() {

  const [PopularList, setPopularList] = useState([''])

  useEffect(() => {
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US")
      .then(data => data.json())
      .then(data2 => setPopularList(data2.results))

  }, [])


  return (
    <>
      <div className="Movie-Container">
        <div className='MovieApp'>
          <div className="poster">
            <Carousel
              showThumbs={false}
              autoPlay={true}
              interval={2000}
              infiniteLoop={true}
              showStatus={false} 
              >
              
              {
                PopularList.map((value,index) => {

                  return (
                    <div key={index}>
                     <Link   style={{textDecoration:'none',color:'white'}} to={`/movie/${value.id}`}>
                      <div className="posterImg">
                        <img src={` https://image.tmdb.org/t/p/original/${value.backdrop_path}`} alt="" />
                        <div className="posterDetails">
                        <h1>{value.original_title}</h1>
                        <h3>{value.overview}</h3>
                        <h2>{value.vote_average}⭐</h2>
                        
                      </div>
                      </div>
                      
                      </Link>

                      
                    </div>
                  )
                })
              }

            </Carousel>
          </div>
          <PopularCard/>
         
        </div>
      </div>
      <Footeer/>

    </>
  )
}

export default Home
