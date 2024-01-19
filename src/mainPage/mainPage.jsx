import React, { useState } from 'react'
import "./mainPage.css"
import { Link } from 'react-router-dom'
import { useStateContext } from "../context/context"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
    import { v4 as uuidv4 } from 'uuid'
    uuidv4()
const MainPage = () => {
  const { saveText, setSaveText } = useStateContext()
  // const [changes, SetChanges] = useState(false);
  const today = new Date()
  const [text, setText] = useState({
    title: "",
    todo: "",
    
  })
  const change= (e) => {
    const { name, value } = e.target
    setText(prev => ({
      ...prev,
      [name]: value
    }))
  }
  const onCLick = (e) => {
    e.preventDefault()
    setSaveText([...saveText, {
      id: uuidv4(), title: text.title, todo: text.todo, click: false, month:
        today.getMonth() + 1,
      year: today.getFullYear(),
      date: today.getDate()}])
    text.title = ""
    text.todo=""
  }
  const clickers = (e) => {
    setSaveText(saveText.map(data => data.id===e.id ? {...data,click:!data.click}:data))
    // console.log(e)
  }
  const Dele = (e) => {
    setSaveText(saveText.filter(text => text.id!==e))
  }
  console.log(saveText)
  return (
    <div className='todos'>
      <input type='text' className='notes' name='title' value={text.title} onChange={change} placeholder='Tittle'/>
      <textarea className='note' name='todo' value={text.todo} onChange={change} placeholder='Take a Note...'/>
      <button className='btn' onClick={text.title===""||text.todo===""?console.log("haaha"):onCLick}>+</button>
      <div className='to'>
        {saveText.map((text, index) => (
          <>
            
            <div className={`${text.click ? 'icons change' : "icons"}`} onClick={(e) => clickers(text)}>
            {text.click ?
              <p className='todoers'>{text.todo}</p>
              :
                <>
                  <h1>{text.title}</h1>
                  <div className='dates'>
                    <p>{text.date}</p>/<p>{text.month}</p>/<p>{text.year}</p>
                  </div>
                  
                </>
              }
            </div>
            
              <FontAwesomeIcon className={`${text.click ? "trash no" :"trash"}`} icon={faTrash} onClick={(e)=>Dele(text.id)}/>
            
          </>
              
        ))}
      </div>
    </div>
  )
}

export default MainPage
