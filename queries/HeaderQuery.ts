import {  gql } from "@apollo/client";

export const NAV_MENU = gql`
  query{
    getNavigationMenu
  }
`;