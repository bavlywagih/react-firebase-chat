import { useEffect, useRef, useState } from "react"
import "./chat.css"
import EmojiPicker from "emoji-picker-react"
const Chats = () => {
  const [open,setOpen] =useState(false);
  const [text,setText] =useState("");

  const endRef = useRef(null)

  useEffect(()=>{
    endRef.current?.scrollIntoView({behavior:"smooth"})
  },[])

  const handleEmoji = e =>{
    setText((prev) => prev+e.emoji);
    setOpen(prev => !prev)
  }

  return (
    <div className='chat'>
      <div className="top">
        <div className="user">
          <img src="./avatar.png" alt=""  />
          <div className="text">
            <span>bavly wagih</span>
            <p>Lorem ipsum dolor sit amet .</p>
          </div>
        </div>
        <div className="icons">
          <img src="./phone.png" alt="" />
          <img src="./video.png" alt="" />
          <img src="./info.png" alt="" />
        </div>
      </div>
      <div className="center">
        <div className="message own">
          <div className="text">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, cupiditate.</p>
            <span>12 hour ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="text">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam quos fugit facilis. Obcaecati sit consequuntur eum maxime similique, quam illum sapiente id! Quis, excepturi perspiciatis debitis minima asperiores incidunt possimus ducimus laudantium eum doloremque. Tempora iure incidunt dolor, corrupti eum doloremque quis accusamus. Aperiam necessitatibus accusantium odit. Provident blanditiis fugiat facilis culpa at voluptatem, nam sequi, adipisci repellat quisquam vel ut a distinctio repellendus itaque atque odio. Nulla vitae debitis consectetur nobis, qui veniam natus maiores a quaerat ea maxime modi libero quod incidunt atque totam ipsa, nemo facere illo porro similique necessitatibus. Perspiciatis recusandae quam deleniti perferendis saepe dolorem.</p>
            <span>8 hour ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="text">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, aliquam eos iusto deleniti velit quo ab impedit tenetur perferendis corrupti, aspernatur consectetur. Eaque, eligendi illum? Iure laboriosam atque id corrupti, ex quos nobis nesciunt quae, accusantium distinctio odio adipisci, inventore velit accusamus porro blanditiis placeat tempora magni ducimus assumenda aut?            </p>
            <span>7 hour ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="text">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam quos fugit facilis. Obcaecati sit consequuntur eum maxime similique, quam illum sapiente id! Quis, excepturi perspiciatis debitis minima asperiores incidunt possimus ducimus laudantium eum doloremque. Tempora iure incidunt dolor, corrupti eum doloremque quis accusamus. Aperiam necessitatibus accusantium odit. Provident blanditiis fugiat facilis culpa at voluptatem, nam sequi, adipisci repellat quisquam vel ut a distinctio repellendus itaque atque odio. Nulla vitae debitis consectetur nobis, qui veniam natus maiores a quaerat ea maxime modi libero quod incidunt atque totam ipsa, nemo facere illo porro similique necessitatibus. Perspiciatis recusandae quam deleniti perferendis saepe dolorem.</p>
            <span>5 hour ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="text">
            <img src="https://img.freepik.com/free-photo/people-making-hands-heart-shape-silhouette-sunset_53876-15987.jpg?t=st=1739015747~exp=1739019347~hmac=cc09d83613bd295bf2e034f2cfa51d79cafbf14dda09cf6a2901c0464315ad9c&w=1380" alt="" />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam quos fugit facilis. Obcaecati sit consequuntur eum maxime similique, quam illum sapiente id! Quis, excepturi perspiciatis debitis minima asperiores incidunt possimus ducimus laudantium eum doloremque. Tempora iure incidunt dolor, corrupti eum doloremque quis accusamus. Aperiam necessitatibus accusantium odit. Provident blanditiis fugiat facilis culpa at voluptatem, nam sequi, adipisci repellat quisquam vel ut a distinctio repellendus itaque atque odio. Nulla vitae debitis consectetur nobis, qui veniam natus maiores a quaerat ea maxime modi libero quod incidunt atque totam ipsa, nemo facere illo porro similique necessitatibus. Perspiciatis recusandae quam deleniti perferendis saepe dolorem.</p>
            <span>1 hour ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="text">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam quos fugit facilis. Obcaecati sit consequuntur eum maxime similique, quam illum sapiente id! Quis, excepturi perspiciatis debitis minima asperiores incidunt possimus ducimus laudantium eum doloremque. Tempora iure incidunt dolor, corrupti eum doloremque quis accusamus. Aperiam necessitatibus accusantium odit. Provident blanditiis fugiat facilis culpa at voluptatem, nam sequi, adipisci repellat quisquam vel ut a distinctio repellendus itaque atque odio. Nulla vitae debitis consectetur nobis, qui veniam natus maiores a quaerat ea maxime modi libero quod incidunt atque totam ipsa, nemo facere illo porro similique necessitatibus. Perspiciatis recusandae quam deleniti perferendis saepe dolorem.</p>
            <span>50 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="text">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam quos fugit facilis. Obcaecati sit consequuntur eum maxime similique, quam illum sapiente id! Quis, excepturi perspiciatis debitis minima asperiores incidunt possimus ducimus laudantium eum doloremque. Tempora iure incidunt dolor, corrupti eum doloremque quis accusamus. Aperiam necessitatibus accusantium odit. Provident blanditiis fugiat facilis culpa at voluptatem, nam sequi, adipisci repellat quisquam vel ut a distinctio repellendus itaque atque odio. Nulla vitae debitis consectetur nobis, qui veniam natus maiores a quaerat ea maxime modi libero quod incidunt atque totam ipsa, nemo facere illo porro similique necessitatibus. Perspiciatis recusandae quam deleniti perferendis saepe dolorem.</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div ref={endRef}></div>
      </div>
      <div className="bottom">
        <div className="icons">
          <img src="./img.png" alt=""  className="img-icon" />
          <img src="./camera.png" alt=""  className="img-icon" />
          <img src="./mic.png" alt=""  className="img-icon" />
        </div>
          <input type="text" value={text} className="text-input" placeholder="Type a message...." onChange={(e) => setText(e.target.value) }/>
          <div className="emoji">
            <img src="./emoji.png" className="img-icon" onClick={() => setOpen(prev => !prev)}/>
            <div className="picker">
              <EmojiPicker open={open} onEmojiClick={handleEmoji} /> 
            </div>
          </div>
          <button className="sendButton">Send</button>
      </div>
    </div>
  )
}

export default Chats