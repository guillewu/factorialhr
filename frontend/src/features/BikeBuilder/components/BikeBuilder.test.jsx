import { describe, it, expect } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import BikeBuilder from "./BikeBuilder";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function renderBikeBuilder() {
  const queryClient = new QueryClient();
  render(
    <MemoryRouter initialEntries={["/bike-builder/frame"]}>
      <QueryClientProvider client={queryClient}>
        <BikeBuilder />
      </QueryClientProvider>
    </MemoryRouter>
  );
}

describe("BikeBuilder", () => {
  it("should render all the products but not product variants", async () => {
    renderBikeBuilder();
    const products = await screen.findAllByRole("button", {
      name: /frame/i,
    });
    const productVariants = screen.queryAllByRole("button", {
      name: /shiny/i,
    });
    expect(products).toHaveLength(3);
    expect(productVariants).toHaveLength(0);
  });

  it("should render product variants after selecting a product", async () => {
    renderBikeBuilder();
    const diamondFrameButton = await screen.findByRole("button", {
      name: /diamond frame/i,
    });
    fireEvent.click(diamondFrameButton);
    const productVariants = await screen.findAllByRole("button", {
      name: /(matte|shiny)/i,
    });
    expect(productVariants).toHaveLength(2);
  });

  it("should go to next page and show items in cart after clicking 'next'", async () => {
    renderBikeBuilder();
    const diamondFrameButton = await screen.findByRole("button", {
      name: /diamond frame/i,
    });
    fireEvent.click(diamondFrameButton);
    const matteButton = await screen.findByRole("button", {
      name: /matte/i,
    });
    fireEvent.click(matteButton);
    const nextButton = await screen.findByRole("button", { name: /next/i });
    fireEvent.click(nextButton);
    screen.findByText(/Total: \$200/);
  });
});
