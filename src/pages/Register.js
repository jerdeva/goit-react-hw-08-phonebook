import { Helmet } from 'react-helmet';
import { RegisterForn } from 'components/RegisterForm/RegisterForm';

export default function Register() {
    return (
      <div>
        <Helmet>
          <title>Registration</title>
            </Helmet>
            <RegisterForn/>
      </div>
    );
}