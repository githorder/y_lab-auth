import styled from "styled-components";

import Button from "../button/button.component";

export const ProfileWrapper = styled.div`
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProfileContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProfileTitle = styled.h2`
  text-align: center;
  margin: 40px 0px;
`;

export const ProfileItems = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;
`;

export const ProfileItem = styled.li`
  list-style: none;
  margin: 0 auto;
`;

export const ProfileButton = styled(Button)`
  margin: 40px auto;
`;
