import { getAllProducts } from "../../../services/productServices.js";

//aktuell haben wir noch keinen request, kann also ausgegraut bleiben, sollte dennoch funzen.
export default function handler(request, response) {

    const products = getAllProducts();
    response.status(200).json(products);
  }