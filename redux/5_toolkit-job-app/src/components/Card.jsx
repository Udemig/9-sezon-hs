import DelButton from './DelButton';
import { MdLocationOn } from 'react-icons/md';
import { FaSuitcase } from 'react-icons/fa';
import { BsFillCalendarDateFill } from 'react-icons/bs';

const Card = ({ job }) => {
  const colors = {
    Mülakat: 'green',
    Reddedildi: 'red',
    'Devam Ediyor': 'orange',
  };

  return (
    <div className="card">
      <div className="head">
        <section>
          <div className="letter">
            <span>{job.company[0]}</span>
          </div>

          <div className="info">
            <p>{job.position}</p>
            <p>{job.company}</p>
          </div>
        </section>

        <section>
          <DelButton />
        </section>
      </div>

      <div className="body">
        <div className="field">
          <MdLocationOn />
          <p>{job.location}</p>
        </div>

        <div className="field">
          <FaSuitcase />
          <p>{job.type}</p>
        </div>

        <div className="field">
          <BsFillCalendarDateFill />
          <p>{job.date}</p>
        </div>

        <div className="status">
          <p
            style={{
              background: colors[job.status],
            }}
          >
            {job.status}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
