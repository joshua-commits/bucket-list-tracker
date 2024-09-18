// /* tslint:disable */
// /* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateWishInput = {
  id?: string | null,
  name: string,
  description?: string | null,
  imagePath?: string | null,
  completed: boolean,
};

export type ModelWishConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  imagePath?: ModelStringInput | null,
  completed?: ModelBooleanInput | null,
  and?: Array< ModelWishConditionInput | null > | null,
  or?: Array< ModelWishConditionInput | null > | null,
  not?: ModelWishConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Wish = {
  __typename: "Wish",
  id: string,
  name: string,
  description?: string | null,
  imagePath?: string | null,
  completed: boolean,
  createdAt: string,
  updatedAt: string,
};

export type UpdateWishInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  imagePath?: string | null,
  completed?: boolean | null,
};

export type DeleteWishInput = {
  id: string,
};

export type ModelWishFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  imagePath?: ModelStringInput | null,
  completed?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelWishFilterInput | null > | null,
  or?: Array< ModelWishFilterInput | null > | null,
  not?: ModelWishFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelWishConnection = {
  __typename: "ModelWishConnection",
  items:  Array<Wish | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionWishFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  imagePath?: ModelSubscriptionStringInput | null,
  completed?: ModelSubscriptionBooleanInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionWishFilterInput | null > | null,
  or?: Array< ModelSubscriptionWishFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type CreateWishMutationVariables = {
  input: CreateWishInput,
  condition?: ModelWishConditionInput | null,
};

export type CreateWishMutation = {
  createWish?:  {
    __typename: "Wish",
    id: string,
    name: string,
    description?: string | null,
    imagePath?: string | null,
    completed: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateWishMutationVariables = {
  input: UpdateWishInput,
  condition?: ModelWishConditionInput | null,
};

export type UpdateWishMutation = {
  updateWish?:  {
    __typename: "Wish",
    id: string,
    name: string,
    description?: string | null,
    imagePath?: string | null,
    completed: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteWishMutationVariables = {
  input: DeleteWishInput,
  condition?: ModelWishConditionInput | null,
};

export type DeleteWishMutation = {
  deleteWish?:  {
    __typename: "Wish",
    id: string,
    name: string,
    description?: string | null,
    imagePath?: string | null,
    completed: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetWishQueryVariables = {
  id: string,
};

export type GetWishQuery = {
  getWish?:  {
    __typename: "Wish",
    id: string,
    name: string,
    description?: string | null,
    imagePath?: string | null,
    completed: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListWishesQueryVariables = {
  filter?: ModelWishFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListWishesQuery = {
  listWishes?:  {
    __typename: "ModelWishConnection",
    items:  Array< {
      __typename: "Wish",
      id: string,
      name: string,
      description?: string | null,
      imagePath?: string | null,
      completed: boolean,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateWishSubscriptionVariables = {
  filter?: ModelSubscriptionWishFilterInput | null,
};

export type OnCreateWishSubscription = {
  onCreateWish?:  {
    __typename: "Wish",
    id: string,
    name: string,
    description?: string | null,
    imagePath?: string | null,
    completed: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateWishSubscriptionVariables = {
  filter?: ModelSubscriptionWishFilterInput | null,
};

export type OnUpdateWishSubscription = {
  onUpdateWish?:  {
    __typename: "Wish",
    id: string,
    name: string,
    description?: string | null,
    imagePath?: string | null,
    completed: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteWishSubscriptionVariables = {
  filter?: ModelSubscriptionWishFilterInput | null,
};

export type OnDeleteWishSubscription = {
  onDeleteWish?:  {
    __typename: "Wish",
    id: string,
    name: string,
    description?: string | null,
    imagePath?: string | null,
    completed: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};
