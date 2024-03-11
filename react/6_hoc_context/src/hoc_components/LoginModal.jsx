const LoginModal = ({ close }) => {
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
            <form>
              <div>
                <label>İsim</label>
                <input className={'form-control shadow'} type="text" />
              </div>
              <div className="my-4">
                <label>Şifre</label>
                <input className={'form-control shadow'} type="password" />
              </div>
            </form>
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

export default LoginModal;
