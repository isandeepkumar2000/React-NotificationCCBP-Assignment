import styled from "styled-components";
import { LoginPages } from ".";

export type LoginIsDark = {
  isDarkMode: boolean;
};
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  padding: 40px 100px;
  margin: 10px;
  background-color: ${(props: LoginPages) =>
    props.darkMode ? "#0f0f0f" : "white"};
  box-shadow: 1px -1px 17px 0px rgba(0, 0, 0, 0.15);
  @media (max-width: 420px) {
    padding: 30px;
  }
`;
export const WebsiteImage = styled.img`
  width: 150px;
  align-self: center;
  margin-bottom: 20px;
`;

export const InputLabel = styled.label`
  color: ${(props: LoginPages) => (props.darkMode ? "white" : "#64748b")};
  font-weight: bold;
  font-size: 12px;
  margin: 20px 0px 5px;
`;
export const PasswordLabel = styled.label`
  color: ${(props: LoginPages) => (props.darkMode ? "white" : "black")};
  font-size: 14px;
  margin-bottom: 10px;
  margin-left: 5px;
`;
export const InputField = styled.input`
  box-shadow: rgba(202, 52, 52, 0.24) 0px 3px 8px;
  color: black;
  border: 1px solid
    ${(props: LoginPages) => (props.darkMode ? "#475569" : "#cbd5e1")};
  padding: 10px;
  border-radius: 2px;
  margin-bottom: 5px;
  &:focus {
    outline: none;
    background-color: ${(props: LoginPages) =>
      props.darkMode ? "#e2e8f0" : "#e2e8f0"};
  }
  &::placeholder {
    font-weight: 100;
    color: ${(props: LoginPages) => (props.darkMode ? "#475569" : "#cbd5e1")};
  }
`;
export const ErrorMessage = styled.p`
  color: #ff0b37;
  font-size: 14px;
  margin: 5px 0px 0px;
  @media (max-width: 420px) {
    margin: 20px 0px 0px;
  }
`;
export const LoginButton = styled.button`
  border-radius: 8px;
  background-color: #3b82f6;
  margin-top: 30px;
  color: white;
  font-weight: bold;
  border: 0px;
  padding: 10px;
  width: 100%;
  @media (max-width: 420px) {
    width: 250px;
  }
`;

export const LoginFormConatiner = styled.div`
  display: flex;
  justify-items: center;
  align-items: center;
  flex-direction: column;
  margin-top: 200px;
  height: 820px;
`;
