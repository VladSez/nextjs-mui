import { Box, ListItem, ListItemText, Typography } from "@mui/material";
import Link from "../../components/Link";
import { Edge } from "../../types";

export const SearchResultItem = ({ node }: Edge) => {
  const nameWithOwner = node?.nameWithOwner;
  const stargazerCount = node?.stargazerCount;
  const forkCount = node?.forkCount;
  const url = node?.url;

  return (
    <ListItem alignItems="flex-start">
      <ListItemText
        primary={
          <Link href={url} target="_blank" rel="noopener noreferrer">
            {nameWithOwner}
          </Link>
        }
        secondary={
          <>
            <Typography
              component="span"
              variant="subtitle2"
              sx={{ display: "block" }}
            >
              Stars: {stargazerCount?.toLocaleString()}
            </Typography>
            <Typography
              component="span"
              variant="subtitle2"
              sx={{ display: "block" }}
            >
              Forks: {forkCount?.toLocaleString()}
            </Typography>
          </>
        }
      />
    </ListItem>
  );
};
