import styled from 'styled-components';

export const FeedbackWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const FeedbackBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  padding: 5px;
  border-radius: 5px;
  border: none;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  background-color: ${props => {
    return props.theme.colors.main; // из темы передаем цвет с помощью функции
  }};
  transition: all 0.3s ease-in-out;

  :hover,
  :focus {
    box-shadow: 3px 3px 7px
      ${props => {
        return props.theme.colors.accent; // из темы передаем цвет с помощью функции
      }};
    background-color: #e0dbdb;
  }
`;
