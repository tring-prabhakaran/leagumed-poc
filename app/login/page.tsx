'use client';

import { getClient } from "@/lib/apolloClient";
import { LOGIN_USER } from "../../queries/AuthQuery";

export default async function Login () {
  console.log(' login page--------------------------------');

  const handelClick = async () => {
    const client = getClient();
    const loginResponse = await client.query(
      { 
        query: LOGIN_USER,
        variables: {
          emailId: "superadmin@tringhub.com",
          password:"TringHub123$"
        }
      }
    );
    console.log('login', loginResponse);
  }

  return (
  <div className='position-absolute top-50'>
    Signin
    <button onClick={handelClick}>test</button>
  </div>
);
}
