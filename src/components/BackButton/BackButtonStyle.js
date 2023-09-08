import { styled } from 'styled-components';

export const Container = styled.div`
  button {
    color: ${({ theme }) => theme.COLORS.PRIMARY_COLOR};
    display: flex;
    align-items: center;
    gap: 0.8rem;
    margin: 2.4rem 0;
    background: none;
    border: none;
    width: fit-content;
  }
`;
