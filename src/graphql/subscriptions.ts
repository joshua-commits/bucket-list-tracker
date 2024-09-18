/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateWish = /* GraphQL */ `subscription OnCreateWish($filter: ModelSubscriptionWishFilterInput) {
  onCreateWish(filter: $filter) {
    id
    name
    description
    imagePath
    completed
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateWishSubscriptionVariables,
  APITypes.OnCreateWishSubscription
>;
export const onUpdateWish = /* GraphQL */ `subscription OnUpdateWish($filter: ModelSubscriptionWishFilterInput) {
  onUpdateWish(filter: $filter) {
    id
    name
    description
    imagePath
    completed
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateWishSubscriptionVariables,
  APITypes.OnUpdateWishSubscription
>;
export const onDeleteWish = /* GraphQL */ `subscription OnDeleteWish($filter: ModelSubscriptionWishFilterInput) {
  onDeleteWish(filter: $filter) {
    id
    name
    description
    imagePath
    completed
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteWishSubscriptionVariables,
  APITypes.OnDeleteWishSubscription
>;
