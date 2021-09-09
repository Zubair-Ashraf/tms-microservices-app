import { useState } from 'react';
import Router from 'next/router';
import useRequest from '../../hooks/useRequest';

const Signup = () => {
  const [values, setValues] = useState();

  const { onRequest, errors } = useRequest({
    url: 'api/users/signup',
    method: 'post',
    data: { ...values },
    onSuccess: () => Router.push('/'),
  });

  const handleValueChange = ({ target: { name, value } }) =>
    setValues({ ...values, [name]: value });

  const handleSubmit = (e) => {
    e.preventDefault();

    onRequest();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Sign up</h1>
      <div className='form-group'>
        <label for=''>Email Address</label>
        <input
          type='email'
          class='form-control'
          name='email'
          onChange={handleValueChange}
        />
      </div>
      <div className='form-group'>
        <label for=''>Password</label>
        <input
          type='password'
          class='form-control'
          name='password'
          onChange={handleValueChange}
        />
      </div>
      {errors && (
        <ul>
          {errors.map((message, index) => (
            <li key={index}>{message}</li>
          ))}
        </ul>
      )}
      <button type='submit' class='btn btn-primary'>
        Signup
      </button>
    </form>
  );
};

export default Signup;
