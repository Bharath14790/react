 import {useRef, useEffect} from 'react';
 import{  ChatMessage} from './chatmessage.jsx';
 export function Chat({ChatMessages}){
          const characterref = useRef
          (null);
          useEffect (() => {
            const element = characterref.current;
            if(element){
              element.scrollTop = element.scrollHeight;
            }
          },[characterref])
          return(
          <div className = "chat-container" ref= {characterref}>
            {ChatMessages.map((chatmessage) =>(
                    <ChatMessage 
                      message = {chatmessage.message}
                      sender = {chatmessage.sender}
                      key = {chatmessage.id}
                    />
                  
            ))}
            </div>
          )

        }