import { useSelector } from "react-redux";

const Profile = () => {
  const mode = useSelector((state) => state.theme.mode);

  return (
    <div className={`profile-card ${mode}`}>
      <h2>User Profile</h2>
      <p>This cards changes with theme :{mode}</p>
    </div>
  );
};

export default Profile;
