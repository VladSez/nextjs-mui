import { Box, CircularProgress, SxProps, Theme } from "@mui/material";

interface SpinnerProps {
  sx?: SxProps<Theme>;
}
export const Spinner = ({ sx }: SpinnerProps) => {
  return (
    <Box sx={sx}>
      <CircularProgress data-testid="spinner" />
    </Box>
  );
};
