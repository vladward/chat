import { gql } from '@apollo/client';

export const MESSAGE_SENT = gql`
  subscription messageSent {
    messageSent {
      id
      message
      order_id
    }
  }
`;
