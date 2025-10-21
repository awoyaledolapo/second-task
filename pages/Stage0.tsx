import './index.css'
import { Github } from 'lucide-react';
import { Twitter } from 'lucide-react';
import { Linkedin } from 'lucide-react';
import { useEffect, useState } from 'react';


const Stage0 = () => {
  const [time,setTime]=useState<number>(Date.now())

  useEffect(()=>{
    const interval =setInterval(()=>{
      setTime(Date.now())
    },1000)
    return ()=>clearInterval(interval)
  },[])
    

   
   
  return (
    <section className='container  '>
   <article data-testid="test-profile-card" aria-label="User profile card" className='mt-4 lg:mt-0 md:mt-0'>
    <div className="card-header" aria-hidden="true">
      <figure aria-hidden="true">
        <img
          src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=880"
          alt="User avatar"
          data-testid="test-user-avatar"
        />
      </figure>
    </div>

    <div className="profile-content">
      <header>
        <h2 data-testid="test-user-name" className='font-bold'>Charles Awoyale</h2>
      </header>

      <p data-testid="test-user-bio">
        I’m a frontend developer who loves turning ideas into beautiful, responsive interfaces. When I’m not coding, I’m probably exploring new design trends or learning something new.
      </p>

      <div className="time-wrap" aria-hidden="false">
        Current time (ms):
        <time data-testid="test-user-time" >{time}</time>
      </div>

      

      <div className="lists  text-start">
        <section aria-labelledby="hobbies-title" className='mb-2'>
           <h3 id="hobbies-title" className='font-semibold'>Hobbies</h3>
          <ul data-testid="test-user-hobbies" className='flex gap-3'>
           
            <li className='bg-purple-900 p-2  font-semibold text-white rounded-2xl text-[10px]'>Photography</li>
            <li className='bg-red-900 p-2  font-semibold text-white rounded-2xl text-[10px]'>Hiking</li>
            <li className='bg-black p-2  font-semibold text-white rounded-2xl text-[10px]'>Baking</li>
          </ul>
        </section>

        <section aria-labelledby="dislikes-title" >
         <h3 id="dislikes-title"  className='font-semibold'>Dislikes</h3>
          <ul data-testid="test-user-dislikes" className='flex gap-3'> 
            
            <li className='bg-purple-900 p-2  font-semibold text-white rounded-2xl text-[10px]'>Procrastination</li>
            <li className='bg-red-900 p-2  font-semibold text-white rounded-2xl text-[10px]'>Spam emails</li>
            <li className='bg-black p-2  font-semibold text-white rounded-2xl text-[10px]'>Stealing</li>
          </ul>
        </section>
      </div>
    </div>

    <nav data-testid="test-user-social-links" aria-label="Social links ">
      <ul>
        <li>
          <a href="https://x.com/OGWITHKUSH" target="_blank" rel="noopener noreferrer" data-testid="test-user-social-twitter"><Twitter /></a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/awoyale-dolapo-191322357/" target="_blank" rel="noopener noreferrer" data-testid="test-user-social-linkedin"> <Linkedin /></a>
        </li>
        <li>
          <a href="https://github.com/awoyaledolapo/" target="_blank" rel="noopener noreferrer" data-testid="test-user-social-github"> <Github className='' /></a>
        </li>
      </ul>
    </nav>
  </article>
  </section>
  )
}

export default Stage0