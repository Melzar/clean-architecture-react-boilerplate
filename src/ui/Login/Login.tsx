import React from 'react';

import { useForm } from 'react-hook-form';

import { ContentBox } from 'ui/common/components/Layout/ContentBox/ContentBox';
import { InputField } from 'ui/common/components/Form/InputField/InputField';
import { ButtonPrimary } from 'ui/common/components/Buttons/ButtonPrimary/ButtonPrimary';
import { AngledContentBox } from 'ui/common/components/Layout/AngledContentBox/AngledContentBox';
import { TitlePage } from 'ui/common/components/Typography/TitlePage/TitlePage';

import { useLogin } from 'ui/Login/login.hooks';

import { LoginWrapper } from 'ui/Login/login.styles';

export const Login = () => {
  const { register, handleSubmit } = useForm();
  const { onSubmit } = useLogin();

  return (
    <LoginWrapper>
      <ContentBox>
        <AngledContentBox>
          <TitlePage light>Authenticate</TitlePage>
        </AngledContentBox>
        <form name="AuthenticationForm" onSubmit={handleSubmit(onSubmit)}>
          <InputField
            type="text"
            id="login"
            name="login"
            placeholder="Login"
            ref={register}
          />
          <InputField
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            ref={register}
          />
          <ButtonPrimary
            noShadow
            id="loginSubmitButton"
            name="loginSubmitButton"
          >
            Sign in
          </ButtonPrimary>
        </form>
      </ContentBox>
    </LoginWrapper>
  );
};
