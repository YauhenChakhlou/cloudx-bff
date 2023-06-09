import productData from "../mocks/mockProductData.json";

export const getProductsList = async () => {
  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true,
    },
    body: JSON.stringify(productData),
  };
};
