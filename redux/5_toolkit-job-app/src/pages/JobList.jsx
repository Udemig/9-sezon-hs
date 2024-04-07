import { useSelector } from 'react-redux';
import Loader from './../components/Loader';
import Error from './../components/Error';
import Card from '../components/Card';

const JobList = ({ retry }) => {
  const { jobs, error, isLoading } = useSelector((store) => store);

  return (
    <div className="list-page">
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Error retry={retry} message={error} />
      ) : (
        <div className="cards-wrapper">
          {jobs.map((i) => (
            <Card key={i.id} job={i} />
          ))}
        </div>
      )}
    </div>
  );
};

export default JobList;
