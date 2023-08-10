import { getProductsByUsecase } from "../../usecases/products/products.js";

export const getProducts = async (req, res) => {
  const { id } = req.params;
  const products = await getProductsByUsecase(id);

  if (!products) {
    return res.status(404).json({
      message: "Video does not exist!",
    });
  }

  res.json(products);
};
