import React from 'react';
import { Link } from 'react-router-dom';


function Post({ data }) {


  return(
    <>
        
      <section className="productContainer">
    {data.map((post)=>{
      const {id,title,image} = post;
      return (
          
          <article className="product">
            <div className="div1">
              <img src={image} alt={title} />
            </div>
            <div className="div2">
              <div>{title}</div>
              <div>id:{id}</div>
            </div>
          </article>
        
       
      );
    })}
     </section>
    
    </>
  )

 
}

export default Post;
