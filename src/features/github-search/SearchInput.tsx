import { TextField } from "@mui/material";
import { useRouter } from "next/router";
import { ChangeEvent, useEffect, useState } from "react";
import { useDebouncedCallback } from "use-debounce";

export const SearchInput = () => {
  const router = useRouter();
  const [isRouterReady, setIsRouterReady] = useState(false);

  const debouncedHandleSearch = useDebouncedCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      router.push({
        query: {
          search: event.target.value,
        },
      });
    },
    500,
  );

  // useEffect is needed to prevent https://nextjs.org/docs/messages/react-hydration-error
  useEffect(() => {
    if (router.isReady) {
      setIsRouterReady(true);
    }
  }, [router.isReady]);

  if (!isRouterReady) {
    return null;
  }

  return (
    <TextField
      type="search"
      id="github-search-input"
      label="Search..."
      variant="outlined"
      sx={{ width: "100%" }}
      size="small"
      onChange={debouncedHandleSearch}
      defaultValue={router.query?.search ?? ""}
      autoFocus
      inputProps={{ "data-testid": "github-search-input" }}
    />
  );
};
