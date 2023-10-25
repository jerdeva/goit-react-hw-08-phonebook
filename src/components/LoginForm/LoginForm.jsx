import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { Form, Label, Input, BTN } from './LoginForm.styled'
import Notiflix from 'notiflix';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';



export const loginSchema = yup
  .object()
  .shape({
    email: yup.string().email('Invalid email').required('Email is required'),
    password: yup
      .string()
      .min(8, 'Password must be at least 8 characters long')
      .required('Password is required'),
  })
  .required();

export function LoginForm() {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { email: '', password: '' },
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = ({ email, password }) => {
    dispatch(logIn({ email, password }))
      .unwrap()
      .then(resp => {
        Notiflix.Notify.success(`Successfully logged in as ${resp.user.name}`);
      })
      .catch(e => {
        e === 'Request failed with status code 400'
          ? Notiflix.Notify.failure('Wrong email or password')
          : Notiflix.Notify.failure('Something went wrong, try one nore time!');
      });
    // reset();
  };

  return (


    <Form onSubmit={handleSubmit(onSubmit)}>
        <Label htmlFor="email">Email</Label>
        <Input {...register('email')} type="email" id="email" />
        <p>{errors.email?.message}</p>
        <Label htmlFor="password">Password</Label>
        <Input {...register('password')} type="password" id="password" />
        <p>{errors.password?.message}</p>
        <BTN type="submit">Login</BTN>
      </Form>
  );
};
