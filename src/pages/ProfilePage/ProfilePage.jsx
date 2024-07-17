import { useSelector } from 'react-redux';
import { UserCard } from '../../components';
import { selectUser } from '../../redux/auth/slice';

const ProfilePage = () => {
  const user = useSelector(selectUser);
  return (
    <div className="containerBig">
      <UserCard user={user} />
    </div>
  );
};

export default ProfilePage;
