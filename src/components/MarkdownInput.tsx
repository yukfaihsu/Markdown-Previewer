import { ChangeEventHandler } from 'react';
import styled from 'styled-components';

const InputContainer = styled.div`
  background-color: white;
  padding: 30px;
  height: 90vh;
  width: 50%;
`;

const StyledTextArea = styled.textarea`
  height: 100%;
  width: 100%;
  border: none;
  font-family: Arial,sans-serif;
  font-size: 16px;

  &:focus {
    outline: none;
  }
`;

type MarkdownInputProps = {
  inputText: string;
  onChange: ChangeEventHandler<HTMLTextAreaElement>;
}

const MarkdownInput = ({inputText, onChange}: MarkdownInputProps) => {
  return (
    <InputContainer>
      <StyledTextArea
        value={inputText}
        onChange={onChange}
      />
    </InputContainer>
  )
};

export default MarkdownInput;