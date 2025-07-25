import React from 'react'

export default function Navbar() {

  return (
  <>
   <nav class="navbar bg-dark border-bottom border-body" data-bs-theme="dark">

        <div className="container-fluid">
          <a className="navbar-brand" href="#">Rudra's-Portfolio</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">About Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">Contact Us</a>
              </li>
              
              
            </ul>
          
   

        </div>
        
        </div>
       
           
</nav>
     
  </>
  )
}
