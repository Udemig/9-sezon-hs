const WarningModal = ({ close }) => {
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
            <h2>İşlem Başarısız Oldu</h2>
            <p>Yapılan veri çekme isteği 404 kod ile hata oluşturdu.</p>
            <p>Lütfen Daha Sonra Tekrar Denyiniz</p>
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

export default WarningModal;
