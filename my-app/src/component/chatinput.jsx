import { useState} from 'react';
import { Chatbot } from 'supersimpledev';

export function ChatInput({ChatMessages, setChatMessages}){
          const [inputtxt, setinputtxt] = useState('')
          function savetext(event){
            setinputtxt(event.target.value)
          }
          function send(){
            const newchat = [
              ...ChatMessages,
              {
                message: inputtxt,
                sender: 'user',
                id: crypto.randomUUID()
              }
            ]
            setChatMessages (newchat)
            let response =  Chatbot.getResponse(inputtxt)
            setChatMessages ([
              ...newchat,
              {
                message: response,
                sender: 'robot',
                id: crypto.randomUUID()
              }
            ])
            setinputtxt('')
          }
           return(
            <div className = "inp">
                <input id = "input" placeholder = "Send a message to chatbot" size = "30" onChange = {savetext} value = {inputtxt} />
                
                <button id = "send" onClick = {send}> send </button>
                
            </div>
           )
        }
       