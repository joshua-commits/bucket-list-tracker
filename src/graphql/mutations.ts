// /* tslint:disable */
// /* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createWish = /* GraphQL */ `mutation CreateWish(
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
` as GeneratedMutation<
  APITypes.CreateWishMutationVariables,
  APITypes.CreateWishMutation
>;
export const updateWish = /* GraphQL */ `mutation UpdateWish(
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
` as GeneratedMutation<
  APITypes.UpdateWishMutationVariables,
  APITypes.UpdateWishMutation
>;
export const deleteWish = /* GraphQL */ `mutation DeleteWish(
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
` as GeneratedMutation<
  APITypes.DeleteWishMutationVariables,
  APITypes.DeleteWishMutation
>;
