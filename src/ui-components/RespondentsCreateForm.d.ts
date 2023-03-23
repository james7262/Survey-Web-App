/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type RespondentsCreateFormInputValues = {
    firstName?: string;
    lastName?: string;
    emailAddress?: string;
};
export declare type RespondentsCreateFormValidationValues = {
    firstName?: ValidationFunction<string>;
    lastName?: ValidationFunction<string>;
    emailAddress?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RespondentsCreateFormOverridesProps = {
    RespondentsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    firstName?: PrimitiveOverrideProps<TextFieldProps>;
    lastName?: PrimitiveOverrideProps<TextFieldProps>;
    emailAddress?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type RespondentsCreateFormProps = React.PropsWithChildren<{
    overrides?: RespondentsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: RespondentsCreateFormInputValues) => RespondentsCreateFormInputValues;
    onSuccess?: (fields: RespondentsCreateFormInputValues) => void;
    onError?: (fields: RespondentsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: RespondentsCreateFormInputValues) => RespondentsCreateFormInputValues;
    onValidate?: RespondentsCreateFormValidationValues;
} & React.CSSProperties>;
export default function RespondentsCreateForm(props: RespondentsCreateFormProps): React.ReactElement;
