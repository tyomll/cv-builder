import { useAppSelector } from './useRedux';

export function useAuth() {
  const { email, token, id } = useAppSelector(state => state.authUser)

  return {
    isAuth: !!email,
    email,
    token,
    id,
  }
}