import gql from 'graphql-tag';

export const QUERY_ME = gql`
  query me {
    me {
      username
      _id
      email
      bookCount
      savedBooks {
        bookId
        authors
        description
        image
        link
        title
      }
    }
  }
`;