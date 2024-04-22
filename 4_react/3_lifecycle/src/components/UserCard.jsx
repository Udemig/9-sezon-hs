const UserCard = ({ user }) => {
  return (
    <div className="card p-5 shadow d-flex flex-column gap-4">
      <h1>{user.name}</h1>
      <h3>
        <span className="badge bg-danger me-2">Kullanıcı Adı:</span>
        <span>{user.username}</span>
      </h3>
      <h3>
        <span className="badge bg-danger me-2">Email:</span>
        <span>{user.email}</span>
      </h3>
      <h3>
        <span className="badge bg-danger me-2">Adres:</span>
        <span>{user.address.city + ' ' + user.address.street}</span>
      </h3>
      <h3>
        <span className="badge bg-danger me-2">Şireket:</span>
        <span>{user.company.name}</span>
      </h3>
    </div>
  );
};

export default UserCard;
