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
export declare type RespondentCreateFormInputValues = {
    firstName?: string;
    lastName?: string;
    emailAddress?: string;
    surveyName?: string;
};
export declare type RespondentCreateFormValidationValues = {
    firstName?: ValidationFunction<string>;
    lastName?: ValidationFunction<string>;
    emailAddress?: ValidationFunction<string>;
    surveyName?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RespondentCreateFormOverridesProps = {
    RespondentCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    firstName?: PrimitiveOverrideProps<TextFieldProps>;
    lastName?: PrimitiveOverrideProps<TextFieldProps>;
    emailAddress?: PrimitiveOverrideProps<TextFieldProps>;
    surveyName?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type RespondentCreateFormProps = React.PropsWithChildren<{
    overrides?: RespondentCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: RespondentCreateFormInputValues) => RespondentCreateFormInputValues;
    onSuccess?: (fields: RespondentCreateFormInputValues) => void;
    onError?: (fields: RespondentCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: RespondentCreateFormInputValues) => RespondentCreateFormInputValues;
    onValidate?: RespondentCreateFormValidationValues;
} & React.CSSProperties>;
export default function RespondentCreateForm(props: RespondentCreateFormProps): React.ReactElement;
