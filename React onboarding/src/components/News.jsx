import {useEffect, useState} from 'react'
import {Link, useParams} from 'react-router-dom';
import{BsChevronLeft} from 'react-icons/bs'
import Comments from './Comments';
import CommentHeader from './CommentHeader';
import Search from './Search';

function News() {
    const {id} = useParams()
    
    const[post, setPost] = useState({})
    const[comments, setComments] = useState([])

    useEffect(() => {
        const getComments = async () => {
            const commentsFromServer = await fetchComments()
            console.log(commentsFromServer)
            setComments(commentsFromServer)
        }

        const getPost = async () => {
            const postFromServer = await fetchPost()
            setPost(postFromServer)
            //console.log(id)
        }
     
        getPost()
   
        getComments()

    }, [])

    

    //Fetch Post
    const fetchPost = async () =>{
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        const data = await res.json()
        console.log(id);
        return data
    }

    //Fetch Comments
    const fetchComments = async () =>{
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
        const data = await res.json()
        console.log(id);
        return data
    }

   

  return (
    <div className='px-40'>
        
        <Link className="flex flex-row" to="/">
            <BsChevronLeft className='mt-14 right-0 block relative'/>
            <h6 className="block relative pt-14 text-xs">Back</h6>
        </Link>
        
        
        <h3 className='text-popup font-bold text-2xl pt-4'>{post.title}</h3>
        <p className='text-left pt-4 pb-10'>{post.body}</p>
        <hr className='pb-10'/> 
        
        <CommentHeader title='Comments' length={comments.length}/>
        
        <Search/>

        {comments.map((item, index) =>
            <Comments key={index}
                comments = {item}
                />
            )}         
    </div>
  )
}

export default News