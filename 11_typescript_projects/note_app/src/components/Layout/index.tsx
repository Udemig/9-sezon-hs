import { Outlet, Navigate, useParams } from "react-router-dom";
import { Note } from "../../types";

type Prop = {
  notes: Note[];
};

const Layout = ({ notes }: Prop) => {
  // urlden parametreyi al
  const { id } = useParams();

  // bütün notlarında arasında id'si urldeki paramle eşeleşen note'un verilerini al
  const found = notes.find((n) => n.id == id);

  // note bulunmazsa anasayfaya yönlendir
  if (!found) return <Navigate to="/" replace />;

  // alt route'un bileşenini ekrana bas ve note verilerini gönder
  return <Outlet context={found} />;
};

export default Layout;
