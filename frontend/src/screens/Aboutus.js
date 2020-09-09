import React, { Component } from 'react';

class Aboutus extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="container about">
            <h1 style={{fontWeight: 'bold'}}> Welcome to B and Beta!</h1>
            <p>Your number one source for your favourite clasic perfumes and watches from around the globe! We're dedicated to giving you the very best of product, with a focus rewards, customer service and uniqueness.
            Founded in 2020 by Ayesha & Naeema, <italic><b>B&Beta</b></italic> has come with a vision of selling all different types of branded products with exciting offers and loyalty program. 
            In a short time by unique customer service , B&Beta has already acheived a place in hearts of their customer. 

             <br></br>
            
            We hope you enjoy our products as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.
            <br></br>
            <br></br>
            <h3 style={{fontWeight: 'bold'}}>We Reward Your Purchase!</h3>
            Sincerely,<br></br>
            Co-founders of B&Beta,<br></br>
            Ayesha & Naeema</p>
            </div>
         );
    }
}
 
export default Aboutus;