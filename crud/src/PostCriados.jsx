import './App.css'



export const PostCriados =({post, DeletePosts})=>{

   
    return(
    <div className="post-criados">
        <div className='post-criados-div'>
        <div className='img'>
        
           <img src={post.imgUrl} alt="" />
           
        </div>
        <h3>{post.title}</h3>
        <p>{post.author}</p>
        <div>
         <button onClick={()=>DeletePosts(post.id)}>delete</button>
        </div>
        </div>
       
    </div>

    )
}