import { CiSearch } from 'react-icons/ci';

const Form = ({ handleSubmit }) => {
  return (
    <form className="flex items-center border rounded " onSubmit={handleSubmit}>
      <input
        className="bg-transparent py-1 px-1 md:px-5 outline-none"
        placeholder="Ülke İsmine Göre Ara"
        type="text"
        required
      />
      <button className="bg-green-500 p-[6px] text-xl w-full h-full rounded transition hover:bg-green-600">
        <CiSearch />
      </button>
    </form>
  );
};

export default Form;
