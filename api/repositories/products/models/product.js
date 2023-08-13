import mongoose from "mongoose";

const productSchema = mongoose.Schema(
  {
    productID: {
      required: true,
      type: "String",
    },
    linkProduct: {
      required: true,
      type: "String",
    },
    title: {
      required: true,
      type: "String",
    },
    price: {
      required: true,
      type: "Number",
    },
    imageUrl: {
      required: true,
      type: "String",
    },
    videoID: {
      required: true,
      type: "String",
    },
  },
  {
    versionKey: false,
  }
);

export default mongoose.model("Product", productSchema);
