/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Respondent } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type RespondentUpdateFormInputValues = {
    firstName?: string;
    lastName?: string;
    emailAddress?: string;
    surveyName?: string;
};
export declare type RespondentUpdateFormValidationValues = {
    firstName?: ValidationFunction<string>;
    lastName?: ValidationFunction<string>;
    emailAddress?: ValidationFunction<string>;
    surveyName?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RespondentUpdateFormOverridesProps = {
    RespondentUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    firstName?: PrimitiveOverrideProps<TextFieldProps>;
    lastName?: PrimitiveOverrideProps<TextFieldProps>;
    emailAddress?: PrimitiveOverrideProps<TextFieldProps>;
    surveyName?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type RespondentUpdateFormProps = React.PropsWithChildren<{
    overrides?: RespondentUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    respondent?: Respondent;
    onSubmit?: (fields: RespondentUpdateFormInputValues) => RespondentUpdateFormInputValues;
    onSuccess?: (fields: RespondentUpdateFormInputValues) => void;
    onError?: (fields: RespondentUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: RespondentUpdateFormInputValues) => RespondentUpdateFormInputValues;
    onValidate?: RespondentUpdateFormValidationValues;
} & React.CSSProperties>;
export default function RespondentUpdateForm(props: RespondentUpdateFormProps): React.ReactElement;
