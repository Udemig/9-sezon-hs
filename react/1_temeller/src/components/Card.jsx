/*
 ! Prop:
 * Bir üst bileşenden alt bileşen veri aktarmaya yarıyor.
 * Prop özelliği sayesinde yazdığımızın bileşnelerin yeniden kullanlabili olamsını sağlıyoruz
 * Gönderilen prop verisi bileşnin parametre kısmında alınır.

*/
import Button from './Button';

const Card = (props) => {
  return (
    <div className="card">
      <img src={props.item.image} />

      <div className="body">
        <h4 className="category">{props.item.category}</h4>

        <h3>{props.item.title}</h3>

        <Button title="Abonbe Ol" color="orange" size={100} />
      </div>
    </div>
  );
};

export default Card;
