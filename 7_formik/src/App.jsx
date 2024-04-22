import { useFormik } from 'formik';
import { schema } from './schema';
import InputField from './InputField';
import { inputs } from './constants';

const App = () => {
  // klasik yöntemi veirlere erişmek için kullanıyoruz ama hata yönetimi yapamıyoruz hata yönetimi yapmak istersek kodları bizim yazdığımız seneryoda çok fazla kod tekrarı olucağı için formik & yup kütüphanlerini kullanrak bu formu yöneticez

  // formik'in bütün özelliklerini kullanmamızı sağlayan hook
  const formik = useFormik({
    //state'i tutulcak verilerin ilk değeri
    initialValues: {
      email: '',
      age: '',
      password: '',
      passwordConfirm: '',
      terms: false,
    },

    // validasyon şeması
    // formiğin, inputlardaki veriler, tanımladığımız şemadaki koşullara uygun mu kontrol etmesini sağlar. Eğerki inputtaki veri validasyon şemasında tanımladığımız koşullara uygun değilse formik error state'ini günceller
    validationSchema: schema,

    // form gönderilince çalışıcak olan fonksiyon. otomatik olarak sayfa yenilemeyi engeller.
    // 1.parametre olarak formdaki veileri alır
    // 2.parametre olarak formda çalıştıralabilecek aksiyonları alır
    onSubmit: (values, actions) => {
      alert('form başarıyla gönderildi');
      console.log(values);
    },
  });

  return (
    <div className="vh-100 vw-100 bg-dark text-white">
      <div className="container py-5">
        <h2 className="text-center">Coinmania</h2>

        <form
          onSubmit={formik.handleSubmit}
          className="d-flex flex-column gap-3 mt-5"
        >
          {inputs.map((data) => (
            <InputField formik={formik} data={data} />
          ))}

          <button type="submit" className="btn btn-primary">
            Gönder
          </button>
        </form>
      </div>
    </div>
  );
};

export default App;
