import Modal from '../components/Modal';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, updateTodo } from '../store/actions/todoActions';
import api from './../utils/api';

const TodoCard = ({ todo }) => {
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();

  // silme aksiyonunu reducer'a ilet
  const handleDelete = () => {
    api
      .delete(`/todos/${todo.id}`)
      .then(() => dispatch(deleteTodo(todo.id)))
      .catch((err) => alert('üzgünüz bir hata oluştu'));
  };

  // is_deone değerini tersine çevir
  const toggleIsDone = () => {
    // is_done değeri mevcut değerin tersi olan yeni nesne oluştur
    const updated = { ...todo, is_done: !todo.is_done };

    api
      .put(`/todos/${todo.id}`, updated)
      // store'u güncelleniceğini reducer'a haber ver
      .then(() => dispatch(updateTodo(updated)))
      .catch(() => alert('Üzgünüz bir hata oluştu'));
  };

  return (
    <div className="border shadow-lg p-4 my-5">
      <h5>{todo.text}</h5>
      <h6>{todo.is_done ? 'Tamamlandı' : 'Devam Ediyor'}</h6>
      <p>{todo.created_at}</p>

      <button onClick={() => setIsOpen(!isOpen)} className="btn btn-primary">
        Düzenle
      </button>
      <button onClick={toggleIsDone} className="btn btn-success mx-3">
        {todo.is_done ? 'Geri Al' : 'Tamamla'}
      </button>
      <button onClick={handleDelete} className="btn btn-danger">
        Sil
      </button>

      {isOpen && <Modal todo={todo} close={() => setIsOpen(false)} />}
    </div>
  );
};

export default TodoCard;
