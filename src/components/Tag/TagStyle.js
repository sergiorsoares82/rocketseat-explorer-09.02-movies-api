import { styled } from 'styled-components';

export const Container = styled.div`
  padding: 0.5rem 1.6rem;
  border-radius: 0.8rem;
  background: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  color: ${({ theme }) => theme.COLORS.WHITE_2};
  font-size: 1.2rem;
  display: inline;
  margin-right: 1rem;
`;
