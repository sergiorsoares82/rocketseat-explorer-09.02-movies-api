import styled from 'styled-components';

export const Container = styled.div`
  background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  main {
    width: 112rem;
    margin: 0 auto;

    .movie-input {
      display: flex;
      flex-direction: column;
      gap: 4rem;

      h1 {
        font-size: 3.6rem;
        font-weight: 500;
        color: ${({ theme }) => theme.COLORS.WHITE_1};
      }

      .inputs {
        display: flex;
        gap: 5.6rem;
      }

      textarea {
        border: none;
        border-radius: 1rem;
        background: ${({ theme }) => theme.COLORS.BACKGROUND_600};
        font-size: 1.6rem;
        font-weight: 400;
        padding: 1.9rem 1.6rem;
        color: ${({ theme }) => theme.COLORS.WHITE_1};
        height: 27.4rem;

        &::placeholder {
          color: ${({ theme }) => theme.COLORS.GRAY_2};
        }
      }

      .marcadores {
        h2 {
          color: #999591;
          font-size: 2rem;
          margin-bottom: 2.4rem;
        }

        .tags {
          background: #0d0c0f;
          height: 8.8rem;
          padding: 1.6rem;
          border-radius: 0.8rem;

          display: flex;
          align-items: center;
          gap: 2.4rem;
        }
      }
      .actions {
        display: flex;
        align-items: center;
        gap: 4rem;
        margin-bottom: 9.6rem;

        button {
          height: 5.6rem;
          border-radius: 1rem;
          padding: 1.6rem;
          border: none;
          font-weight: 500;
        }

        .btn-del {
          background: #0d0c0f;
          color: ${({ theme }) => theme.COLORS.PRIMARY_COLOR};
        }

        .btn-save {
          color: #312e38;
          background: ${({ theme }) => theme.COLORS.PRIMARY_COLOR};
        }
      }
    }
  }
`;
