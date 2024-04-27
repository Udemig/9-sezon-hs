import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from './../firebase/config';

const LoginPage = ({ setIsAuth }) => {
  // butona tıklanınca çalışır
  const handleLogin = () => {
    // kullanıcın google hesabı ile kimliğini doğrula
    signInWithPopup(auth, provider)
      // başarıyla giriş yaparsa burası çalışır
      .then((data) => {
        // yetki state'ini güncelle
        setIsAuth(true);

        // locale'e kullanıcı bilgilerini kaydet
        localStorage.setItem('token', data.user.refreshToken);
      });
  };

  return (
    <div className="container">
      <div className="login">
        <h1>Chat Odası</h1>
        <p>Devam Etmek İçin Giriş Yapın</p>

        <button onClick={handleLogin}>
          <img src="/g-logo.png" />
          <span>Google İle Gir</span>
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
