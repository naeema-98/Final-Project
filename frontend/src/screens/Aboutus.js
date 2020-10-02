import React, { Component } from 'react';
import aboutpic2 from "../images/aboutpic2.png";
import aboutceo from "../images/aboutceo.jpg";
import ceoabout from "../images/ceoabout.jpg";
//import watch from "../watch.jpg";
import pandw from "../images/pandw.jpg";
import points2 from "../images/points2.png";


class Aboutus extends Component {
    state = {  }
    render() { 
        return ( 
            <div >
            
            {/* <p>Your number one source for your favourite clasic perfumes and watches from around the globe! We're dedicated to giving you the very best of product, with a focus rewards, customer service and uniqueness.
            Founded in 2020 by Ayesha & Naeema, <italic><b>B&Beta</b></italic> has come with a vision of selling all different types of branded products with exciting offers and loyalty program. 
            In a short time by unique customer service , B&Beta has already acheived a place in hearts of their customer. 

             <br></br>
            
            We hope you enjoy our products as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.
            <br></br>
            <br></br>
            <h3 style={{fontWeight: 'bold'}}>We Reward Your Purchase!</h3>
            Sincerely,<br></br>
            Co-founders of B&Beta,<br></br>
            Ayesha & Naeema</p> */}


            <div class="bg-light">
  <div class="container py-5">
    <div class="row h-100 align-items-center py-5">
    
      <div class="col-lg-6">
        {/* <h1 class="display-4">About Us</h1> */}
        <h1 style={{fontWeight: 'bold'}}> Welcome to B and Beta!</h1>
        
        <p>Your number one source for your favourite clasic perfumes and watches from around the globe! We're dedicated to giving you the very best of product, with a focus rewards, customer service and uniqueness.
            Founded in 2020 by Ayesha & Naeema, <italic><b>B&Beta</b></italic> has come with a vision of selling all different types of branded products with exciting offers and loyalty program. 
            In a short time by unique customer service , B&Beta has already acheived a place in hearts of their customer. 

             <br></br>
            
            We hope you enjoy our products as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.
            <br></br>
            <br></br>
            <br></br>
            <h3 style={{fontWeight: 'bold'}}>We Reward Your Purchase!</h3>
            Sincerely,<br></br>
            Co-founders of B&Beta,<br></br>
            Ayesha & Naeema
        </p>

        
      </div>
      <div class="col-lg-6 d-none d-lg-block"><img src={aboutpic2} alt="" class="img-fluid"/></div>
    </div>
  </div>
</div>

<div class="bg-white py-5">
  <div class="container py-5">

  <div class="row align-items-center">
      <div class="col-lg-5 px-5 mx-auto"><img src={pandw} alt="" class="img-fluid mb-4 mb-lg-0"/></div>
      <div class="col-lg-6"><i class="fa fa-leaf fa-2x mb-3 text-primary"></i>
        <h2 class="font-weight-light">For the Impression that lasts Forever!</h2>
        <p class="font-italic text-muted mb-4">Our perfumes and watches will give you the class you always dreamed of!</p><a href="#" class="btn btn-light px-5 rounded-pill shadow-sm">Learn More</a>
      </div>
    </div> 
    <br></br>
    <br></br>
    <br></br>
    <div class="row align-items-center mb-5">
      <div class="col-lg-6 order-2 order-lg-1"><i class="fa fa-bar-chart fa-2x mb-3 text-primary"></i>
        <h2 class="font-weight-light">We Reward Your Purchase!</h2>
        <p class="font-italic text-muted mb-4">Earn 100 points for every 1000 rupees you spend.Te earned points you can spend on any product of your choie. We beleive that you deserve the BEST.</p><a href="#" class="btn btn-light px-5 rounded-pill shadow-sm">Learn More</a>
      </div>
      <div class="col-lg-5 px-5 mx-auto order-1 order-lg-2"><img src={points2} alt="" class="img-fluid mb-4 mb-lg-0"/></div>
    </div>
   
  </div>
</div>

            


<div class="bg-light py-5">
  <div class="container py-5">
    <div class="row mb-4">
      <div class="col-lg-5">
        <h2 class="display-4 font-weight-light">Our team</h2>
        <p class="font-italic text-muted">Our team is always here to help you!</p>
      </div>
    </div>

    <div class="row text-center">
    
      <div class="col-xl-3 col-sm-6 mb-5">
        <div class="bg-white rounded shadow-sm py-5 px-4"><img src={aboutceo} alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
          <h5 class="mb-0">AYESHA BASHIR </h5><span class="small text-uppercase text-muted">CEO - Founder</span>
          {/* <ul class="social mb-0 list-inline mt-3">
            <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-facebook-f"></i></a></li>
            <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-twitter"></i></a></li>
            <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-instagram"></i></a></li>
            <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-linkedin"></i></a></li>
          </ul>  */}
        </div>
      </div>
      

    
      <div class="col-xl-3 col-sm-6 mb-5">
        <div class="bg-white rounded shadow-sm py-5 px-4"><img src={ceoabout} alt="" width="90"   class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
          <h5 class="mb-0">NAEEMA ANWER</h5><span class="small text-uppercase text-muted">CEO - Founder</span>
         {/*  <ul class="social mb-0 list-inline mt-3">
            <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-facebook-f"></i></a></li>
            <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-twitter"></i></a></li>
            <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-instagram"></i></a></li>
            <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-linkedin"></i></a></li>
          </ul> */}
        </div>
      </div>
      

     
      <div class="col-xl-3 col-sm-6 mb-5">
        <div class="bg-white rounded shadow-sm py-5 px-4"><img src="https://res.cloudinary.com/mhmd/image/upload/v1556834133/avatar-2_f8dowd.png" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
          <h5 class="mb-0">TAYYABA ERUM</h5><span class="small text-uppercase text-muted">Sales Manager</span>
          {/* <ul class="social mb-0 list-inline mt-3">
            <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-facebook-f"></i></a></li>
            <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-twitter"></i></a></li>
            <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-instagram"></i></a></li>
            <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-linkedin"></i></a></li>
          </ul> */}
        </div>
      </div>
      

     
      <div class="col-xl-3 col-sm-6 mb-5">
        <div class="bg-white rounded shadow-sm py-5 px-4"><img src="https://res.cloudinary.com/mhmd/image/upload/v1556834133/avatar-1_s02nlg.png" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
          <h5 class="mb-0">UMAIR HUSSAIN</h5><span class="small text-uppercase text-muted">Marketing Manager</span>
         {/*  <ul class="social mb-0 list-inline mt-3">
            <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-facebook-f"></i></a></li>
            <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-twitter"></i></a></li>
            <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-instagram"></i></a></li>
            <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-linkedin"></i></a></li>
          </ul> */}
        </div>
      </div>
      

    </div>
  </div>
</div>



{/* end of container div  */}
</div> );
    }
}
 
export default Aboutus;