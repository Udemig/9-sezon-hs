const Card = ({ item }) => {
  return (
    <div
      style={{ width: '201px' }}
      className="d-flex flex-column align-items-center gap-1 border rounded p-3"
    >
      <img height={100} src={item.imagePath} alt="çeşit-resim" />
      <span>{item.name}</span>

      <div className="d-flex gap-2 mt-4 align-items-center">
        <button className="btn btn-sm btn-outline-danger">Sıfırla</button>
        <span>0</span>
        <button className="btn btn-sm btn-outline-success">Ekle</button>
      </div>
    </div>
  );
};

export default Card;
