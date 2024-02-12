import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import './MostRated.css';






const MostRated = () => {
  const [PopularCard, setPopularCard] = useState([])
  
  
  useEffect(() => {
    fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US")
        .then(data => data.json())
        .then(data2 => setPopularCard(data2.results))
        .catch((er)=>console.log(er,'some error at 13 mostrated.jsx'))
      

}, []);


  return (
    <>
    <div className='MostRated'>
      <div className="PopularCard-main" >
     
              { PopularCard.map((value,index) => {
                  return(
                      
                  <div className='PopularCards' key={index}>
                  <Link className='Navlink' to={`/movie/${value ? value.id : ""}`}>

                      
                          <img src={`https://image.tmdb.org/t/p/original${value ? value.poster_path : ""}`} alt="" /></Link>
                          <div className='popular-card-datails' >
                          
                              <h5 >{value ? value.overview.slice(0,100) : ""}</h5>
                              <h4 >{value ? value.release_date : ""}</h4>
                              <h3 >{`⭐${value ? value.vote_average: ""}`}</h3>
                               
                      
                          
                          </div>
                          
                          
                          
              
                  </div>)
              })}
              
          </div>
          
          
    </div>
    
   
     </>
  )
}

export default MostRated
export const {getId} = MostRated;



