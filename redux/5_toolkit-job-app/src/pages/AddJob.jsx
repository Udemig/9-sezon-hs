import { v4 } from 'uuid';
import AutoInput from '../components/AutoInput';
import { statusOpt, typeOpt } from '../constants';
import { toast } from 'react-toastify';
import api from '../utils/api';
import { createJob } from '../app/slices/jobSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

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
    newJobData.date = new Date().toLocaleDateString();

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

          <div>
            <label>Durum</label>
            <select required name="status">
              <option selected hidden value="">
                Seçiniz
              </option>
              {statusOpt.map((i) => (
                <option value={i}>{i}</option>
              ))}
            </select>
          </div>

          <div>
            <label>Tür</label>
            <select required name="type">
              <option selected hidden value="">
                Seçiniz
              </option>
              {typeOpt.map((i) => (
                <option value={i}>{i}</option>
              ))}
            </select>
          </div>

          <div>
            <button className="submit-btn">
              <span class="circle1"></span>
              <span class="circle2"></span>
              <span class="circle3"></span>
              <span class="circle4"></span>
              <span class="circle5"></span>
              <span class="text">Oluştur</span>
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default AddJob;
