import { Alert, Box, CircularProgress, List, TextField } from "@mui/material";
import { Spinner } from "../../components/Spinner";

import { useGithubSearch } from "../../hooks/useGithubSearch";
import { Pagination } from "../../components/Pagination";
import { SearchResultItem } from "./SearchResultItem";
import { useRouter } from "next/router";

export const SearchResultsList = () => {
  const { data, pagination, error, isLoading } = useGithubSearch();
  const router = useRouter();

  const handleNextPage = () => {
    router.push({
      query: {
        search: router.query.search,
        after: pagination?.endCursor,
      },
    });
  };

  const handlePreviousPage = () => {
    router.push({
      query: {
        search: router.query.search,
        before: pagination?.startCursor,
      },
    });
  };

  if (isLoading) {
    return (
      <Spinner sx={{ display: "flex", justifyContent: "center", mt: 10 }} />
    );
  }

  if (error) {
    console.error(error);

    return (
      <Alert variant="filled" severity="error" sx={{ mt: 5 }}>
        {error?.message}
      </Alert>
    );
  }

  return (
    <>
      <List
        sx={{
          width: "100%",
          height: "500px",
          overflow: "auto",
          mt: 2,
        }}
        data-testid="github-search-results-list"
      >
        {data?.map(({ node }) => {
          return <SearchResultItem key={node.id} node={node} />;
        })}
      </List>
      <Box sx={{ mt: 2, mb: 4, display: "flex", justifyContent: "flex-end" }}>
        <Pagination
          pagination={pagination}
          handlePreviousPage={handlePreviousPage}
          handleNextPage={handleNextPage}
        />
      </Box>
    </>
  );
};
