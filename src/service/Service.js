import axios from 'axios'

const PRODUCT_LIST_API_URL = 'http://localhost:8080/bz/products'

class Service {

    retrieveAllProductNames() {
        return axios.get(`${PRODUCT_LIST_API_URL}`);
    }
}

export default new Service()
