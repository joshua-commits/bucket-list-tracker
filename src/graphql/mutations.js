/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createWish = /* GraphQL */ `
  mutation CreateWish(
    $input: CreateWishInput!
    $condition: ModelWishConditionInput
  ) {
    createWish(input: $input, condition: $condition) {
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
export const updateWish = /* GraphQL */ `
  mutation UpdateWish(
    $input: UpdateWishInput!
    $condition: ModelWishConditionInput
  ) {
    updateWish(input: $input, condition: $condition) {
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
export const deleteWish = /* GraphQL */ `
  mutation DeleteWish(
    $input: DeleteWishInput!
    $condition: ModelWishConditionInput
  ) {
    deleteWish(input: $input, condition: $condition) {
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
