import { gql } from '@apollo/client';

export const GET_CURRENT_USER = gql`
  query getCurrentUser {
    getCurrentUser {
      id
      phone_number
      name
      image
      notification
      position
      is_new
      orders {
        id
        institution_id
        status
        rating
        delivery
        latitude
        longitude
        #        messages {
        #          id
        #          order_id
        #          user {
        #            id
        #            name
        #          }
        #        }
      }
      pay_methods {
        method
      }
      institution {
        id
        name
        work_from
        work_to
        address
        free_delivery
        dishes {
          id
          name
          price
        }
        fillings {
          id
          name
          price
          weight
        }
      }
    }
  }
`;
