import styled from '@emotion/styled';

import { ContentBox } from 'ui/common/components/Layout/ContentBox/ContentBox';
import { InputField } from 'ui/common/components/Form/InputField/InputField';
import { ButtonPrimary } from 'ui/common/components/Buttons/ButtonPrimary/ButtonPrimary';
import {
  AngledContentBoxBackground,
  AngledContentBoxContainer,
  AngledContentBoxWrapper,
} from 'ui/common/components/Layout/AngledContentBox/AngledContentBox.styles';

export const LoginWrapper = styled.div`
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;

  ${AngledContentBoxWrapper} {
    height: 200px;
    margin: -20px -20px 30px;

    ${AngledContentBoxBackground} {
      box-shadow: ${({ theme }) => `0px -5px 10px -5px ${theme.shadow.small}`};
    }
    ${AngledContentBoxContainer} {
      align-items: center;
      height: 200px;
      justify-content: center;
      margin-top: -20px;
      padding: 0;
    }
  }

  ${ContentBox} {
    flex-direction: column;
    width: 400px;

    form {
      display: flex;
      flex-direction: column;
    }

    ${InputField} {
      margin-bottom: 30px;
    }

    ${ButtonPrimary} {
      justify-content: center;
    }
  }
`;
