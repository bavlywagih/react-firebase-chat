import "./addUser.css"
const AddUser = () => {
  return (
    
    <div className='addUser'>
        <form>
          <input type="text" placeholder="Username" name="username"/>
          <button>search</button>
        </form>
        <div className="user">
          <div className="detail">
            <img src="./avatar.png" alt="" />
            <span>Bavly Wagih</span>
            <button>add user</button>
          </div>
        </div>
    </div>
  )
}
// 1-18-48

export default AddUser