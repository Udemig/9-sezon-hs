import { useState } from 'react';
import LoginPage from './page/LoginPage';
import RoomPage from './page/RoomPage';
import ChatPage from './page/ChatPage';

const App = () => {
  // kullanıcnın yetkisi var mı state'i
  const [isAuth, setIsAuth] = useState(localStorage.getItem('token'));

  // kullanıcının hangi odaya girdiğinin state'i
  const [room, setRoom] = useState(null);

  // yetkisi yoksa > giriş sayfası
  if (!isAuth) return <LoginPage setIsAuth={setIsAuth} />;

  // yetkisi varsa :
  return (
    <div className="container">
      {room ? (
        // oda seçildiyse > sohbet sayfası
        <ChatPage room={room} setRoom={setRoom} />
      ) : (
        // oda tanımsızsa > oda seçme sayfası
        <RoomPage setIsAuth={setIsAuth} setRoom={setRoom} />
      )}
    </div>
  );
};

export default App;
