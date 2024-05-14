// Import necessary functions and types from Apollo Client
import { gql, DocumentNode, useQuery } from '@apollo/client';

// Definition of the GraphQL query to fetch movies data
const GET_FILMS: DocumentNode = gql`
  query {
    allFilms {
      films {
        title
        director
        releaseDate
        speciesConnection {
          species {
            name
            classification
            homeworld {
              name
            }
          }
        }
      }
    }
  }
`;

// Custom function to execute the GraphQL query and manage its state
const useFilmsQuery = () => {
  // Execute the GraphQL query using Apollo Client's useQuery
  return useQuery(GET_FILMS);
};

// Export the useFilmsQuery function for use in other components
export default useFilmsQuery;
