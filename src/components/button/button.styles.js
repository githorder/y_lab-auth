import styled from "styled-components";

export const BaseButton = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  background-color: #0766ad;
  color: white;
  text-transform: uppercase;
  font-weight: bolder;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: white;
    color: #0766ad;
    border: 1px solid #0766ad;
  }

  &:active {
    transform: translate(0, 3px);
  }
`;

export const InvertedButton = styled(BaseButton)`
  background-color: white;
  border: 1px solid #0766ad;
  color: #0766ad;

  &:hover {
    background-color: #0766ad;
    border: none;
    color: #fff;
  }
`;
