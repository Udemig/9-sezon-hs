const ThemeModal = ({ close }) => {
  return (
    <div className="modal d-block bg-black bg-opacity-50">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <button
              onClick={close}
              type="button"
              className="btn-close"
            ></button>
          </div>

          <div className="modal-body text-dark">
            <h2 className="text">Zevkinize Uygun temayı seçiniz!</h2>

            <select className="form-select my-4">
              <option>Koyu</option>
              <option>Açık</option>
              <option>Kırmızı</option>
              <option>Mavi</option>
            </select>
          </div>

          <div className="modal-footer">
            <button onClick={close} type="button" className="btn btn-secondary">
              Kapat
            </button>
            <button onClick={close} type="button" className="btn btn-primary">
              Onayla
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeModal;
