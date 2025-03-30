import "./userinfo.css" 
const Userinfo = () => {
  return (
    <div className='user-info'>
        <div className="user">
            <img src="avatar.png" className="img-avatar" alt="" />
            <h2>bavly</h2>
        </div>
        <div className="icons">
            <img src="more.png" alt="" />
            <img src="video.png" alt="" />
            <img src="edit.png" alt="" />
        </div>
    </div>
  )
}

export default Userinfo