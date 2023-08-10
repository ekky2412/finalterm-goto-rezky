import Product from "./models/product.js";

export const getProductsByRepo = async (videoID) => {
  try {
    const products = await Product.find({ videoID });
    return products;
  } catch (err) {
    return err;
  }
};
