import axios from 'axios';
import formatDate from '../utils/formatDate';
import ContentMode from './ContentMode';
import EditMode from './EditMode';
import { useState } from 'react';
import { toast } from 'react-toastify';

const ListItem = ({ todo, setTodos, allTodos }) => {
  const [isEdit, setIsEdit] = useState(false);

  // sil butonuna tıklanınca çalışır
  const handleDelete = () => {
    // api'a delete isteği at
    axios
      .delete(`http://localhost:3000/todos/${todo.id}`)
      .then(() => {
        // bütün todolar arasından id'sini bildiğimizi kaldır
        const filtredTodos = allTodos.filter((item) => item.id !== todo.id);

        // state'i güncelle
        setTodos(filtredTodos);

        toast.info('Todo kaldırıldı');
      })
      .catch((err) => toast.error('başarısız oldu'));
  };

  // güncelleme onanaylanınca çalışır
  const handleUpdate = (e) => {
    e.preventDefault();

    // inputlardaki değerler
    const status = e.target[0].value;
    const title = e.target[1].value;

    // api'ı güncelle
    axios
      .patch(`http://localhost:3000/todos/${todo.id}`, { title, status })
      // api güncellenirse state'i güncelle
      .then(() => {
        //1) mevcut todonun title ve status değerlerini güncelle
        const updated = { ...todo, title, status };

        //2) dizideki eski todonun yerine güncel halini koy
        const newTodos = allTodos.map((item) =>
          item.id === updated.id ? updated : item
        );

        //3) state'i güncelle
        setTodos(newTodos);

        //4) düzenleme modundan çık
        setIsEdit(false);

        //5) bildirim gönder
        toast.success('Güncelleme başarılı');
      });
  };

  return (
    <li className="relative p-3 list-group-item d-flex justify-content-between align-items-center gap-3">
      {isEdit ? (
        <EditMode
          todo={todo}
          handleUpdate={handleUpdate}
          setIsEdit={setIsEdit}
        />
      ) : (
        <ContentMode
          todo={todo}
          handleDelete={handleDelete}
          setIsEdit={setIsEdit}
        />
      )}

      <span className="date">{formatDate(todo.date)}</span>
    </li>
  );
};

export default ListItem;
