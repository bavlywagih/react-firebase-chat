import Chats from "./components/chat/chats"
import Details from "./components/details/details"
import List from "./components/list/list"
import Login from "./components/login/login"
import Notification from "./components/notification/Notification"
const App = () => {
  const user = false ;
  return (
    <div className='container'>
      {
        user ? (
          <>
            <List />
            <Chats />
            <Details />
          </>
        ) : (<Login />)
      }
      <Notification />
    </div>
  )
}


export default App