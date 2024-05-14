import ReactDOM from 'react-dom/client'; // Import ReactDOM for rendering
import App from './App.tsx'; // Import the root component of the application
import './index.css'; // Import CSS styles
import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache } from "@apollo/client"; // Import Apollo Client dependencies

// Create a new Apollo Client instance
const client = new ApolloClient({
  // Define the HTTP link for the GraphQL endpoint
  link: new HttpLink({
    uri: 'https://swapi-graphql.netlify.app/.netlify/functions/index', // URI for the GraphQL endpoint
  }),
  // Initialize an in-memory cache
  cache: new InMemoryCache(),
});

// Render the root component of the application
ReactDOM.createRoot(document.getElementById('root')!).render(
  // Provide the Apollo Client instance to the entire application using ApolloProvider
  <ApolloProvider client={client}>
    <App /> {/* Root component */}
  </ApolloProvider>,
);
