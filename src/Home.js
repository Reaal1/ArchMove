import {useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
 const [blogs, setBlogs] = useState([
    {title: 'The new O.G strands', body: 'lorem solon ma', author: ' mario', id:1},
    {title: 'New strands!', body: ' head rolls', author: ' kayode', id:2},
    {title: 'D strands!!', body: 'lorem huh!', author: ' kay', id:3}
 ]);

 const [name, setName] = useState(' kayode');

const handleDelete = (id) => {
   const newBlogs = blogs.filter(blog => blog.id !== id);
   setBlogs(newBlogs);
}

useEffect(() => {
    console.log('use effect ran');
    console.log(name);
}, [name]);

   return ( 
        <div className="home">
         <BlogList blogs={blogs} title='All Strands...' handleDelete={handleDelete}/>
         <button onClick={() => setName('kay')}>change name</button>
         <p>{name}</p>
        </div>
    );
}
 
export default Home;