import { GraphQLClient, RequestDocument } from "graphql-request";

const endpoint = "https://api.github.com/graphql";

const graphQLClient = new GraphQLClient(endpoint, {
  headers: {
    authorization: `Bearer ${process.env.NEXT_PUBLIC_API_GITHUB_TOKEN}`,
  },
});

interface useGithubSearchProps {
  searchQuery?: string;
  after?: string;
  before?: string;
}
export const graphQlrequest = (
  query: RequestDocument,
  { after, before, searchQuery }: useGithubSearchProps,
) => {
  return graphQLClient.request(query, { searchQuery, after, before });
};
