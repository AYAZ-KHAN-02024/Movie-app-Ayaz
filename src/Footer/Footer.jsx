import  './Footer.css'


const Footeer = () => {
  return (
    <div className='footer'>
     <footer>
      <div className="contact-details">
        <h3>contact-us</h3>
        <h4>mobile-no:- 999999999</h4>
        <h4>email-id:- abcd000@email.com</h4>
        <h4>Address:- Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex sequi </h4> 
      </div>
      
      <div className="feedback">
        <h3>QUESTION?/feedback</h3>
        <input type="text" placeholder='name'/>
        <input type="email" placeholder='e-mail'/>
        <textarea  placeholder='message' />
        <button>send message</button>
      </div>
     
      </footer>

      
      <div className="feedback">
      <span>&copy; copyright {new Date().getFullYear()} m-star</span>
      <span>MADE BY AYAZ KHAN</span>
      
      </div>
    </div>
    
  )
}

export default Footeer
