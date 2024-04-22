const ListView = ({ posts }) => {
  return (
    <div>
      <h1>
        Gönderi Sayısı: <span>{posts.length}</span>
      </h1>

      {posts.length === 0 ? (
        <p>yükleniyor</p>
      ) : (
        posts.map((post) => <h1>POST KART</h1>)
      )}
    </div>
  );
};

export default ListView;
