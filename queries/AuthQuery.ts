
import { useQuery, gql } from "@apollo/client";

export const CREATE_USER = gql`
mutation CreateUser($input: CreateUserInput!) {
  createUser(input: $input) {
      id
      userName
      emailId
      firstName
      lastName
  }
}
`;


export const LOGIN_USER = gql`
  query Login($emailId: String!, $password: String!) {
    login(emailId: $emailId, password: $password) 
  }
`;
