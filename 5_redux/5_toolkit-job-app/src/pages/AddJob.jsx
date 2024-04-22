import { v4 } from 'uuid';
import AutoInput from '../components/AutoInput';
import { statusOpt, typeOpt } from '../constants';
import { toast } from 'react-toastify';
import api from '../utils/api';
import { createJob } from '../app/slices/jobSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Select from '../components/Select';
import SubmitButton from '../components/SubmitButton';

const AddJob = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // form gönderilince
  const handleSubmit = (e) => {
    e.preventDefault();

    // formData oluştur
    const formData = new FormData(e.target);

    // inputlardaki verilerden bir nesne oluştur
    const newJobData = Object.fromEntries(formData.entries());

    // tarih ve id ekle
    newJobData.id = v4();
    newJobData.date = Date.now();

    // api'a yeni veriyi kaydet
    api
      .post('/jobs', newJobData)
      // başarılı olursa:
      .then(() => {
        // bildirim gönder
        toast.success('İş başarıyla eklendi');

        // store'a yeni veriyi kaydet
        dispatch(createJob(newJobData));

        // anasayfaya yönlendir
        navigate('/');
      })
      // başarısız olursa:
      .catch(() => {
        // bildirm gönder
        toast.error('İş eklenirken bir sorun oluştu');
      });
  };

  return (
    <div className="add-page">
      <section className="container">
        <h2>Yeni İş Ekle</h2>

        <form onSubmit={handleSubmit}>
          <AutoInput label={'Pozisyon'} name={'position'} />
          <AutoInput label={'Şirket'} name={'company'} />
          <AutoInput label={'Lokasyon'} name={'location'} />

          <Select label={'Durum'} options={statusOpt} name={'status'} />
          <Select label={'Tür'} options={typeOpt} name={'type'} />

          <div>
            <SubmitButton text={'Oluştur'} />
          </div>
        </form>
      </section>
    </div>
  );
};

export default AddJob;
