import { Button } from "@mui/material";
import { useRouter } from "next/router";
import { PageInfo } from "../../types";

interface PaginationProps {
  pagination?: PageInfo;
}

export const Pagination = ({ pagination }: PaginationProps) => {
  const router = useRouter();

  return (
    <>
      <Button
        disabled={!pagination?.hasPreviousPage}
        onClick={() => {
          router.push({
            query: {
              search: router.query.search,
              before: pagination?.startCursor,
            },
          });
        }}
        data-testid="pagination-btn-previous"
      >
        Prev
      </Button>
      <Button
        disabled={!pagination?.hasNextPage}
        onClick={() => {
          router.push({
            query: {
              search: router.query.search,
              after: pagination?.endCursor,
            },
          });
        }}
        data-testid="pagination-btn-next"
      >
        Next
      </Button>
    </>
  );
};
