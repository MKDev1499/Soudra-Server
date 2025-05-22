const {
  registerUser,
  loginUser,
} = require("../../../controllers/auth.controller");

const AuthResolvers = {
  Query: {},
  Mutation: {
    register: (_, { userData }) => registerUser(userData),
    login: (_, { userData }) => loginUser(userData),
    googleLogin: (_, { userData }) => {
      return socialLogin(userData);
    },
  },
};

module.exports = AuthResolvers;
