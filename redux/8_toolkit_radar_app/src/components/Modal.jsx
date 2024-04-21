import axios from 'axios';
import { useEffect, useState } from 'react';
import { dOptions } from '../constants';
import formatDate from '../utils/formatDate';
import { setPath } from '../redux/slices/flightSlice';
import { useDispatch } from 'react-redux';
import c from '../utils/checkValid';

const Modal = ({ detailId, close }) => {
  const dispatch = useDispatch();

  // uçuş detay verisini sadece bu modal içerisnde kullanıcağmız için store'da tutmaya gerek duymadık
  const [d, setDetail] = useState(null);

  // id her değiştiğinde uçuş detaylarını al
  useEffect(() => {
    // önceki uçuşun stateini sıfırla
    setDetail(null);

    // uçuşun detylarını al
    axios
      .get(
        `https://flight-radar1.p.rapidapi.com/flights/detail?flight=${detailId}`,
        dOptions
      )
      .then((res) => {
        // state'i güncelle
        setDetail(res.data);

        // harita sayfasında kullanabilmek için uçuş yolunu slice'a aktar
        dispatch(setPath(res.data.trail));
      });
  }, [detailId]);

  console.log(d);

  return (
    <div className="detail-outer">
      <div className="detail-inner">
        <div className="close-wrapper">
          <button onClick={close}>X</button>
        </div>

        {!d ? (
          <div className="loader-wrapper">
            <div class="loader">
              <span></span>
            </div>
          </div>
        ) : (
          <>
            <h2>{c(d.aircraft.model.text)}</h2>
            <h2>{c(d.aircraft.model.code)}</h2>

            <p>
              <span>Kuyruk Kodu</span>
              <span>{c(d.aircraft.registration)}</span>
            </p>

            {d.aircraft.images ? (
              <img
                src={
                  d.aircraft.images?.large
                    ? d.aircraft.images.large[0].src
                    : d.aircraft.images.thumbnails[0].src
                }
              />
            ) : (
              <p>Fotoğraf Bulunamadı</p>
            )}

            <p>
              <span>Şirket</span>
              <span>{c(d.airline?.short)}</span>
            </p>

            <p>
              <span>Kalkış</span>
              <a target="_blank" href={d.airport?.origin?.website}>
                {c(d.airport?.origin?.name)}
              </a>
            </p>

            <p>
              <span>İniş</span>
              <a target="_blank" href={d.airport?.destination?.website}>
                {c(d.airport?.destination?.name)}
              </a>
            </p>

            <p>
              <span>Kalkış Zamanı</span>
              <span>
                {d.time.scheduled.departure > 0
                  ? formatDate(d.time.scheduled.departure)
                  : 'Bilinmiyor'}
              </span>
            </p>

            <p>
              <span>İniş Zamanı</span>
              <span>
                {d.time.scheduled.arrival > 0
                  ? formatDate(d.time.scheduled.arrival)
                  : 'Bilinmiyor'}
              </span>
            </p>

            <p className={d.status?.icon}>
              <span>{c(d.status.text)}</span>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default Modal;
