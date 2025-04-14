import styled from 'styled-components';
import { Button } from '../../../components';
import ReactSelect from 'react-select';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

export const Form = styled.form`
  border-radius: 20px;
  background-color: ${(props) => props.theme.black};
  padding: 32px;
  width: 50%;
  min-width: 380px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin: 5px;
  label {
    background-color: transparent;
    font-size: 17px;
  }
`;

export const Label = styled.label`
  background-color: ${(props) => props.theme.white};
  font-size: 14px;
`;

export const Input = styled.input`
  width: 100%;
  height: 48px;
  border-radius: 5px;
  padding: 0 12px;
  border: none;
`;

export const InputLabel = styled.label`
  color: ${(props) => props.theme.white};
  font-size: 16px;
`;

export const LabelUpload = styled.label`
  cursor: pointer;
  border: 1px dashed ${(props) => props.theme.white};
  border-radius: 5px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  color: ${(props) => props.theme.white};
  margin-top: 20px;

  > svg {
    width: 24px;
    height: 24px;
    fill: ${(props) => props.theme.white};
    margin-right: 4px;
  }

  input {
    display: none;
  }

  image {
    border-radius: 20%;
  }
`;

export const Image = styled.img`
  border-radius: 50px;
`;

export const Select = styled(ReactSelect)`
  background-color: black;
`;

export const SubmitButton = styled(Button)`
  margin-top: 40px;
`;

export const ErrorMessage = styled.span`
  color: ${(props) => props.theme.darkRed};
  font-size: 14px;
  line-height: 1.5;
  margin-top: 4px;
  font-weight: 500;
`;

export const OfferCheckBox = styled.div`
  gap: 15px;
  margin-top: 10px;
  cursor: pointer;
  color: ${(props) => props.theme.white};
  display: flex;
  align-items: center;

  input {
    cursor: pointer;
  }
`;
