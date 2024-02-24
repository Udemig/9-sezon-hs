/*
 ! Prop:
 * Bir üst bileşenden alt bileşen veri aktarmaya yarıyor.
 * Prop özelliği sayesinde yazdığımızın bileşnelerin yeniden kullanlabili olamsını sağlıyoruz
 * Gönderilen prop verisi bileşnin parametre kısmında alınır.

*/

const Card = (props) => {
  return (
    <div className="card">
      <img src={props.image} />

      <div className="body">
        <h4 className="category">{props.category}</h4>

        <h3>{props.title}</h3>
      </div>
    </div>
  );
};

export default Card;
