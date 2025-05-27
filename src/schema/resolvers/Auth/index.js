const {
  registerUser,
  loginUser,
  socialLogin,
  listUsers,
  getUserById,
} = require("../../../controllers/auth.controller");

const AuthResolvers = {
  Query: {
    users: listUsers,
    user: (_, { userID }) => getUserById(userID),
  },
  Mutation: {
    register: (_, { userData }) => registerUser(userData),
    login: (_, { userData }) => loginUser(userData),
    googleLogin: (_, { userData }) => socialLogin(userData),
  },
};

module.exports = AuthResolvers;
