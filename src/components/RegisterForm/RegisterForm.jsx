import { useDispatch } from 'react-redux';
import { registr } from 'redux/auth/operations';
import { BTN, Form, Input, Label } from './RegisterForm.styled'
import Notiflix from 'notiflix';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

export const registrationSchema = yup
  .object()
  .shape({
    name: yup
      .string()
      .matches(
        /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
        "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      )
      .required('Name is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
    password: yup
      .string()
      .min(7, 'Password must be at least 7 characters long')
      .required('Password is required'),
  })
  .required();

export function RegisterForm() {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    // reset,
  } = useForm({
    defaultValues: { name: '', email: '', password: '' },
    resolver: yupResolver(registrationSchema),
  });

  const onSubmit = ({ name, email, password }) => {
    dispatch(registr({ name, email, password }))
      .unwrap()
      .then(() => Notiflix.Notify.success('Account successfully created!'))
      .catch(e =>
        e === 'Request failed with status code 400'
          ? Notiflix.Notify.failure(
              'This user already exist! Use Log In button'
            )
          : Notiflix.Notify.failure('Something went wrong, try one nore time!')
      );
    // reset();
  };

  return (
<Form onSubmit={handleSubmit(onSubmit)}>
        <Label htmlFor="name">Name</Label>
        <Input {...register('name')} type="text" id="name" />
        <p>{errors.name?.message}</p>
        <Label htmlFor="email">Email</Label>
        <Input {...register('email')} type="email" id="email" />
        <p>{errors.email?.message}</p>
        <Label htmlFor="password">Password</Label>
        <Input {...register('password')} type="password" id="password" />
        <p>{errors.password?.message}</p>
        <BTN type="submit">Register</BTN>
      </Form>
  );
};
