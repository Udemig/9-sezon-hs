import Buttons from './Buttons';
import Content from './Content';
import UserInfo from './UserInfo';

const Post = ({ tweet }) => {
  return (
    <div className="flex gap-3 border-b py-6 px-3 border-zinc-600">
      <img
        className="w-12 h-12 rounded-full"
        src={tweet.user.photo}
        alt={tweet.user.name}
      />

      <div className="w-full">
        <UserInfo tweet={tweet} />

        <Content />

        <Buttons />
      </div>
    </div>
  );
};

export default Post;
