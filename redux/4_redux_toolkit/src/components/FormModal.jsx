import { Modal, Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addTask, editTask } from '../redux/slices/crudSlice';

const FormModal = ({ editItem, isOpen, handleClose }) => {
  const dispatch = useDispatch();

  // formun gönderilmesi
  const handleSubmit = (e) => {
    e.preventDefault();

    // formData örneği oluştur
    const formData = new FormData(e.target);

    // inputlardaki bilgileri nesneye çevir
    const taskData = Object.fromEntries(formData.entries());

    if (editItem) {
      // reducer'a güncellenicek elemanı haber ver
      dispatch(editTask({ id: editItem.id, ...taskData }));
    } else {
      // reducer'a yeni task'in ekleniceğini haber ver
      dispatch(addTask(taskData));
    }

    // modalı kapat
    handleClose();
  };

  return (
    <Modal centered show={isOpen} onHide={handleClose} className="text-black">
      <Modal.Header closeButton>
        <Modal.Title>
          {editItem ? 'Görevi Güncelle' : 'Yeni Görev Ekle'}
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form onSubmit={handleSubmit} className="d-flex flex-column gap-4">
          <Form.Group>
            <Form.Label>Görev Başlığı:</Form.Label>
            <Form.Control
              name="title"
              placeholder="Navbarı Düzenle"
              defaultValue={editItem?.title}
              required
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>İsminiz:</Form.Label>
            <Form.Control
              name="author"
              defaultValue={editItem?.author}
              required
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Atanıcak Kişinin İsmi:</Form.Label>
            <Form.Control
              name="assigned_to"
              defaultValue={editItem?.assigned_to}
              required
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Son Teslim Tarihi:</Form.Label>
            <Form.Control
              name="end_date"
              type="date"
              defaultValue={editItem?.end_date}
              required
            />
          </Form.Group>

          {/* Butonlar */}
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              İptal
            </Button>
            <Button type="submit" variant="primary">
              {editItem ? 'Kaydet' : 'Oluştur'}
            </Button>
          </Modal.Footer>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default FormModal;
