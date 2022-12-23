import { currentPage } from "../components/Header";

test("should return empty string", () => {
  const expected = currentPage(false);
  expect(expected).toBe("");
});

test("should return active string", () => {
  const expected = currentPage(true);
  expect(expected).toBe("active");
});
