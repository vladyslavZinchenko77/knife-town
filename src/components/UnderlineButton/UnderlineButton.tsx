
import styled from 'styled-components';

const UnderlineButton = styled.h1<{ isHovered: boolean }>`
  position: relative;
  display: inline-block;
  padding-left: 10px;
  color: ${props => (props.isHovered ? 'blue' : 'black')};
  cursor: pointer;
  
  &:hover {
    &:before {
      content: '';
      position: absolute;
      left: 0;
      bottom: -2px;
      width: 100%;
      height: 2px;
      background-color: black;
    }
  }
`;

interface HeaderProps {
  text: string;
}
export default UnderlineButton;