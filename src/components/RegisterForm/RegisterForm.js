import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

export const RegisterForn = () => {
    const dispatch = useDispatch();

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.currentTarget;
        dispatch(
          register({
            name: form.elements.name.value,
            email: form.elements.email.value,
            password: form.elements.password.value,
          })
        );
            form.reset();
    }

    return (
      <form onSubmit={handleSubmit} autoCapitalize="off">
        <label>
          Username
          <input name="username" type="text" />
        </label>
        <label>
          Email
          <input name="email" type="email" />
        </label>
        <label>
          Password
          <input name="password" type="password" />
            </label>
            <button type='submit'>Register</button>
      </form>
    );

}