import dbConnect from "@/db/connect";
import Product from "@/db/models/Product";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const products = await Product.find();

    response.status(200).json(products);
    return;
  }

  if (request.method === "POST") {
    try {
      const productData = request.body;
      console.log("Product data:", productData);

      await Product.create(productData);
      response.status(201).json({ status: "Product created" });
      return;
    } catch (error) {
      response.status(400).json({ error: "Something went wrong" });
    }
  }
  response.status(405).json({ status: "Method not allowed." });
}
