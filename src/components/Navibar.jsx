import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../redux/slices./authSlice';

const Navibar = () => {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.auth); //auth: store.js에 정의된reducer 객체요소의 키

  console.log(userInfo);

  const handelLoginSuccess = (credentialResponse) => {
    const userData = jwtDecode(credentialResponse.credential);
    // userData.jti
    dispatch(
      login({
        userName: userData.given_name,
        userImage: userData.picture,
        userToken: userData.jti,
        userEmail: userData.useremail,
      })
    );
  };
  // localStorage.removeItem('token');
  return (
    <div className="navi">
      <GoogleLogin
        onSuccess={handelLoginSuccess}
        onError={() => {
          console.log('Login Failed');
        }}
      />
      ;
    </div>
  );
};

export default Navibar;

// (credentialResponse) =>{
//   const userInfo = jwtDecode(credentialResponse.credential); //(token )
//   // console.log(credentialResponse)
//   console.log(userInfo.jti);
//   console.log(userInfo.email);
//   console.log(userInfo.given_name);
// }
