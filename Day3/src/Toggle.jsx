// import React, { useState } from "react";
// import './Toggle.css';
// const App = () => {
//   const [change, setChange] = useState(false);
//   const [showAlert, setShowAlert] = useState(false);

//   const handleSubmit = (event) => 
//     {
//     event.preventDefault();
//     setShowAlert(true);
// };
//   const toggleView = () => {
//     setChange(!change);
//   };

//   const LoginPage = () => {
//     return (
//       <div className ="logincontainer" >
//         <form className="loginform">
//         <h2 className="loginh2">Login Page</h2>
//         <label className="lables">Email</label>
//         <br></br><br></br>
//         <input type="email" id="email" placeholder="Please Enter Your email" className="loginb"  required></input>
//         <br></br><br></br>
//         <label className="lables">Password</label>
//         <br></br><br></br>
//         <input type="password" id="email" placeholder="Please Enter Your password" className="loginb" required></input>
//         <br></br><br></br>
//         <button className="loginbutton">Login</button>
//         <br></br><br></br>
//         <button onClick={toggleView} className="but1">Go to Register page</button>
//         </form>
//       </div>
//     );
//   };

//   const RegisterPage = () => {
//     return (
//       <div className="logincontainer2">
//         <form className="loginform2" >
//         <h2 className="loginh2">Register Page</h2>
//         <label className="lables2">Name</label>
//         <br></br>
//         <input type="text" id="text" placeholder="Please Enter Your Name" className="loginb"  required></input><br/>
//         <br></br>
//         <label className="lables2">Email</label>
//         <br></br>
//         <input type="email" id="email" className="loginb" placeholder="Please Enter Your Email" required></input><br/>
//         <br></br>
//         <label className="lables2">Password</label>
//         <br></br>
//         <input type="password" id="password" className="loginb" placeholder="Please Enter The Password" required></input><br/>
//         <br></br>
//         <button className="loginbutton">Register</button>
//         <br></br>
//         <br></br>
//         <button onClick={toggleView} className="but1">Go to Login page</button>
//         </form>
        
//       </div>
//     );
//   };

//   return (
//     <div>
//       {change ? <RegisterPage /> : <LoginPage />}
//     </div>
//   );
// };

// export default App;
import React, { useState } from "react";
import './Toggle.css';

const App = () => {
  const [change, setChange] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
      setChange(false); // Navigate back to login page
    }, 2000); // Adjust the timeout duration as needed
  };

  const toggleView = () => {
    setChange(!change);
  };

  const LoginPage = () => {
    return (
      <div className="logincontainer">
        <form className="loginform">
          <h2 className="loginh2">Login Page</h2>
          <label className="labels">Email</label>
          <br /><br />
          <input type="email" id="email" placeholder="Please Enter Your email" className="loginb" required />
          <br /><br />
          <label className="labels">Password</label>
          <br /><br />
          <input type="password" id="password" placeholder="Please Enter Your password" className="loginb" required />
          <br /><br />
          <button className="loginbutton">Login</button>
          <br /><br />
          <button onClick={toggleView} className="but1">Go to Register page</button>
        </form>
      </div>
    );
  };

  const RegisterPage = () => {
    return (
      <div className="logincontainer2">
        <form className="loginform2" onSubmit={handleSubmit}>
          <h2 className="loginh2">Register Page</h2>
          <label className="labels2">Name</label>
          <br />
          <input type="text" id="text" placeholder="Please Enter Your Name" className="loginb" required />
          <br /><br />
          <label className="labels2">Email</label>
          <br />
          <input type="email" id="email" className="loginb" placeholder="Please Enter Your Email" required />
          <br /><br />
          <label className="labels2">Password</label>
          <br />
          <input type="password" id="password" className="loginb" placeholder="Please Enter The Password" required />
          <br /><br />
          <button type="submit" className="loginbutton">Register</button>
          <br /><br />
          <button onClick={toggleView} className="but1">Go to Login page</button>
        </form>
        {showAlert && <div className="alert">Registration successful! Redirecting to login...</div>}
      </div>
    );
  };

  return (
    <div>
      {change ? <RegisterPage /> : <LoginPage />}
    </div>
  );
};
export default App;
