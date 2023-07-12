import { it, expect } from "vitest";

import { add } from "./calculate";

it("배열을 합쳤을떄", () => {
  // Arrange
  const numbers = [1, 2, 3];

  //Act
  const result = add(numbers);

  // Assert
  expect(result).toBe(6);
});
