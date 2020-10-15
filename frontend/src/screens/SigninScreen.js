import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { signin } from '../actions/userActions';
import swal from 'sweetalert';

function SigninScreen(props) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const userSignin = useSelector(state => state.userSignin);
  const { loading, userInfo, error } = userSignin;
  const dispatch = useDispatch();
  const redirect = props.location.search ? props.location.search.split("=")[1] : '/';
  useEffect(() => {
    if (userInfo) {
     
      props.history.push(redirect);
    }
    return () => {
      
    };
    
  }, [userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signin(email, password));

  }
  return( 
  <div>
   <hr className="line"></hr>
  <div className="form">
    <form onSubmit={submitHandler} >
      <ul className="form-container details-action">
        <li>
          <h2 style={{ fontSize: 25, align: "center"}}><strong>Sign-In</strong></h2>
        </li>
        <li>
          {loading && <div>Loading...</div>}
          {error && <div> {error}</div>}
          {/* (swal("Sorry", "Invalid email or password", "success")) */}
        </li>
        <li>
          <label htmlFor="email">
            Email
          </label>
          <input type="email" name="email" id="email" placeholder="Enter Your Email" onChange={(e) => setEmail(e.target.value)}>
          </input>
        </li>
        <li>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" placeholder="Enter Your Password" onChange={(e) => setPassword(e.target.value)}>
          </input>
        </li>
        <li>
          <button type="submit" className="button primary">Signin</button>
        </li>
        <li>
          New to bandbeta?
        </li>
        <li>
          <Link to={redirect === "/" ? "register" : "register?redirect=" + redirect} className="button secondary text-center" >Create your B&BETA account</Link>
        </li>
      </ul>
    </form>
  </div>
  </div>
  )
}
export default SigninScreen;