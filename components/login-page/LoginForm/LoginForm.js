import Button from '../../ui/Button/Button';
import Input from '../../ui/Input/Input';
import {Form} from 'formik';



export default function LoginForm() {
  return (
    <Form className='form'>
      <Input type='text' name='email' placeholder='Email'/>
      <Input type='password' name='password' placeholder='Пароль'/>
      <Button type='submit' text='Войти'/>
    </Form>
  )
}