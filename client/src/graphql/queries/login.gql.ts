import { gql } from '@apollo/client';

export const LOGIN = gql`
  query login($data: LoginInput!) {
    login(data: $data) {
      access_token
    }
  }
`;
