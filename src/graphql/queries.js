/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getWish = /* GraphQL */ `
  query GetWish($id: ID!) {
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
`;
export const listWishes = /* GraphQL */ `
  query ListWishes(
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
`;
