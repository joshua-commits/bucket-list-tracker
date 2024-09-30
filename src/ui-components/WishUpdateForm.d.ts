/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Wish } from "../graphql/API.ts";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type WishUpdateFormInputValues = {
    name?: string;
    description?: string;
    imagePath?: string;
    completed?: boolean;
};
export declare type WishUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    imagePath?: ValidationFunction<string>;
    completed?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type WishUpdateFormOverridesProps = {
    WishUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    imagePath?: PrimitiveOverrideProps<TextFieldProps>;
    completed?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type WishUpdateFormProps = React.PropsWithChildren<{
    overrides?: WishUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    wish?: Wish;
    onSubmit?: (fields: WishUpdateFormInputValues) => WishUpdateFormInputValues;
    onSuccess?: (fields: WishUpdateFormInputValues) => void;
    onError?: (fields: WishUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: WishUpdateFormInputValues) => WishUpdateFormInputValues;
    onValidate?: WishUpdateFormValidationValues;
} & React.CSSProperties>;
export default function WishUpdateForm(props: WishUpdateFormProps): React.ReactElement;
