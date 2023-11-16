/* eslint-disable react/prop-types */

import userImg from "../../assets/user.png";

import {
  ProfileWrapper,
  ProfileContainer,
  ProfileTitle,
  ProfileItems,
  ProfileItem,
  ProfileButton,
} from "./profile.styles";

const Profile = ({ user, setUser }) => {
  const handleLogOut = () => {
    setUser(null);
    window.localStorage.clear();
  };

  return (
    <ProfileWrapper>
      <ProfileContainer>
        <img width={50} height={50} src={userImg} alt="user" />
        <ProfileTitle>You are authenticated:</ProfileTitle>
        <ProfileItems>
          <ProfileItem>Email: {user.email}</ProfileItem>
          <ProfileItem>Name: {user.displayName}</ProfileItem>
        </ProfileItems>
        <ProfileButton onClick={handleLogOut}>Log out</ProfileButton>
      </ProfileContainer>
    </ProfileWrapper>
  );
};

export default Profile;
