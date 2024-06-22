import { FriendsList, Title } from '../../components';

const FriendsPage = () => {
  return (
    <div className="containerBig pt-[34px] md:pt-[85px] lg:pt-[107px]">
      <Title>Our friends</Title>
      <FriendsList />
    </div>
  );
};

export default FriendsPage;
