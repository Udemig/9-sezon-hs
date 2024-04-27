import {
  collection,
  addDoc,
  serverTimestamp,
  getDocs,
  onSnapshot,
} from 'firebase/firestore';
import { auth, db } from './../firebase/config';
import { useEffect } from 'react';
import { useState } from 'react';

const ChatPage = ({ room, setRoom }) => {
  const [messages, setMessages] = useState([]);

  // formun gönderilmesi
  const handleSubmit = async (e) => {
    e.preventDefault();

    // kolleksiyonun referansını alma
    const messagesCol = collection(db, 'messages');

    // kolleksiyona yeni belge kaydet
    await addDoc(messagesCol, {
      text: e.target[0].value,
      room,
      sender: {
        id: auth.currentUser.uid,
        name: auth.currentUser.displayName,
        photo: auth.currentUser.photoURL,
      },
      createdAt: serverTimestamp(),
    });

    // formu sıfırla
    e.target.reset();
  };

  // mevcut odada gönderilen mesajların verisi anlık olarak al
  useEffect(() => {
    // hangi kolleksiyondaki verileri istiyorsak o kolleksiyonun referansını alırız
    const messagesCol = collection(db, 'messages');

    // kolleksiyondaki verileri al
    onSnapshot(messagesCol, (snapshot) => {
      // verilerin geçici olarak tutulcağı dizi
      const tempMsg = [];

      // dökümanları dön, verilerine eriş
      snapshot.docs.forEach((doc) => {
        tempMsg.push(doc.data());
      });

      // günce mesajları state'e aktar
      setMessages(tempMsg);
    });
  }, []);

  return (
    <div className="chat-page">
      <header>
        <p>{auth.currentUser?.displayName}</p>
        <p>{room}</p>
        <button onClick={() => setRoom(null)}>Farklı Oda</button>
      </header>

      <main>mesajlar</main>

      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="mesajınızı yazınız..." />
        <button>Gönder</button>
      </form>
    </div>
  );
};

export default ChatPage;
