import { useState } from "react"
import "./chatlist.css"
const ChatList = () => {
    const [addMode,setAddMode] = useState(false)
  return (
    <div className='chat-list'>
        <div className="search">
            <div className="searchBar">
                <img className="search-icon" src="./search.png" alt="" />
                <input type="text" placeholder="search" className="input-search" />
            </div>
            <img src={addMode ? "./minus.png" : "./plus.png"} alt="" className="add-icon" onClick={()=> setAddMode((prev) => !prev)}/>
        </div>

        <div className="item">
            <img className="img-avatar" src="./avatar.png" alt="" />
            <div className="texts">
                <span>Jane Doe</span>
                <p>Hello !!</p>
            </div>
        </div>

        <div className="item">
            <img className="img-avatar" src="./avatar.png" alt="" />
            <div className="texts">
                <span>Jane Doe</span>
                <p>Hello !!</p>
            </div>
        </div>

        <div className="item">
            <img className="img-avatar" src="./avatar.png" alt="" />
            <div className="texts">
                <span>Jane Doe</span>
                <p>Hello !!</p>
            </div>
        </div>

        <div className="item">
            <img className="img-avatar" src="./avatar.png" alt="" />
            <div className="texts">
                <span>Jane Doe</span>
                <p>Hello !!</p>
            </div>
        </div>

        <div className="item">
            <img className="img-avatar" src="./avatar.png" alt="" />
            <div className="texts">
                <span>Jane Doe</span>
                <p>Hello !!</p>
            </div>
        </div>

        <div className="item">
            <img className="img-avatar" src="./avatar.png" alt="" />
            <div className="texts">
                <span>Jane Doe</span>
                <p>Hello !!</p>
            </div>
        </div>
        
        <div className="item">
            <img className="img-avatar" src="./avatar.png" alt="" />
            <div className="texts">
                <span>Jane Doe</span>
                <p>Hello !!</p>
            </div>
        </div>

        <div className="item">
            <img className="img-avatar" src="./avatar.png" alt="" />
            <div className="texts">
                <span>Jane Doe</span>
                <p>Hello !!</p>
            </div>
        </div>

        
        <div className="item">
            <img className="img-avatar" src="./avatar.png" alt="" />
            <div className="texts">
                <span>Jane Doe</span>
                <p>Hello !!</p>
            </div>
        </div>

    </div>
  )
}

export default ChatList