import { styled } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 11.6rem;
  grid-area: header;

  /* position: fixed;
  top: 0;
  left: 0;
  z-index: 999px; */

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6.4rem;

  padding: 2.4rem 12.3rem;

  border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_800};
  background: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  h1 {
    font-size: 2.4rem;
    color: ${({ theme }) => theme.COLORS.PRIMARY_COLOR};
  }

  input {
    width: 63rem;
    height: 5.6rem;
    padding: 1.9rem 2.4rem;

    border-radius: 1rem;
    border: none;

    background: ${({ theme }) => theme.COLORS.BACKGROUND_600};

    font-size: 1.4rem;
    color: ${({ theme }) => theme.COLORS.WHITE_1};

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_2};
    }
  }

  .user {
    display: flex;
    align-items: center;
    gap: 0.8rem;

    .left {
      color: ${({ theme }) => theme.COLORS.WHITE_1};
      display: flex;
      flex-direction: column;
      align-items: end;

      span {
        text-align: left;
        font-size: 1.4rem;
        font-weight: 700;
      }

      a {
        color: ${({ theme }) => theme.COLORS.GRAY_2};
        font-size: 1.4rem;
        font-weight: 400;
      }
    }

    img {
      width: 6.4rem;
      height: 6.4rem;
      border-radius: 50%;
      border: none;
    }
  }

  .user {
    display: flex;
    align-items: center;
  }
`;
