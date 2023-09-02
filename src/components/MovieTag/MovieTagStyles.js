import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  height: 5.6rem;
  border-radius: 1rem;

  padding: 1.6rem;

  background: ${({ theme, $isnew }) =>
    $isnew ? 'transparent' : theme.COLORS.BACKGROUND_600};
  color: #fff;

  border: ${({ theme, $isnew }) => ($isnew ? `1px dashed #fff` : 'none')};

  > button {
    border: none;
    background: none;
    width: 2.2rem;
  }

  .btn-del {
    color: ${({ theme }) => theme.COLORS.PRIMARY_COLOR};
  }

  .btn-add {
    color: ${({ theme }) => theme.COLORS.PRIMARY_COLOR};
  }

  > input {
    height: 5.6rem;

    padding: 1.2rem 0;

    color: ${({ theme }) => theme.COLORS.WHITE_1};
    background: transparent;

    border: none;
    outline: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_1};
    }
  }
`;
