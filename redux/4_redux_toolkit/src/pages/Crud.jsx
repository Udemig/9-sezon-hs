import { useState } from 'react';
import { Container, Stack, Button, Table } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import FormModal from '../components/FormModal';
import { deleteTask } from '../redux/slices/crudSlice';

const Crud = () => {
  const { isDarkTheme } = useSelector((store) => store.counterReducer);
  const { tasks } = useSelector((store) => store.crudReducer);
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();

  return (
    <div>
      <Container>
        <Stack className="align-items-end mt-5 mb-4">
          <Button onClick={() => setIsOpen(true)}>Yeni Görev Ekle</Button>
        </Stack>

        <Table
          responsive
          striped
          bordered
          hover
          variant={isDarkTheme ? 'dark' : 'light'}
        >
          <thead>
            <tr>
              <th>#</th>
              <th>Görev</th>
              <th>Yazan</th>
              <th>Atanan</th>
              <th>Tarih</th>
              <th>İşlemler</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, i) => (
              <tr key={task.id}>
                <td>{i}</td>
                <td>{task.title}</td>
                <td>{task.author}</td>
                <td>{task.assigned_to}</td>
                <td>{task.end_date}</td>
                <td>
                  <Button
                    onClick={() => dispatch(deleteTask(task.id))}
                    variant="danger"
                  >
                    Sil
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

        <FormModal isOpen={isOpen} handleClose={() => setIsOpen(false)} />
      </Container>
    </div>
  );
};

export default Crud;
