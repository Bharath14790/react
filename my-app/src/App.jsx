import { useState} from 'react';
import { ChatInput } from './component/chatinput';
import{Chat} from './component/chat.jsx';

import './App.css';


        function App(){
        let [ChatMessages, setChatMessages] = useState(
            [{
            message: 'hello chatbot', 
            sender: 'user',
            id: 'id1'
            },{
            message:'Hello! How can I help you?', 
            sender: 'robot',
            id: 'id2'
            },{
            message: 'can u get me today date', 
            sender: 'user',
            id: 'id3'
            },{
            message: 'Today is February 20',
            sender: 'robot',
            id: 'id4'
            }
            ]
          )

          return(
          <div className="chat" >
            <Chat ChatMessages={ChatMessages} />
            <ChatInput  
              ChatMessages={ChatMessages} 
              setChatMessages={setChatMessages} 
            />
          </div>
          )
          
        }


export default App
