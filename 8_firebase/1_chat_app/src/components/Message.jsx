import { auth } from '../firebase/config';

const Message = ({ data }) => {
  // oturumu açık olan kullanıcın id'si mesajı atan kullanıcının idsine eşitse mesajın içeriğini ekrana bas
  if (auth.currentUser?.uid === data.sender.id) {
    return <p className="msg-user">{data.text}</p>;
  }

  // eşit değilse kullanıcı bilgisi + mesaj içeriğini ekrana bas
  return (
    <div className="msg-other">
      <div>
        <img src={data.sender.photo} />
        <span>{data.sender.name}</span>
      </div>

      <p>{data.text}</p>
    </div>
  );
};

export default Message;
