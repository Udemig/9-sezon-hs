import { Link } from 'react-router-dom';
import { IoIosSearch } from 'react-icons/io';
import { FaBell } from 'react-icons/fa';
import { IoVideocam } from 'react-icons/io5';
import { MdVideoLibrary } from 'react-icons/md';

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4">
      <Link className="flex items-center gap-2" to="/">
        <img className="w-[50px]" src="/youtube.png" alt="logo" />
        <h1 className="text-2xl max-sm:hidden font-mono">Youtube</h1>
      </Link>

      <form className="flex items-center border border-gray-400 rounded-[20px] overflow-hidden">
        <input
          className="bg-black text-white px-3 py-1 outline-none"
          type="text"
        />
        <button className="border-l px-2 text-xl">
          <IoIosSearch />
        </button>
      </form>

      <div className="flex gap-3 text-xl cursor-pointer">
        <FaBell className="hover:text-gray-400 transition duration-[250ms]" />
        <IoVideocam className="hover:text-gray-400 transition duration-[250ms]" />
        <MdVideoLibrary className="hover:text-gray-400 transition duration-[250ms]" />
      </div>
    </header>
  );
};

export default Header;
