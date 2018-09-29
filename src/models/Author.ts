import { Model, model, Schema } from 'mongoose';
import { IDefaultModel } from '../interfaces/';

export interface IAuthorModel extends IDefaultModel {
  name: string;
  bio: string;
}

export const AuthorSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: false,
      maxlength: 60,
      minlength: 2
    },
    bio: {
      type: String,
      required: false,
      maxlength: 1000,
      minlength: 2
    },
    createdBy: String,
    modifiedBy: String
  },
  {
    timestamps: true
  }
);

export default model<IAuthorModel>('Author', AuthorSchema) as Model<IAuthorModel>;
