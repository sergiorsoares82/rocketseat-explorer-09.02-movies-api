import { styled } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;

  input {
    width: 100%;
    border: 0;
    height: 5.6rem;
    padding: 1.6rem 0 1.6rem 3.6rem;
    border-radius: 1rem;
    margin-bottom: 0.8rem;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_600};
    font-size: 1.6rem;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.WHITE_1};
    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_2};
    }
  }

  > svg {
    color: ${({ theme }) => theme.COLORS.GRAY_2};
    position: absolute;
    left: 1rem;
    /* padding-left: 1rem; */
    margin-bottom: 0.8rem;
    /* height: 5.6rem;
    padding: 1.6rem; */
    font-size: 1.6rem;
  }
`;
