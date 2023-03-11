const { AuthenticationError } = require("apollo-server-express");
const { User } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      // find current user and return userData
      if (context.user) {
        const userData = await user.findOne({ _id: context.user._id}).select("-__v -password")
        return userData
      }
      throw new AuthenticationError("not logged in!")
    },
  },

  Mutation: {
    addUser: async (parent, args) => {
      // create new user, sign token, return token and user data
      const user = await User.create({ username: args.username, email: args.email, password: args.password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, args) => {
      // find user, check password, sign token, return token and user data
      const user = await User.findOne({ email: args.email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(  args.password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    // saveBook: async (parent, args, context) => {
    //   // protect route, find current user, update their savedBooks array, return user data
    // },
    // removeBook: async (parent, args, context) => {
    //   // protect route, find current user, update their savedBooks array, return user data
    // },
  },
};

module.exports = resolvers;
