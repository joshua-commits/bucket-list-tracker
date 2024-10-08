/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type WishCreateFormInputValues = {
    name?: string;
    description?: string;
    imagePath?: string;
    completed?: boolean;
};
export declare type WishCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    imagePath?: ValidationFunction<string>;
    completed?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type WishCreateFormOverridesProps = {
    WishCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    imagePath?: PrimitiveOverrideProps<TextFieldProps>;
    completed?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type WishCreateFormProps = React.PropsWithChildren<{
    overrides?: WishCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: WishCreateFormInputValues) => WishCreateFormInputValues;
    onSuccess?: (fields: WishCreateFormInputValues) => void;
    onError?: (fields: WishCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: WishCreateFormInputValues) => WishCreateFormInputValues;
    onValidate?: WishCreateFormValidationValues;
} & React.CSSProperties>;
export default function WishCreateForm(props: WishCreateFormProps): React.ReactElement;
