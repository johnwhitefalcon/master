import React from 'react'
import Image from 'next/image'
import {HomeIcon, HashtagIcon, BellIcon, InboxIcon, BookmarkIcon, ClipboardIcon, UserIcon, DotsCircleHorizontalIcon, DotsHorizontalIcon, SparklesIcon, PhotographIcon, EmojiHappyIcon, ChatIcon, TrashIcon, ChartBarIcon, HeartIcon, ShareIcon, SearchIcon} from '@heroicons/react/solid'
import { Button, Input } from 'antd'
import { useForm } from "react-hook-form";
import {useRef, useState } from 'react';


export default function jc({newsposts,random}){

  const { register, handleSubmit } = useForm();
  const onSubmit = async function(data){
  const response = await fetch("./api/mongapi", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({data})
    })
    const resdata = await response.json();
  //  console.log(resdata);
  //  return resdata;
  }


  var jack ="heres jc"
  const posts = [
    {
      id: "1",
      name: "john",
      username: "JC",
      userIMG: "https://www.bettermusic.com.au/media/catalog/product/0/1/0144552531_gtr_frt_001_rr_1.png?optimize=high&fit=bounds&height=1200&width=1920&format=jpeg",
      img: "https://images.unsplash.com/photo-1656831858199-a5d14527cd3c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80",
      text: "nice view and room",
      timestamp: "2 hours ago"
    },
    {
      id: "3",
      name: "egg",
      username: "eggy",
      userIMG: "https://www.bettermusic.com.au/media/catalog/product/0/1/0144552531_gtr_frt_001_rr_1.png?optimize=high&fit=bounds&height=1200&width=1920&format=jpeg",
      img: "https://images.unsplash.com/photo-1504297050568-910d24c426d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      text: "wooohooo",
      timestamp: "4 hours ago"
    }

  ]
 
  

return (

<div className="flex flex-col min-h-screen max-w-7xl mx-auto">

<div className="xl:ml-[370px] border-l border-r xl:min-w-[576px] fixed bg-gray-100">

<div className="flex py-2 px-3 sticky z-0 bg-white border-b border-gray-200 font-bold cursor-pointer text-xl">
Feed
<SparklesIcon className="h-7 ml-auto"/>
</div>


<div className="flex">
<img className="h-12" src="https://media-exp1.licdn.com/dms/image/C4E03AQGoNCrICm4C0Q/profile-displayphoto-shrink_800_800/0/1516782457537?e=1661990400&v=beta&t=bBoOtZ6keEgtP_7ZfEhiOOPOPAWl3GeZwBYDLhXosD8"></img>

<form onSubmit={handleSubmit(onSubmit)}>

<input type="text" name="name" className="xl:min-w-[576px] w-full border-none focus:ring-0" {...register("name")}/>

</form>  

  
</div>

<div className="flex justify-between">
  <div className="flex">
    <PhotographIcon className="h-10 w-10 p-2 text-sky-500"/>
    <EmojiHappyIcon className="h-10 w-10 p-2 text-sky-500"/>
  </div>
 
<button onClick={handleSubmit(onSubmit)} className="bg-blue-400 text-white rounded-full w-36 h-10 font-bold shadow-md hover:brightness-95 text-lg hidden xl:inline">Tweet</button>

</div>



<div className="w-60 cursor-pointer">

  {
  
  posts.map(function(item){
   
    return <div>
    {item.name}
    {item.timestamp}
    <img className="rounded-full h-[185px]" src={item.img}></img>
    </div>
  
  })
  
  }


</div>

<div className="flex justify-between text-gray-500">
<ChatIcon className="h-9"/>
<TrashIcon className="h-9"/>
<HeartIcon className="h-9"/>
<ShareIcon className="h-9"/>
<ChartBarIcon className="h-9"/>

</div>





</div>

<div>
      <div className="flex float-right rounded-full items-center border-2 p-3">
        <SearchIcon className="h-10"/>
       <form>
        <input className="border-none focus:ring-0" type="text"     
        ></input>
      </form>

      </div>
      <div className="float-right display:inline-block absolute right-0 w-[420px] top-20">
      {
      random.results.slice(0,8).map(function(item){
   
      return <div className="">
       <img className="" src={item.picture.thumbnail}></img>
        </div>
  
       })
  
         }

       
      <button className="bg-gray-200 w-80 h-10 font-bold">Show more</button>

      </div>
      

      
      <div className="float-right display:inline-block absolute right-0 w-[350px] top-20">
      {
      newsposts.slice(0,10).map(function(item){
   
      return <div className="">
       {item.title}
        </div>
  
       })
  
         }

      </div>

</div>




<div className="hoverEffect w-56 flex fixed top-0">

  <Image width="45" height="45" src="https://help.twitter.com/content/dam/help-twitter/brand/logo.png">


  </Image>


</div>


<div className="">
  <div className="hoverEffect flex text-gray-700 font-bold w-56">
<HomeIcon className="h-7"/>
Home
  </div>
  <div className="hoverEffect flex w-56">
<HashtagIcon className="h-7"/>
Explore
  </div>
  <div className="hoverEffect flex w-56">
<BellIcon className="h-7"/>
Notifications
  </div>
  <div className="hoverEffect flex w-56">
<InboxIcon className="h-7"/>
Messages
  </div>
  <div className="hoverEffect flex w-56">
<BookmarkIcon className="h-7"/>
Bookmarks
  </div>
  <div className="hoverEffect flex w-56">
<ClipboardIcon className="h-7"/>
Lists
</div>
<div className="hoverEffect flex w-56">
<UserIcon className="h-7"/>
Profile
</div>
<div className="hoverEffect flex w-56">
<DotsCircleHorizontalIcon className="h-7"/>
More
</div>
</div>

<div>
<button className="bg-blue-400 text-white rounded-full w-56 h-12 font-bold shadow-md hover:brightness-95 text-lg hidden xl:inline">Tweet</button>
</div>

<div className="hoverEffect w-56 flex items-center">
  <img className="h-12" src="https://media-exp1.licdn.com/dms/image/C4E03AQGoNCrICm4C0Q/profile-displayphoto-shrink_800_800/0/1516782457537?e=1661990400&v=beta&t=bBoOtZ6keEgtP_7ZfEhiOOPOPAWl3GeZwBYDLhXosD8"></img>
  John C 
  <br></br>
  <DotsHorizontalIcon className="h-5"/>
</div>











</div>


)


}




export async function getServerSideProps(){

const newsResults = await fetch('https://jsonplaceholder.typicode.com/posts');

const newsposts = await newsResults.json();

const randomUsersResults = await fetch('https://randomuser.me/api/?results=30&inc=name,login,picture');
const random = await randomUsersResults.json();


return {
  props : {
    newsposts,
    random,
  }

}

}


