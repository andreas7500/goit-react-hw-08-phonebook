// import { Helmet } from 'react-helmet';
import { LoginForm } from 'components/LoginForm/LoginForm';

export default function Login() {
  return (
    <div>
      <p>
        {/* <Helmet> */}
        <title>Login</title>
        {/* </Helmet> */}
      </p>

      <LoginForm />
    </div>
  );
}
