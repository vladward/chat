import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type AddDishCommentsInput = {
  dish_id: Scalars['ID'];
  message: Scalars['String'];
  stars: Scalars['Int'];
};

export type AddInstitutionElevation = {
  evaluation: Scalars['Int'];
  institution_id: Scalars['Int'];
};

export type ChangeOrderStatusInput = {
  order_id: Scalars['ID'];
  status?: InputMaybe<Status>;
};

export type CommentsObject = {
  __typename?: 'CommentsObject';
  avarage_rating: Scalars['Int'];
  count: Scalars['Int'];
  rows: Array<DishRating>;
};

export type CreateDishInput = {
  composition: Scalars['String'];
  filling_ids: Array<Scalars['Int']>;
  image: Scalars['Upload'];
  name: Scalars['String'];
  price: Scalars['Float'];
  tag_ids: Array<Scalars['Int']>;
};

/** input for add extra address */
export type CreateExtraAddressInput = {
  latitude: Scalars['String'];
  longitude: Scalars['String'];
};

export type CreateFillingInput = {
  image: Scalars['Upload'];
  name: Scalars['String'];
  price: Scalars['Float'];
  weight: Scalars['Float'];
};

export type CreateInstitutionsInput = {
  address: Scalars['String'];
  free_delivery: Scalars['Float'];
  image: Scalars['Upload'];
  name: Scalars['String'];
  pay_methods: Array<PayMethod>;
  shipping_cost: Scalars['Float'];
  /** Tags ids */
  tags: Array<Scalars['ID']>;
  work_days: Array<Day>;
  work_from: Scalars['String'];
  work_to: Scalars['String'];
};

export type CreateOrderInput = {
  latitude: Scalars['String'];
  longitude: Scalars['String'];
  orders: Array<Order>;
  pay_method: InstitutionOrderPayMethods;
};

export type CreateTagInput = {
  name: Scalars['String'];
};

/** work day */
export enum Day {
  Friday = 'FRIDAY',
  Monday = 'MONDAY',
  Saturday = 'SATURDAY',
  Sunday = 'SUNDAY',
  Thursday = 'THURSDAY',
  Tuesday = 'TUESDAY',
  Wednesday = 'WEDNESDAY',
}

export type Dish = {
  __typename?: 'Dish';
  composition: Scalars['String'];
  dish_orders: Array<DishOrder>;
  fillings: Array<Filling>;
  id: Scalars['ID'];
  image: Scalars['String'];
  institution: Institution;
  name: Scalars['String'];
  price: Scalars['Float'];
  stock_price?: Maybe<Scalars['Float']>;
  stock_time?: Maybe<Scalars['DateTime']>;
  tags: Array<Tag>;
};

export type DishOrder = {
  __typename?: 'DishOrder';
  fillings: Array<Filling>;
  id: Scalars['ID'];
  price: Scalars['Int'];
  quality: Scalars['Int'];
};

export type DishRating = {
  __typename?: 'DishRating';
  id: Scalars['ID'];
  message: Scalars['String'];
  stars: Scalars['Int'];
  user: User;
};

export type DishesObject = {
  __typename?: 'DishesObject';
  count: Scalars['Int'];
  rows: Array<Dish>;
};

export type Filling = {
  __typename?: 'Filling';
  dishes: Array<Dish>;
  id: Scalars['ID'];
  image: Scalars['String'];
  name: Scalars['String'];
  price: Scalars['Float'];
  weight: Scalars['Float'];
};

export type GetDishCommentsInput = {
  dish_id: Scalars['ID'];
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};

export type GetDishesInput = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};

export type GetFillingsInput = {
  id: Scalars['ID'];
  limit?: InputMaybe<Scalars['Float']>;
  offset?: InputMaybe<Scalars['Float']>;
};

export type GetInstitutionsInput = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};

export type GetOrdersInput = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};

export type Institution = {
  __typename?: 'Institution';
  address: Scalars['String'];
  dishes?: Maybe<Array<Dish>>;
  extra_addresses?: Maybe<Array<InstitutionExtraAddress>>;
  fillings: Array<Filling>;
  free_delivery: Scalars['Int'];
  id: Scalars['ID'];
  image: Scalars['String'];
  name: Scalars['String'];
  pay_methods?: Maybe<Array<InstitutionPayMethod>>;
  shipping_cost: Scalars['Int'];
  tags: Array<Tag>;
  work_days?: Maybe<Array<WorkDay>>;
  work_from: Scalars['String'];
  work_to: Scalars['String'];
};

export type InstitutionExtraAddress = {
  __typename?: 'InstitutionExtraAddress';
  id: Scalars['ID'];
  latitude: Scalars['String'];
  longitude: Scalars['String'];
};

export type InstitutionOrder = {
  __typename?: 'InstitutionOrder';
  delivery: Scalars['Int'];
  dish_orders: Array<DishOrder>;
  id: Scalars['ID'];
  institution_id: Scalars['ID'];
  latitude: Scalars['String'];
  longitude: Scalars['String'];
  messages: Message;
  pay_method: InstitutionOrderPayMethods;
  rating: Scalars['Int'];
  status: Status;
  user: User;
};

export enum InstitutionOrderPayMethods {
  Cache = 'CACHE',
  Card = 'CARD',
  Online = 'ONLINE',
}

export type InstitutionPayMethod = {
  __typename?: 'InstitutionPayMethod';
  method: PayMethod;
};

export type InstitutionsObject = {
  __typename?: 'InstitutionsObject';
  count: Scalars['Int'];
  rows: Array<Institution>;
};

export type LoginInput = {
  code: Scalars['Float'];
  is_partner: Scalars['Boolean'];
  phone: Scalars['String'];
};

export type Message = {
  __typename?: 'Message';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  message: Scalars['String'];
  order_id: Scalars['ID'];
  user: User;
};

export type Mutation = {
  __typename?: 'Mutation';
  addDishComment: DishRating;
  addDishToFavorite: Scalars['Boolean'];
  addInstitutionElevation: Scalars['Boolean'];
  addInstitutionExtraAddress: InstitutionExtraAddress;
  addInstitutionToFavorite: Scalars['Boolean'];
  addUserExtraAddress: UserExtraAddress;
  changeOrderStatus: Scalars['Boolean'];
  createDish: Dish;
  createInstitution: Institution;
  createInstitutionFillings: Filling;
  createOrder: Scalars['Boolean'];
  createTag: Tag;
  removeDish: Dish;
  removeDishFromFavorite: Scalars['Boolean'];
  removeInstitution: Scalars['Boolean'];
  removeInstitutionExtraAddress: InstitutionExtraAddress;
  removeInstitutionFilling: Scalars['Boolean'];
  removeInstitutionFromFavorite: Scalars['Boolean'];
  removeUserExtraAddress: UserExtraAddress;
  sendCode: Scalars['Boolean'];
  sendMessage: Message;
  updateDish: Dish;
  updateInstitution: Institution;
  updateInstitutionExtraAddress: InstitutionExtraAddress;
  updateUser: User;
  updateUserExtraAddress: UserExtraAddress;
};

export type MutationAddDishCommentArgs = {
  data: AddDishCommentsInput;
};

export type MutationAddDishToFavoriteArgs = {
  dish_id: Scalars['ID'];
};

export type MutationAddInstitutionElevationArgs = {
  data: AddInstitutionElevation;
};

export type MutationAddInstitutionExtraAddressArgs = {
  data: CreateExtraAddressInput;
};

export type MutationAddInstitutionToFavoriteArgs = {
  institution_id: Scalars['ID'];
};

export type MutationAddUserExtraAddressArgs = {
  data: CreateExtraAddressInput;
};

export type MutationChangeOrderStatusArgs = {
  data: ChangeOrderStatusInput;
};

export type MutationCreateDishArgs = {
  data: CreateDishInput;
};

export type MutationCreateInstitutionArgs = {
  data: CreateInstitutionsInput;
};

export type MutationCreateInstitutionFillingsArgs = {
  data: CreateFillingInput;
};

export type MutationCreateOrderArgs = {
  data: CreateOrderInput;
};

export type MutationCreateTagArgs = {
  data: CreateTagInput;
};

export type MutationRemoveDishArgs = {
  id: Scalars['ID'];
};

export type MutationRemoveDishFromFavoriteArgs = {
  dish_id: Scalars['ID'];
};

export type MutationRemoveInstitutionExtraAddressArgs = {
  id: Scalars['ID'];
};

export type MutationRemoveInstitutionFillingArgs = {
  id: Scalars['ID'];
};

export type MutationRemoveInstitutionFromFavoriteArgs = {
  institution_id: Scalars['ID'];
};

export type MutationRemoveUserExtraAddressArgs = {
  id: Scalars['ID'];
};

export type MutationSendCodeArgs = {
  data: SendCodeInput;
};

export type MutationSendMessageArgs = {
  data: SendMessageInput;
};

export type MutationUpdateDishArgs = {
  data: UpdateDishInput;
};

export type MutationUpdateInstitutionArgs = {
  data: UpdateInstitutionsInput;
};

export type MutationUpdateInstitutionExtraAddressArgs = {
  data: UpdateExtraAddressInput;
};

export type MutationUpdateUserArgs = {
  data: UpdateUserInput;
};

export type MutationUpdateUserExtraAddressArgs = {
  data: UpdateExtraAddressInput;
};

export type Order = {
  dish_id: Scalars['Int'];
  filling_ids: Array<Scalars['Int']>;
  quality: Scalars['Int'];
};

/** pay methods */
export enum PayMethod {
  All = 'ALL',
  Cache = 'CACHE',
  Card = 'CARD',
  Online = 'ONLINE',
}

export type Query = {
  __typename?: 'Query';
  getCurrentUser: User;
  getDish: Dish;
  getDishComments: CommentsObject;
  getDishes: DishesObject;
  getFavoriteDishes: Array<Dish>;
  getFavoriteInstitutions: Array<Institution>;
  getInstitution: Institution;
  getInstitutionById: Institution;
  getInstitutionFillings: Array<Filling>;
  getInstitutions: InstitutionsObject;
  getOrderDialog?: Maybe<Array<Message>>;
  getOrders: Array<InstitutionOrder>;
  getTags: Array<Tag>;
  login: Token;
};

export type QueryGetDishArgs = {
  id: Scalars['ID'];
};

export type QueryGetDishCommentsArgs = {
  data: GetDishCommentsInput;
};

export type QueryGetDishesArgs = {
  data: GetDishesInput;
};

export type QueryGetInstitutionByIdArgs = {
  id: Scalars['ID'];
};

export type QueryGetInstitutionFillingsArgs = {
  data: GetFillingsInput;
};

export type QueryGetInstitutionsArgs = {
  data: GetInstitutionsInput;
};

export type QueryGetOrderDialogArgs = {
  id: Scalars['ID'];
};

export type QueryGetOrdersArgs = {
  data: GetOrdersInput;
};

export type QueryLoginArgs = {
  data: LoginInput;
};

export type SendCodeInput = {
  is_partner?: InputMaybe<Scalars['Boolean']>;
  phone: Scalars['String'];
};

export type SendMessageInput = {
  message: Scalars['String'];
  order_id: Scalars['ID'];
};

export enum Status {
  Accepted = 'ACCEPTED',
  Canceled = 'CANCELED',
  Completed = 'COMPLETED',
  Cooking = 'COOKING',
  InRoad = 'IN_ROAD',
  New = 'NEW',
}

export enum StockTime {
  OneDay = 'ONE_DAY',
  OneMouth = 'ONE_MOUTH',
  OneWeek = 'ONE_WEEK',
  TwoWeeks = 'TWO_WEEKS',
}

export type Subscription = {
  __typename?: 'Subscription';
  messageSent: Message;
};

export type Tag = {
  __typename?: 'Tag';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type Token = {
  __typename?: 'Token';
  access_token: Scalars['String'];
};

export type UpdateDishInput = {
  composition?: InputMaybe<Scalars['String']>;
  filling_ids?: InputMaybe<Array<Scalars['Int']>>;
  id: Scalars['ID'];
  image?: InputMaybe<Scalars['Upload']>;
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Float']>;
  stock_price?: InputMaybe<Scalars['Float']>;
  stock_time?: InputMaybe<StockTime>;
  tag_ids?: InputMaybe<Array<Scalars['Int']>>;
};

/** input for add extra address */
export type UpdateExtraAddressInput = {
  id: Scalars['ID'];
  latitude: Scalars['String'];
  longitude: Scalars['String'];
};

export type UpdateInstitutionsInput = {
  address?: InputMaybe<Scalars['String']>;
  free_delivery?: InputMaybe<Scalars['Float']>;
  image?: InputMaybe<Scalars['Upload']>;
  name?: InputMaybe<Scalars['String']>;
  pay_methods?: InputMaybe<Array<PayMethod>>;
  shipping_cost?: InputMaybe<Scalars['Float']>;
  /** Tags ids */
  tags?: InputMaybe<Array<Scalars['Int']>>;
  work_days?: InputMaybe<Array<Day>>;
  work_from?: InputMaybe<Scalars['String']>;
  work_to?: InputMaybe<Scalars['String']>;
};

/** input for update user */
export type UpdateUserInput = {
  image?: InputMaybe<Scalars['Upload']>;
  name?: InputMaybe<Scalars['String']>;
  notification?: InputMaybe<Scalars['Boolean']>;
  pay_methods?: InputMaybe<Array<UserPayMethod>>;
  position?: InputMaybe<Scalars['Boolean']>;
};

export type User = {
  __typename?: 'User';
  extra_addresses?: Maybe<Array<UserExtraAddress>>;
  id: Scalars['ID'];
  image: Scalars['String'];
  institution: Institution;
  is_new: Scalars['Boolean'];
  name: Scalars['String'];
  notification: Scalars['Boolean'];
  orders: Array<InstitutionOrder>;
  pay_methods: Array<UserPay>;
  phone_number: Scalars['Int'];
  position: Scalars['Boolean'];
};

export type UserExtraAddress = {
  __typename?: 'UserExtraAddress';
  id: Scalars['ID'];
  latitude: Scalars['String'];
  longitude: Scalars['String'];
};

export type UserPay = {
  __typename?: 'UserPay';
  method: UserPayMethod;
};

/** pay methods */
export enum UserPayMethod {
  Cache = 'CACHE',
  Card = 'CARD',
  Online = 'ONLINE',
}

export type WorkDay = {
  __typename?: 'WorkDay';
  day: Day;
};

export type SendCodeMutationVariables = Exact<{
  data: SendCodeInput;
}>;

export type SendCodeMutation = { __typename?: 'Mutation'; sendCode: boolean };

export type SendMessageMutationVariables = Exact<{
  data: SendMessageInput;
}>;

export type SendMessageMutation = {
  __typename?: 'Mutation';
  sendMessage: {
    __typename?: 'Message';
    id: string;
    order_id: string;
    createdAt: any;
    message: string;
  };
};

export type UpdateUserMutationVariables = Exact<{
  data: UpdateUserInput;
}>;

export type UpdateUserMutation = {
  __typename?: 'Mutation';
  updateUser: { __typename?: 'User'; id: string; phone_number: number; name: string };
};

export type GetCurrentUserQueryVariables = Exact<{ [key: string]: never }>;

export type GetCurrentUserQuery = {
  __typename?: 'Query';
  getCurrentUser: {
    __typename?: 'User';
    id: string;
    phone_number: number;
    name: string;
    image: string;
    notification: boolean;
    position: boolean;
    is_new: boolean;
    orders: Array<{
      __typename?: 'InstitutionOrder';
      id: string;
      institution_id: string;
      status: Status;
      rating: number;
      delivery: number;
      latitude: string;
      longitude: string;
    }>;
    pay_methods: Array<{ __typename?: 'UserPay'; method: UserPayMethod }>;
    institution: {
      __typename?: 'Institution';
      id: string;
      name: string;
      work_from: string;
      work_to: string;
      address: string;
      free_delivery: number;
      dishes?: Array<{
        __typename?: 'Dish';
        id: string;
        name: string;
        price: number;
      }> | null;
      fillings: Array<{
        __typename?: 'Filling';
        id: string;
        name: string;
        price: number;
        weight: number;
      }>;
    };
  };
};

export type LoginQueryVariables = Exact<{
  data: LoginInput;
}>;

export type LoginQuery = {
  __typename?: 'Query';
  login: { __typename?: 'Token'; access_token: string };
};

export type MessageSentSubscriptionVariables = Exact<{ [key: string]: never }>;

export type MessageSentSubscription = {
  __typename?: 'Subscription';
  messageSent: { __typename?: 'Message'; id: string; message: string; order_id: string };
};

export const SendCodeDocument = gql`
  mutation sendCode($data: SendCodeInput!) {
    sendCode(data: $data)
  }
`;
export type SendCodeMutationFn = Apollo.MutationFunction<
  SendCodeMutation,
  SendCodeMutationVariables
>;

/**
 * __useSendCodeMutation__
 *
 * To run a mutation, you first call `useSendCodeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSendCodeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sendCodeMutation, { data, loading, error }] = useSendCodeMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useSendCodeMutation(
  baseOptions?: Apollo.MutationHookOptions<SendCodeMutation, SendCodeMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<SendCodeMutation, SendCodeMutationVariables>(
    SendCodeDocument,
    options,
  );
}
export type SendCodeMutationHookResult = ReturnType<typeof useSendCodeMutation>;
export type SendCodeMutationResult = Apollo.MutationResult<SendCodeMutation>;
export type SendCodeMutationOptions = Apollo.BaseMutationOptions<
  SendCodeMutation,
  SendCodeMutationVariables
>;
export const SendMessageDocument = gql`
  mutation sendMessage($data: SendMessageInput!) {
    sendMessage(data: $data) {
      id
      order_id
      createdAt
      message
    }
  }
`;
export type SendMessageMutationFn = Apollo.MutationFunction<
  SendMessageMutation,
  SendMessageMutationVariables
>;

/**
 * __useSendMessageMutation__
 *
 * To run a mutation, you first call `useSendMessageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSendMessageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sendMessageMutation, { data, loading, error }] = useSendMessageMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useSendMessageMutation(
  baseOptions?: Apollo.MutationHookOptions<
    SendMessageMutation,
    SendMessageMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<SendMessageMutation, SendMessageMutationVariables>(
    SendMessageDocument,
    options,
  );
}
export type SendMessageMutationHookResult = ReturnType<typeof useSendMessageMutation>;
export type SendMessageMutationResult = Apollo.MutationResult<SendMessageMutation>;
export type SendMessageMutationOptions = Apollo.BaseMutationOptions<
  SendMessageMutation,
  SendMessageMutationVariables
>;
export const UpdateUserDocument = gql`
  mutation updateUser($data: UpdateUserInput!) {
    updateUser(data: $data) {
      id
      phone_number
      name
    }
  }
`;
export type UpdateUserMutationFn = Apollo.MutationFunction<
  UpdateUserMutation,
  UpdateUserMutationVariables
>;

/**
 * __useUpdateUserMutation__
 *
 * To run a mutation, you first call `useUpdateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserMutation, { data, loading, error }] = useUpdateUserMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateUserMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateUserMutation,
    UpdateUserMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(
    UpdateUserDocument,
    options,
  );
}
export type UpdateUserMutationHookResult = ReturnType<typeof useUpdateUserMutation>;
export type UpdateUserMutationResult = Apollo.MutationResult<UpdateUserMutation>;
export type UpdateUserMutationOptions = Apollo.BaseMutationOptions<
  UpdateUserMutation,
  UpdateUserMutationVariables
>;
export const GetCurrentUserDocument = gql`
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

/**
 * __useGetCurrentUserQuery__
 *
 * To run a query within a React component, call `useGetCurrentUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCurrentUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCurrentUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCurrentUserQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetCurrentUserQuery,
    GetCurrentUserQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetCurrentUserQuery, GetCurrentUserQueryVariables>(
    GetCurrentUserDocument,
    options,
  );
}
export function useGetCurrentUserLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetCurrentUserQuery,
    GetCurrentUserQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetCurrentUserQuery, GetCurrentUserQueryVariables>(
    GetCurrentUserDocument,
    options,
  );
}
export type GetCurrentUserQueryHookResult = ReturnType<typeof useGetCurrentUserQuery>;
export type GetCurrentUserLazyQueryHookResult = ReturnType<
  typeof useGetCurrentUserLazyQuery
>;
export type GetCurrentUserQueryResult = Apollo.QueryResult<
  GetCurrentUserQuery,
  GetCurrentUserQueryVariables
>;
export const LoginDocument = gql`
  query login($data: LoginInput!) {
    login(data: $data) {
      access_token
    }
  }
`;

/**
 * __useLoginQuery__
 *
 * To run a query within a React component, call `useLoginQuery` and pass it any options that fit your needs.
 * When your component renders, `useLoginQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLoginQuery({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useLoginQuery(
  baseOptions: Apollo.QueryHookOptions<LoginQuery, LoginQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<LoginQuery, LoginQueryVariables>(LoginDocument, options);
}
export function useLoginLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<LoginQuery, LoginQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<LoginQuery, LoginQueryVariables>(LoginDocument, options);
}
export type LoginQueryHookResult = ReturnType<typeof useLoginQuery>;
export type LoginLazyQueryHookResult = ReturnType<typeof useLoginLazyQuery>;
export type LoginQueryResult = Apollo.QueryResult<LoginQuery, LoginQueryVariables>;
export const MessageSentDocument = gql`
  subscription messageSent {
    messageSent {
      id
      message
      order_id
    }
  }
`;

/**
 * __useMessageSentSubscription__
 *
 * To run a query within a React component, call `useMessageSentSubscription` and pass it any options that fit your needs.
 * When your component renders, `useMessageSentSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMessageSentSubscription({
 *   variables: {
 *   },
 * });
 */
export function useMessageSentSubscription(
  baseOptions?: Apollo.SubscriptionHookOptions<
    MessageSentSubscription,
    MessageSentSubscriptionVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSubscription<
    MessageSentSubscription,
    MessageSentSubscriptionVariables
  >(MessageSentDocument, options);
}
export type MessageSentSubscriptionHookResult = ReturnType<
  typeof useMessageSentSubscription
>;
export type MessageSentSubscriptionResult =
  Apollo.SubscriptionResult<MessageSentSubscription>;
