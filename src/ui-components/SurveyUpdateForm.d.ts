/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Survey } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type SurveyUpdateFormInputValues = {
    name?: string;
    adminSub?: string;
};
export declare type SurveyUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    adminSub?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SurveyUpdateFormOverridesProps = {
    SurveyUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    adminSub?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SurveyUpdateFormProps = React.PropsWithChildren<{
    overrides?: SurveyUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    survey?: Survey;
    onSubmit?: (fields: SurveyUpdateFormInputValues) => SurveyUpdateFormInputValues;
    onSuccess?: (fields: SurveyUpdateFormInputValues) => void;
    onError?: (fields: SurveyUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SurveyUpdateFormInputValues) => SurveyUpdateFormInputValues;
    onValidate?: SurveyUpdateFormValidationValues;
} & React.CSSProperties>;
export default function SurveyUpdateForm(props: SurveyUpdateFormProps): React.ReactElement;
