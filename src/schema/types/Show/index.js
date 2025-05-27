const { gql } = require("graphql-tag");

const ShowType = gql`
  type Show {
    id: ID!
    nameEn: String
    nameAr: String!
    img: String
    descriptionEn: String
    descriptionAr: String
    staring: Actor
    actors: [Actor]
    episodes: [Episode]
    rate: Int
    noOfListens: Int
    likes: Int
    dislikes: Int
    isCompleted: Boolean
    releaseYear: String
    createdAt: String
  }
`;

module.exports = ShowType;
