import { useContext } from 'react';
import SideBar from '../components/SideBar';
import { VideoContext } from '../context/videoContext';
import Loader from '../components/Loader';
import ErrorDisplay from '../components/ErrorDisplay';
import VideoCard from '../components/VideoCard';

const Feed = () => {
  const { videos, error, isLoading } = useContext(VideoContext);

  return (
    <div className="flex">
      <SideBar />

      <div className="videos">
        {isLoading ? (
          <Loader />
        ) : error ? (
          <ErrorDisplay error={error} />
        ) : (
          videos?.map(
            (item) =>
              item.type === 'video' && (
                <VideoCard video={item} key={item.videoId} />
              )
          )
        )}
      </div>
    </div>
  );
};

export default Feed;
