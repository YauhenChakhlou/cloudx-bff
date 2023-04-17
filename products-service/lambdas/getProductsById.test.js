import { expect, test } from "vitest";
import { getProductsById } from "./getProductsById";

test("getProductsById() - Found - 200", async () => {
  const productId = "7567book1b-b10c";
  const event = {
    pathParameters: { id: productId },
  };

  const lambdaResult = await getProductsById(event);

  expect(lambdaResult.statusCode).toBeDefined;
  expect(lambdaResult.statusCode).toEqual(200);
  expect(lambdaResult.body).toBeDefined;

  const product = JSON.parse(lambdaResult.body);
  expect(product).toBeInstanceOf(Object);

  expect(product.id).toBeDefined;
  expect(product.title).toBeDefined;
});

test("getProductsById() - Not found - 404", async () => {
  const productId = "7567-NOT-FOUND";
  const event = {
    pathParameters: { id: productId },
  };

  const lambdaResult = await getProductsById(event);

  expect(lambdaResult.statusCode).toBeDefined;
  expect(lambdaResult.statusCode).toEqual(404);
  expect(lambdaResult.body).toBeDefined;
});
