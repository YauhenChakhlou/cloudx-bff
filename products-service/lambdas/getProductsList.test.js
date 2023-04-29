import { expect, test } from "vitest";
import { getProductsList } from "./getProductsList";

test("getProductsList() - 200", async () => {
  const lambdaResult = await getProductsList();

  expect(lambdaResult.statusCode).toBeDefined;
  expect(lambdaResult.statusCode).toEqual(200);
  expect(lambdaResult.body).toBeDefined;

  const productsList = JSON.parse(lambdaResult.body);
  expect(productsList).toBeInstanceOf(Array);
  expect(productsList.length).toBeGreaterThan(2);

  expect(productsList[0].id).toBeDefined;
});
