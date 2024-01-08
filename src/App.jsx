import Navbar from './components/navbar/Navbar';
import './App.css';
//if you export the component as not a default then use the curly bracket.
//(home is export as non-default that's why curly bracket is used)
import { Home } from "./components/home/Home";
//if you export the component as a default then curly bracket don't use.
//(about is export as default that's why curly bracket is not used)
import About from "./components/about/About";
import Blog from "./components/blog/Blog";
import Contact from "./components/contact/Contact";
import {SignUp} from './components/signUp/SignUp';
import {SignIn} from './components/signIn/SignIn';
import {Dashboard} from './components/dashboard/Dashboard'
import { Route, Routes } from "react-router-dom";
import { MainRoute } from "./components/navbar/MainRoute";
import { PageNotFound } from "./components/pageNotFound/PageNotFound";
import { useState } from 'react';
import PrivateRoute from "./components/privateRouter/PrivateRouter";
import { BlogContext } from "./context/BlogContext"; 
import { useEffect,useContext } from "react";


function App() {

  const [isLoggedIn,setIsLoggedIn] = useState(false);

  const {fetchData} = useContext(BlogContext);
  useEffect(()=>{ 
    fetchData();
  },[]);

  return (
    <div className="App">
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>

      <Routes>
        <Route path="/" element={<MainRoute />}>
          <Route index element={<Home/>} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/Contact" element={<Contact />}/>
          <Route path="/signin" element={<SignIn setIsLoggedIn={setIsLoggedIn}/>}/>
          <Route path="/signup" element={<SignUp setIsLoggedIn={setIsLoggedIn}/>}/>
          <Route path="/dashboard" element={
            <PrivateRoute isLoggedIn={isLoggedIn}>
              <Dashboard/>
            </PrivateRoute>
          }/>
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
