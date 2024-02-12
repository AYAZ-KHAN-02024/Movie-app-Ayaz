import React, { } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import Home from './Home-page/Home'
import PopulerList from './Populer-list/PopulerList'
import MostRated from './Most-Rated-list/MostRated'
import UpcomingList from './Upcoming-list/UpcomingList'
import Details from './Movie-details-page/Details'
import SignUp from './Sign-up/SignUp'
import SearchResult from './SearchResult/SearchResult'
import SDetails from './Search-Details/SDetails'
import Error from './Erorr-page/Error'



const App = () => {


  return (
    <>
      <Router>
      <Navbar />

        <Routes>


          <Route index element={<Home />} />
          <Route path='/Popular' element={<PopulerList />} />
          <Route path='/Search' element={<SearchResult />}/>
          <Route path='/Top-Rated' element={<MostRated />} />
          <Route path='/Upcoming' element={<UpcomingList />} />
          <Route path='/Sign-up' element={<SignUp />} />
          <Route path='/movie/search/:imdbID' element={<SDetails />} />
          <Route path='/movie/:id' element={<Details />} />
          <Route path='*' element={<Error/>} />



        </Routes>

      </Router>
    </>
  )
}

export default App
