import { useRef, useState } from 'react'
import './App.css'




export const AddPosts = ({AddPost, modal, setModal})=>{

    const [urlImg, setUrlImg]=useState('')
    const [nomeTitle, setNomeTitle]=useState('')
    const [authorTitle, setAuthorTitle]=useState('')

    const handleChangeUrl=(e)=>{
        setUrlImg(e.target.value)
       
    }
    const handleChangeTitle=(e)=>{
        setNomeTitle(e.target.value)
    }
    const handleChangeAuthor=(e)=>{
        setAuthorTitle(e.target.value)
    }

    const inputRef = useRef(HTMLInputElement)

    const handleClickAddPost=(e)=>{
        if(urlImg.toString().trim() == ''){
            alert(`o campo: Url da imagem, está vazio.`)
            inputRef.current.focus()
            
        }if(nomeTitle == ''){
            alert(`o campo: Title, está vazio.`)
        }if( authorTitle == '' ){
            alert(`o campo: author, está vazio.`)
        }else{
            AddPost(urlImg.trim().toString(), nomeTitle, authorTitle)
            setModal(false)
            setUrlImg('')
            setNomeTitle('')
            setAuthorTitle('')
           

        }
       
    }

    return(
        <div className='AddPosts'>
        <div>
        <input type="text" placeholder='url da imagem' value={urlImg}  onChange={handleChangeUrl} ref={inputRef}
         />
        </div>
        <div>
          <input type="text" placeholder='Nome' value={nomeTitle} onChange={handleChangeTitle}/>
        </div>
        <div>
          <input type="text" placeholder='Author' value={authorTitle} onChange={handleChangeAuthor}/>
        </div>
        <div>
        <button onClick={handleClickAddPost}>Adicionar Post</button>
        </div>
        
    </div>
    )
}