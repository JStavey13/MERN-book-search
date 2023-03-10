const { AuthenticationError } = require("apollo-server-express");
const { User } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      // find current user and return userData
    },
  },

  Mutation: {
    addUser: async (parent, args) => {
      // create new user, sign token, return token and user data
    },
    login: async (parent, args) => {
      // find user, check password, sign token, return token and user data
    },
    saveBook: async (parent, args, context) => {
      // protect route, find current user, update their savedBooks array, return user data
    },
    removeBook: async (parent, args, context) => {
      // protect route, find current user, update their savedBooks array, return user data
    },
  },
};

module.exports = resolvers;
