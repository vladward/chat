import { gql } from '@apollo/client';

export const SEND_MESSAGE = gql`
  mutation sendMessage($data: SendMessageInput!) {
    sendMessage(data: $data) {
      id
      order_id
      createdAt
      message
    }
  }
`;
