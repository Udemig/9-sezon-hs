const ContentMode = ({ todo, handleDelete, setIsEdit }) => {
  return (
    <>
      <span>{todo.status}</span>

      <span>{todo.title}</span>

      <div className="btn-group">
        <button
          onClick={() => setIsEdit(true)}
          className="btn btn-sm btn-primary"
        >
          Düzenle
        </button>
        <button onClick={handleDelete} className="btn btn-sm btn-danger">
          Sil
        </button>
      </div>
    </>
  );
};

export default ContentMode;
