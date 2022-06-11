import {gql} from "@apollo/client";

export const SEND_CODE = gql`
        mutation sendCode($data: SendCodeInput!) {
            sendCode(data: $data)
        }
`