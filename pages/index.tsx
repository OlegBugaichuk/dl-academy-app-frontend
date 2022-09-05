import { Formik } from 'formik';
import type { NextPage } from 'next';

import LoginForm from '../components/login-page/LoginForm/LoginForm';

const Home: NextPage = () => {

  const initialValues = {
    email: '',
    password: ''
  };
  
  return (
    <Formik initialValues={initialValues} onSubmit=''>
      <LoginForm/>
    </Formik>
  )
}

export default Home
