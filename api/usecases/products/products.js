import { getProductsByRepo } from "../../repositories/products/products.js";

export const getProductsByUsecase = async (videoId) => {
  const products = await getProductsByRepo(videoId);

  if (!products || products.length == 0) {
    return null;
  }

  let newProducts = [];

  products.forEach((p, i = 0) => {
    newProducts[i] = {
      productID: p.productID,
      title: p.title,
      linkProduct: p.linkProduct,
      imageUrl: p.imageUrl,
      price: p.price,
    };
    i++;
  });

  return newProducts;
};
