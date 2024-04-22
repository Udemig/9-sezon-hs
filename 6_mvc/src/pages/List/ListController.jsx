import { useEffect, useState } from 'react';
import ListView from './ListView';
import Model from './ListModel';

const ListController = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // modeldeki method aracılığı ile veriyi al ve state'e aktar
    Model.getPosts().then((data) => setPosts(data));
  }, []);

  return <ListView posts={posts} />;
};

export default ListController;
