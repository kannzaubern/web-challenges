import dbConnect from "@/db/connect";
import Product from "@/db/models/Product";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  const product = Product.find((product) => product.id === id);

  if (request.method === "GET") {
    const product = await Product.findById(id);

    if (!product) {
      response.status(404).json({ status: "Not Found" });
      return;
    }

    response.status(200).json(product);
    return;
  }

  response.status(405).json({ status: "Method not allowed." });
}
