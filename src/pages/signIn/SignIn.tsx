import React from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase';
import { useAppDispatch } from '../../hooks/useRedux';
import { setAuthUser } from '../../redux/authUser/slice';
import AuthForm, { AuthDataType } from '../../components/authForm/AuthForm';
import swal from 'sweetalert';

const signInStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100vh',
};
const content = {
  type: 'login',
  formHeading: 'Welcome Back',
  formHint: 'Enter your credentials to access your account.',
  btnText: 'Sign In',
};

const SignIn: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  function handleLogin(data: AuthDataType) {
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then(({ user }) => {
        dispatch(
          setAuthUser({
            username: user.displayName,
            email: user.email,
            id: user.uid,
            token: user.refreshToken,
          }),
        );
        navigate(`/builder`);
      })
      .catch((err) => {
        switch (err.code) {
          case 'auth/invalid-email':
            swal({
              title: 'Oops Error!',
              text: 'Invalid Email. Try again.',
              icon: 'error',
            });
            break;
          case 'auth/wrong-password':
            swal({
              title: 'Oops Error!',
              text: 'Wrong password. Try again.',
              icon: 'error',
            });
            break;
        }
      });
  }

  return (
    <div style={signInStyles}>
      {auth.currentUser?.displayName}
      <AuthForm content={content} submitHandler={handleLogin} />
    </div>
  );
};

export default SignIn;
