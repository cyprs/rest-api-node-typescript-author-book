import { Author, IAuthorModel } from '../../models';

const createNewAuthor = (model: IAuthorModel | any = {}): Promise<any> => {
  const newAuthor = new Author(model);
  // newAuthor._id = crypto
  //   .createHash('md5')
  //   .update(`${newAuthor.name}`)
  //   .digest('hex');

  newAuthor.name = 'namex';
  newAuthor.bio = 'biox';
  newAuthor.createdBy = '123';
  newAuthor.modifiedBy = '123';
  return newAuthor.save();
};

export default {
  create: createNewAuthor
};
