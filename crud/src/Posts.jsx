import { PostCriados } from "./PostCriados"
import './App.css'



export const Posts = ({data,DeletePosts, handleImgClick})=>{
  

    return(
       <div className="post-main">
           {data?.map((post)=>(
               <PostCriados key={post.id} post={post} DeletePosts={DeletePosts}
               handleImgClick={()=>handleImgClick(post.id)}/>
           ))}
          
       </div>
       
       
    )
}