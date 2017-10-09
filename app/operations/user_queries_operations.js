import UserService from '../service/user_service';

export default {
  removeUser: UserService.remove(),
  findUser: UserService.find()
};
