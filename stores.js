import {makeAutoObservable, runInAction} from 'mobx';
import {productsRepository, addressesRepository} from './repositories'

class ProductsStore {
	rootStore;

	productsRepository;

	products = [];

	constructor(rootStore, productsRepository) {
		makeAutoObservable(this);
		this.rootStore = rootStore;
		this.productsRepository = productsRepository;
	}

	async fetchProducts() {
		const response = await this.productsRepository.getProducts();
		runInAction(() => {
			this.products = response.data;
		});
	}
}

class AddressesStore {
	rootStore;

	addressesRepository;

	addresses = [];

	constructor(rootStore, addressesRepository) {
		makeAutoObservable(this);
		this.rootStore = rootStore;
		this.addressesRepository = addressesRepository;
	}

	async fetchAddresses() {
		const response = await this.addressesRepository.getAddresses();
		runInAction(() => {
			this.addresses = response.data;
		});
	}
}

class CartStore {
	rootStore;

	cartItems = [];

	constructor(rootStore) {
		makeAutoObservable(this);
		this.rootStore = rootStore;
	}

	addToCart(product) {
		this.cartItems.push(product);
	}

	removeFromCart(productId) {
		this.cartItems = this.cartItems.filter(item => item.id !== productId);
	}
}

export class RootStore {
	productsStore;
	addressesStore;
	cartStore;

	constructor() {
		this.productsStore = new ProductsStore(this, productsRepository);
		this.addressesStore = new AddressesStore(this, addressesRepository);
		this.cartStore = new CartStore(this);
	}
}

const store = new RootStore();

export default store;