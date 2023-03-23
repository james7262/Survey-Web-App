/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Survey } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function SurveyCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    SurveyNam: "",
    NumberOfQuestions: "",
  };
  const [SurveyNam, setSurveyNam] = React.useState(initialValues.SurveyNam);
  const [NumberOfQuestions, setNumberOfQuestions] = React.useState(
    initialValues.NumberOfQuestions
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setSurveyNam(initialValues.SurveyNam);
    setNumberOfQuestions(initialValues.NumberOfQuestions);
    setErrors({});
  };
  const validations = {
    SurveyNam: [{ type: "Required" }],
    NumberOfQuestions: [{ type: "Required" }],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value = getDisplayValue
      ? getDisplayValue(currentValue)
      : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          SurveyNam,
          NumberOfQuestions,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(new Survey(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "SurveyCreateForm")}
      {...rest}
    >
      <TextField
        label="Survey nam"
        isRequired={true}
        isReadOnly={false}
        value={SurveyNam}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              SurveyNam: value,
              NumberOfQuestions,
            };
            const result = onChange(modelFields);
            value = result?.SurveyNam ?? value;
          }
          if (errors.SurveyNam?.hasError) {
            runValidationTasks("SurveyNam", value);
          }
          setSurveyNam(value);
        }}
        onBlur={() => runValidationTasks("SurveyNam", SurveyNam)}
        errorMessage={errors.SurveyNam?.errorMessage}
        hasError={errors.SurveyNam?.hasError}
        {...getOverrideProps(overrides, "SurveyNam")}
      ></TextField>
      <TextField
        label="Number of questions"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={NumberOfQuestions}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              SurveyNam,
              NumberOfQuestions: value,
            };
            const result = onChange(modelFields);
            value = result?.NumberOfQuestions ?? value;
          }
          if (errors.NumberOfQuestions?.hasError) {
            runValidationTasks("NumberOfQuestions", value);
          }
          setNumberOfQuestions(value);
        }}
        onBlur={() =>
          runValidationTasks("NumberOfQuestions", NumberOfQuestions)
        }
        errorMessage={errors.NumberOfQuestions?.errorMessage}
        hasError={errors.NumberOfQuestions?.hasError}
        {...getOverrideProps(overrides, "NumberOfQuestions")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
