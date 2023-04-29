import productData from "../mocks/mockProductData.json";

export const getProductsById = async (event) => {
  const id = event.pathParameters.id;
  const foundProduct = productData.find((prod) => prod.id === id);

  if (!foundProduct) {
    return {
      statusCode: 404,
      body: JSON.stringify({
        message: `There is no such product with product ID: ${id}`,
      }),
    };
  }

  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true,
    },
    body: JSON.stringify(foundProduct),
  };
};
