import { gql } from "graphql-request";
import { useRouter } from "next/router";
import useSWR from "swr";

import { Data } from "../types";
import { graphQlrequest } from "../utils/graphQLClient";

const query = gql`
  query search($searchQuery: String!, $after: String, $before: String) {
    search(
      query: $searchQuery
      type: REPOSITORY
      last: 10
      after: $after
      before: $before
    ) {
      edges {
        node {
          ... on Repository {
            id
            url
            stargazerCount
            forkCount
            nameWithOwner
          }
        }
      }
      pageInfo {
        startCursor
        endCursor
        hasNextPage
        hasPreviousPage
      }
    }
  }
`;

export const useGithubSearch = () => {
  const router = useRouter();

  const after = Array.isArray(router.query.after)
    ? undefined
    : router.query.after;

  const before = Array.isArray(router.query.before)
    ? undefined
    : router.query.before;

  const searchQuery = Array.isArray(router.query.search)
    ? undefined
    : router.query.search || "React";

  // https://swr.vercel.app/docs/data-fetching#graphql
  // https://swr.vercel.app/docs/arguments#multiple-arguments
  const { data, error } = useSWR<Data>(
    [query, { after, before, searchQuery }],
    graphQlrequest,
  );

  return {
    data: data?.search?.edges,
    pagination: data?.search?.pageInfo,
    error,
    isLoading: !error && !data,
  };
};
