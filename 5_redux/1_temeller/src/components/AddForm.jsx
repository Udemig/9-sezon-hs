import { v4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addTodo } from '../store/actions/todoActions';
import api from '../utils/api';
import { toast } from 'react-toastify';

const AddForm = () => {
  // bu bileşen içerisnde dispatch methodnunu kullanmamızı sağlar
  const dispatch = useDispatch();

  // form gönderilince:
  const handleSubmit = (e) => {
    e.preventDefault();

    // store'a kaydedilcek olan veriyi hazırla
    const newTodo = {
      id: v4(),
      text: e.target[0].value,
      is_done: false,
      created_at: new Date().toLocaleDateString(),
    };

    // veriyi api'a kaydet

    const promise = api
      .post('/todos', newTodo)
      // istek başarılı olursa veriyi store'a kaydet
      .then(() => dispatch(addTodo(newTodo)))
      // istek başarısız oluras
      .catch((err) => {
        throw new Error();
      });

    toast.promise(promise, {
      pending: 'Yeni todo yükleniyor',
      success: 'Todo başarıyla eklendi 👌',
      error: 'Eklenirken bir sorun oluştu 🤯',
    });

    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit} className="d-flex gap-3 my-5">
      <input
        className="form-control"
        placeholder="örn: typescript projesi"
        type="text"
      />

      <button className="btn btn-warning">Gönder</button>
    </form>
  );
};

export default AddForm;
