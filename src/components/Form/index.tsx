import React from 'react';

export default function Form() {
  return (
    <form action="#">
      <label htmlFor="login">Login: <input id="login" type="text" name="login" value="psaruk@123" /></label><br />
      <label htmlFor="password">Password: <input id="password" type="text" name="password" value="123" /></label><br />
      <input type="submit" value="Submit" />
    </form>
  );
};
