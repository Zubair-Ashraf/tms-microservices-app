import { useState } from 'react';

const Signup = () => {
  const [values, setValues] = useState();

  const handleValueChange = ({ target: { name, value } }) =>
    setValues({ ...values, [name]: value });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
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
      <button type='button' class='btn btn-primary'>
        Signup
      </button>
    </form>
  );
};

export default Signup;
