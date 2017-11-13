import {
  GraphQLList,
  GraphQLID,
  GraphQLNonNull,
  GraphQLBoolean,
  GraphQLString
} from 'graphql';

import UserType from "../type/user_type.js";
import UserInput from "../input/user_input.js";
import UserModel from "../model/user_model.js";
import {Types} from 'mongoose';

class UserService {

  static find() {
    return {
      type: new GraphQLList(UserType),
      args: {
        data: {
          name: 'data',
          type: UserInput
        }
      },
      async resolve (root, params, options) {
        return UserModel
          .find(params.data)
          .exec();
      }
    }
  }

  static remove() {
    return {
      type: GraphQLBoolean,
      args: {
        data: {
          name: 'data',
          type: new GraphQLNonNull(UserInput)
        }
      },
      async resolve (root, params, options) {
        const userModel = new UserModel(params.data);
        const newUserModel = await userModel.save();

        if (!newUserModel) {
          throw new Error('Error adding new user');
        }
        return true;
      }
    }
  }

  static insert() {
    return {
      type: GraphQLBoolean,
      args: {
        data: {
          name: 'data',
          type: new GraphQLNonNull(UserInput)
        }
      },
      async resolve (root, params, options) {
        const userModel = new UserModel(params.data);
        const newUserModel = await userModel.save();

        if (!newUserModel) {
          throw new Error('Error adding new user');
        }
        return true;
      }
    }
  }

}

export default UserService;

