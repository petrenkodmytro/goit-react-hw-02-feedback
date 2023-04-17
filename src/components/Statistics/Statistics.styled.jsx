import styled from 'styled-components';

export const StatWrap = styled.div`
  padding: 5px;
  border: 3px solid;
  border-radius: 5px;
  border-color: ${props => {
    return props.theme.colors.main; // из темы передаем цвет с помощью функции
  }};
  background-color: ${props => {
    return props.theme.colors.main; // из темы передаем цвет с помощью функции
  }};
  box-shadow: 3px 3px 7px
    ${props => {
      return props.theme.colors.accent; // из темы передаем цвет с помощью функции
    }};
`;

export const Text = styled.p`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 5px;
`;
