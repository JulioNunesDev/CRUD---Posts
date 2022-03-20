import './App.css'
import { Posts } from './Posts'
import { AddPosts } from './AddPosts'
import { useAxios } from './useAxios'
import { api } from './api'
import {FaPlusCircle} from 'react-icons/fa'
import { useState } from 'react'


function App() {

  
  const {data, mutate} = useAxios('posts')
console.log(data)

        const AddPost=(newUrl, newTitle, newAuthor)=>{
             api.post('/posts',{
              id: Math.random(),
              imgUrl: newUrl,
              title: newTitle,
              author: newAuthor
            })
          
          

          const upDatePost = [...data,{
            imgUrl: newUrl,
            title: newTitle,
            author: newAuthor
          }]

          mutate(upDatePost, false)
        }


        const DeletePosts=(id)=>{
           api.delete(`/posts/${id}`)

           const upDate = data?.filter(ids=> ids.id !== id)
           
           mutate(upDate, false)

        }

      
  const [modal, setModal]=useState(false)

  const handleModalClick=()=>{
    setModal(true)
  }
        
        
  return (
   <>
    <div className='box'> 
        
       <span>{modal ? undefined : ( <FaPlusCircle onClick={handleModalClick} style={{width: 50,
           stroke: 'white',
            height: 50, cursor: 'pointer', color: 'white'} }/>) }</span>

           {modal &&  <AddPosts AddPost={AddPost} modal={modal} setModal={setModal} />}
       
         <div className="Posts">
        <Posts data={data}  DeletePosts={DeletePosts} />
        
      </div>
    
    </div>
   
   
   </>
  )
}

export default App
