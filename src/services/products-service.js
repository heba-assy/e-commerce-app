import { apiClient } from "./api-client";

export async function getAllProducts({
  page,
  keyword,
  brand,
  priceGreaterThan,
  priceLessThan,
  sortedBy,
  category,
} = {}) {
  try {
    const options = {
      url: `/products?${page ? `page=${page}` : ""}${
        keyword ? `&keyword=${keyword}` : ""
      }${priceGreaterThan ? `&price[gte]=${priceGreaterThan}` : ""}${
        priceLessThan ? `&price[lte]=${priceLessThan}` : ""
      }${brand ? `&brand=${brand}` : ""}${sortedBy ? `&sort=${sortedBy}` : ""}${
        category ? `&category[in]=${category}` : ""
      }`,
      method: "GET",
    };
    const response = await apiClient.request(options);
    return response;
  } catch (error) {
    throw error;
  }
}

export async function getSpecificProduct({id}) {
  try {
    const options = {
      url: `/products/${id}`,
      method: "GET"
    }
    const response = await apiClient.request(options)
    return response
  } catch (error) {
    throw error
  }
}
