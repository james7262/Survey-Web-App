// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Question, Respondent, Survey } = initSchema(schema);

export {
  Question,
  Respondent,
  Survey
};