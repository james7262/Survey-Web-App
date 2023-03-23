import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerRespondents = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Respondents, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly emailAddress: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyRespondents = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Respondents, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly emailAddress: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Respondents = LazyLoading extends LazyLoadingDisabled ? EagerRespondents : LazyRespondents

export declare const Respondents: (new (init: ModelInit<Respondents>) => Respondents) & {
  copyOf(source: Respondents, mutator: (draft: MutableModel<Respondents>) => MutableModel<Respondents> | void): Respondents;
}

type EagerSurvey = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Survey, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly SurveyNam: string;
  readonly NumberOfQuestions: number;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazySurvey = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Survey, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly SurveyNam: string;
  readonly NumberOfQuestions: number;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Survey = LazyLoading extends LazyLoadingDisabled ? EagerSurvey : LazySurvey

export declare const Survey: (new (init: ModelInit<Survey>) => Survey) & {
  copyOf(source: Survey, mutator: (draft: MutableModel<Survey>) => MutableModel<Survey> | void): Survey;
}