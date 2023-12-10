import {apiClient} from './apiClient'

class ProductsRepository {
  getProducts() {
    return apiClient.get('products');
  }
}

class AddressesRepository {
  getProducts() {
    return apiClient.get('addresses');
  }
}

export const productsRepository = new ProductsRepository();
export const addressesRepository = new AddressesRepository();