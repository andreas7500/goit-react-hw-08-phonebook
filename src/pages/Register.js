// import { Helmet } from 'react-helmet';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';

export default function Register() {
  return (
    <div>
      <p>
        {/* <Helmet> */}
        <title>Registration</title>
        {/* </Helmet> */}
      </p>

      <RegisterForm />
    </div>
  );
}
