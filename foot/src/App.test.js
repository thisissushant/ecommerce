import { render, screen } from "@testing-library/react";
import HeroSection from "./HeroSection";

test("renders learn react link", () => {
  render(<HeroSection />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
