import { MouseEventHandler } from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  background-color: black;
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
`;

const Title = styled.h1`
  color: white;
  font-size: 30px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: rgb(145, 144, 144);
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  transition: background-color 0.2s ease 0s;

  &:hover{
    background-color: white;
    color: rgb(145, 144, 144);
  }

  &:focus{
    outline: none;
}
`;

type HeaderProps = {
  onToggleGuide: MouseEventHandler<HTMLButtonElement>;
}

const Header = ({onToggleGuide}:HeaderProps) => {
  return (
    <HeaderContainer>
      <Title>Markdown Previewer</Title>
      <Button onClick={onToggleGuide}>Markdown Guide</Button>
    </HeaderContainer>
  )
};

export default Header;

