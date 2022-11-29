import { test, expect } from "@playwright/test";

test.describe("github search ui works", () => {
  test.beforeEach(async ({ page }, testInfo) => {
    console.log(`Running ${testInfo.title}`);
    await page.goto("http://localhost:3000");
  });

  test("search works", async ({ page }) => {
    const searchInput = page.getByTestId("github-search-input");

    await expect(searchInput).toBeFocused();

    // by default the searh query is "react"
    const facebookReactLink = page.getByRole("link", {
      name: "facebook/react",
      exact: true,
    });

    await expect(facebookReactLink).toHaveAttribute(
      "href",
      "https://github.com/facebook/react",
    );

    await searchInput.fill("next.js");

    await expect(page).toHaveURL(/search=next.js/);

    const vercelNextJsLink = page.getByRole("link", {
      name: "vercel/next.js",
      exact: true,
    });
    await expect(vercelNextJsLink).toHaveAttribute(
      "href",
      "https://github.com/vercel/next.js",
    );

    // search query is persisted in the url
    await page.reload();
    await expect(page).toHaveURL(/search=next.js/);
  });

  test("pagination works", async ({ page }) => {
    const prevBtn = page.getByTestId("pagination-btn-previous");
    await expect(prevBtn).toBeDisabled();

    // go to next page
    await page.getByTestId("pagination-btn-next").click();

    await expect(page).toHaveURL(/after=/);
    const listEl = page.getByTestId("github-search-results-list");
    await expect(listEl).not.toBeEmpty();
    await expect(prevBtn).not.toBeDisabled();

    // go to previous page
    await prevBtn.click();
    await expect(page).toHaveURL(/before=/);
    await expect(listEl).not.toBeEmpty();
    await expect(prevBtn).toBeDisabled();
  });
});
