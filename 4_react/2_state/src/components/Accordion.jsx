import { useState } from 'react';

const Accordion = ({ title, description }) => {
  // camelCase isimlendirme tercih ediyoruz
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-3 p-3 text-dark">
      <div className="d-flex justify-content-between align-items-center">
        <h2>{title}</h2>
        <button
          onClick={() => {
            // isOpen değerini true'ya çekiyoruz
            // setIsOpen(isOpen === true ? false : true);
            setIsOpen(!isOpen);
          }}
          className="btn btn-primary buton"
        >
          {isOpen ? '-' : '+'}
        </button>
      </div>

      {isOpen && <p className="mt-4 lead">{description}</p>}
    </div>
  );
};

export default Accordion;
