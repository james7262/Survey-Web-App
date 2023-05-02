import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerQuestion = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Question, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly text: string;
  readonly surveyName?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyQuestion = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Question, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly text: string;
  readonly surveyName?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Question = LazyLoading extends LazyLoadingDisabled ? EagerQuestion : LazyQuestion

export declare const Question: (new (init: ModelInit<Question>) => Question) & {
  copyOf(source: Question, mutator: (draft: MutableModel<Question>) => MutableModel<Question> | void): Question;
}

type EagerRespondent = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Respondent, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly emailAddress: string;
  readonly surveyName?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyRespondent = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Respondent, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly emailAddress: string;
  readonly surveyName?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Respondent = LazyLoading extends LazyLoadingDisabled ? EagerRespondent : LazyRespondent

export declare const Respondent: (new (init: ModelInit<Respondent>) => Respondent) & {
  copyOf(source: Respondent, mutator: (draft: MutableModel<Respondent>) => MutableModel<Respondent> | void): Respondent;
}

type EagerSurvey = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Survey, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly adminSub?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazySurvey = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Survey, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly adminSub?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Survey = LazyLoading extends LazyLoadingDisabled ? EagerSurvey : LazySurvey

export declare const Survey: (new (init: ModelInit<Survey>) => Survey) & {
  copyOf(source: Survey, mutator: (draft: MutableModel<Survey>) => MutableModel<Survey> | void): Survey;
}