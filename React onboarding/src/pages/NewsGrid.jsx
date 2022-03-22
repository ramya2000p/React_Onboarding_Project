import React from 'react'
import Popup from '../components/Popup'
import Header from '../components/Header'
import Subheader from '../components/Subheader'
import Posts from '../components/Posts'

function NewsGrid({posts}) {
  return (
    <div>
        <Popup text='We are now hosting events with Zoom Webinars! ' link=' Find out more'/>
        <Header heading='Latest News'/>
        <Subheader subheading='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At lectus urna duis convallis convallis.'/>
        <Posts posts={posts}/>
    </div>
  )
}

export default NewsGrid