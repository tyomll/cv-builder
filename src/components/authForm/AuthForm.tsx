import React from 'react';
import s from './AuthForm.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faUser } from '@fortawesome/free-solid-svg-icons';

export interface AuthDataType {
  username: string;
  email: string;
  password: string;
  passwordConfirmation?: string;
}

interface AuthFormProps {
  content: {
    type: string;
    formHeading: string;
    formHint: string;
    btnText: string;
  };
  submitHandler: (arg: AuthDataType) => void;
}
const AuthForm: React.FC<AuthFormProps> = ({ content, submitHandler }) => {
  const [authData, setAuthData] = React.useState<AuthDataType>({
    username: '',
    email: '',
    password: '',
    passwordConfirmation: '',
  });

  return (
    <div className={s.root}>
      <div className={s.container}>
        <div className={s.card}>
          <div className={s.heading}>
            <h2>{content.formHeading}</h2>
            <span>{content.formHint}</span>
          </div>
          <div className={s.form}>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (content.type === 'login') {
                  submitHandler(authData);
                } else {
                  submitHandler(authData);
                }
              }}>
              {content.type === 'register' && (
                <>
                  <div className={s.fullName}>
                    <div className={s.input}>
                      <FontAwesomeIcon icon={faUser} />
                      <input
                        type="text"
                        placeholder="Username"
                        onChange={(e) => {
                          setAuthData({ ...authData, username: e.target.value });
                        }}
                      />
                    </div>
                  </div>
                </>
              )}
              <div className={s.input}>
                <FontAwesomeIcon icon={faEnvelope} />
                <input
                  type="text"
                  placeholder={content.type === 'login' ? 'Your email' : 'Email'}
                  onChange={(e) => {
                    setAuthData({ ...authData, email: e.target.value });
                  }}
                />
              </div>
              <div className={s.input}>
                <FontAwesomeIcon icon={faLock} />
                <input
                  type="password"
                  placeholder={content.type === 'login' ? 'Your password' : 'Password'}
                  onChange={(e) => {
                    setAuthData({ ...authData, password: e.target.value });
                  }}
                />
              </div>
              {content.type === 'register' && (
                <div className={s.input}>
                  <FontAwesomeIcon icon={faLock} />
                  <input
                    type="password"
                    placeholder="Password Confirmation"
                    onChange={(e) => {
                      setAuthData({ ...authData, passwordConfirmation: e.target.value });
                    }}
                  />
                </div>
              )}
              <button type="submit">{content.btnText}</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
