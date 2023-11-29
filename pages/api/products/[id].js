import { getProductById } from "../../../services/productServices.js";


export default function handler(request, response) {

    const { id } = request.query;
    const getProduct = getProductById(id);

    response.status(200).json(getProduct);
}