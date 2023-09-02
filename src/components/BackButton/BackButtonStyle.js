import { styled } from 'styled-components';

export const Container = styled.div`
  a {
    color: ${({ theme }) => theme.COLORS.PRIMARY_COLOR};
    display: flex;
    align-items: center;
    gap: 0.8rem;
    margin-bottom: 2.4rem;
  }
`;
