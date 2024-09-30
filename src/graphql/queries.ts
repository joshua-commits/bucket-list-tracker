/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getWish = /* GraphQL */ `query GetWish($id: ID!) {
  getWish(id: $id) {
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
` as GeneratedQuery<APITypes.GetWishQueryVariables, APITypes.GetWishQuery>;
export const listWishes = /* GraphQL */ `query ListWishes(
  $filter: ModelWishFilterInput
  $limit: Int
  $nextToken: String
) {
  listWishes(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      description
      imagePath
      completed
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListWishesQueryVariables,
  APITypes.ListWishesQuery
>;
