import { styled } from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-areas: 'left right';
  grid-template-columns: 45vw 55vw;
  height: 100%;
  overflow: hidden;

  color: ${({ theme }) => theme.COLORS.WHITE_1};

  .sign-side {
    background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    grid-area: left;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .login-area {
      width: 34rem;

      .title {
        margin-bottom: 4.8rem;

        h1 {
          color: ${({ theme }) => theme.COLORS.PRIMARY_COLOR};
          font-size: 4.8rem;
          font-weight: 700;
          width: 100%;
          text-align: left;
        }

        span {
          color: ${({ theme }) => theme.COLORS.GRAY_1};
          font-size: 1.4rem;
          font-weight: 400;
        }
      }

      h2 {
        color: ${({ theme }) => theme.COLORS.WHITE_1};
        font-size: 2.4rem;
        font-weight: 500;
        margin-bottom: 4.8rem;
      }

      button {
        margin-top: 1.6rem;
        margin-bottom: 4.8rem;
        background: ${({ theme }) => theme.COLORS.PRIMARY_COLOR};
        height: 5.6rem;
        border-radius: 1rem;
        border: none;
        font-size: 1.6rem;
        color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
        font-weight: 500;
      }

      a {
        color: ${({ theme }) => theme.COLORS.PRIMARY_COLOR};
        font-weight: 400;
        text-align: center;
        width: 100%;
      }
    }
  }

  .image-side {
    grid-area: right;
    height: 100vh;
    img {
      width: 55vw;
      height: 100%;
      object-fit: cover;
    }
  }
`;

// export const Form
