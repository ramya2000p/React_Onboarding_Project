import React from "react";
import "../styles/Home.css";
import { useEffect, useState } from "react";
import NewsGrid from "./NewsGrid";
import InnerPage from "./InnerPage";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';


function Home() {
  const[posts, setPosts] = useState([])

  useEffect(() => {
     const getPosts = async () => {
       const postsFromServer = await fetchPosts()
       setPosts(postsFromServer)
     }
    
     getPosts()
   }, [])

   //Fetch Posts
  const fetchPosts = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    const data = await res.json()
   
    return data
  }

  return (
    <Router>
      <Routes>
        <Route path='/' exact element={(
          <NewsGrid posts={posts}/>
        )}/>
       
       <Route exact path='/:id' element={<InnerPage/>}/>

      </Routes>
    </Router>
  );
}

export default Home;
