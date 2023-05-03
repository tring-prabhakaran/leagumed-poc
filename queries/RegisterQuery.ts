
import {  gql } from "@apollo/client";
// import { gql } from 'graphql-request';

export const GET_ALL_PROFESSION = gql`
query GetAllProfessions{
    getAllProfessions{
        id
        name
    }
}
`;
