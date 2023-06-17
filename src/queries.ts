import { gql } from "@apollo/client";

const episodeDataQuery = gql`
  query ($id: ID!) {
    episode(id: $id) {
      id
      episode
      characters {
        id
        name
        image
        status
        created
        gender
        location {
          name
          created
        }
      }
    }
  }
`;

export default episodeDataQuery;
