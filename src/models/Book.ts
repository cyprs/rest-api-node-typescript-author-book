import { Model, model, Schema } from 'mongoose';
import { IDefaultModel } from '../interfaces/';

export interface IBookModel extends IDefaultModel {
  author_id: string;
  title: string;
  category: string;
  year: number;
  lang: number;
  date: Date;
}

export const BookSchema: Schema = new Schema({
  author_id: Schema.Types.ObjectId,
  title: {
    type: String,
    required: true,
    maxlength: 150,
    minlength: 1
  },
  category: {
    type: String,
    required: true,
    maxlength: 50,
    minlength: 1
  },
  year: {
    type: Number,
    required: true
  },
  lang: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

export default model<IBookModel>('Book', BookSchema) as Model<IBookModel>;
