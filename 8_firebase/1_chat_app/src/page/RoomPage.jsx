import React from 'react';

const RoomPage = ({ setIsAuth, setRoom }) => {
  // oturumu kapat
  const logout = () => {
    // state'ini güncelle
    setIsAuth(false);

    // locali temizle
    localStorage.removeItem('token');
  };

  // oda ismini kaydet
  const handleSubmit = (e) => {
    // sayfa yeneilemeyi engelle
    e.preventDefault();

    // inputtaki değeri al
    const room = e.target[0].value.toLowerCase();

    // girilicek odanın state'ini güncelledik
    setRoom(room);
  };

  return (
    <form onSubmit={handleSubmit} className="room-form">
      <h1>Chat Odası</h1>
      <p>Hangi Odaya Giriceksiniz</p>

      <input type="text" placeholder="ör:haftasonu" required />

      <button>Odaya Gir</button>
      <button onClick={logout}>Çıkış Yap</button>
    </form>
  );
};

export default RoomPage;
