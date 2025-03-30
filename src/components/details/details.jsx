import "./details.css"
const Details = () => {
  return (
    <div className='details'>

      <div className="user">
        <img src="./avatar.png" alt="" />
        <h2>bavly wagih</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium, dolor!</p>
      </div>

      <div className="info">

        <div className="option">
          <div className="title">
            <span>Chat Settings</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>

        <div className="option">
          <div className="title">
            <span>Privacy & Help</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>

        <div className="option">
          <div className="title">
            <span>Shared Photos</span>
            <img src="./arrowDown.png" alt="" />
          </div>
          <div className="photos">
            <div className="photoItem">
              <div className="photoDetail">
                <img src="https://img.freepik.com/free-photo/people-making-hands-heart-shape-silhouette-sunset_53876-15987.jpg?t=st=1739015747~exp=1739019347~hmac=cc09d83613bd295bf2e034f2cfa51d79cafbf14dda09cf6a2901c0464315ad9c&w=1380" alt="" />
                <span>photo_2025_1.png</span>
              </div>
              <img src="./download.png" alt="" className="icon" />
            </div>
          </div>
        </div>

        <div className="option">
          <div className="title">
            <span>Shared Files</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <button>Block User</button>
        <button className="logout">Logout</button>
      </div>
    </div>
  )
}

export default Details