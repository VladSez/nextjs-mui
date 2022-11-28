import { Button } from "@mui/material";
import { PageInfo } from "../types";

interface PaginationProps {
  pagination?: PageInfo;
  handleNextPage?: () => void;
  handlePreviousPage?: () => void;
}

export const Pagination = ({
  pagination,
  handleNextPage,
  handlePreviousPage,
}: PaginationProps) => {
  return (
    <>
      <Button
        disabled={!pagination?.hasPreviousPage}
        onClick={handlePreviousPage}
        data-testid="pagination-btn-previous"
      >
        Prev
      </Button>
      <Button
        disabled={!pagination?.hasNextPage}
        onClick={handleNextPage}
        data-testid="pagination-btn-next"
      >
        Next
      </Button>
    </>
  );
};
