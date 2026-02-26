import robotimg from '../assets/robot.png';
import userimg from '../assets/user.png';


export function ChatMessage(props) {
            const { message, sender} = props;
            return (
            <div className={sender === "user" ? "chat-user": "chat-robot"}>
            {sender === "robot" && <img src = {robotimg} className= "profile" /> }
            <div className='msg'>
            {message}
            </div>
            {sender === "user" && <img src = {userimg} className= "profile" /> }         
            </div>
            )
        }
       