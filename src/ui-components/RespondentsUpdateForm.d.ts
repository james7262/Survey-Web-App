/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Respondents } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type RespondentsUpdateFormInputValues = {
    firstName?: string;
    lastName?: string;
    emailAddress?: string;
};
export declare type RespondentsUpdateFormValidationValues = {
    firstName?: ValidationFunction<string>;
    lastName?: ValidationFunction<string>;
    emailAddress?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RespondentsUpdateFormOverridesProps = {
    RespondentsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    firstName?: PrimitiveOverrideProps<TextFieldProps>;
    lastName?: PrimitiveOverrideProps<TextFieldProps>;
    emailAddress?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type RespondentsUpdateFormProps = React.PropsWithChildren<{
    overrides?: RespondentsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    respondents?: Respondents;
    onSubmit?: (fields: RespondentsUpdateFormInputValues) => RespondentsUpdateFormInputValues;
    onSuccess?: (fields: RespondentsUpdateFormInputValues) => void;
    onError?: (fields: RespondentsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: RespondentsUpdateFormInputValues) => RespondentsUpdateFormInputValues;
    onValidate?: RespondentsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function RespondentsUpdateForm(props: RespondentsUpdateFormProps): React.ReactElement;
