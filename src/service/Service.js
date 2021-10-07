import axios from 'axios'

const PRODUCT_LIST_API_URL = 'http://localhost:8080/bz/products'
const LIST_BUCKETS_API_URL = 'http://localhost:8080/b2/buckets'

class Service {

    retrieveAllProductNames() {
        return axios.get(`${PRODUCT_LIST_API_URL}`);
    }

    listBuckets() {
        return axios.get(`${LIST_BUCKETS_API_URL}`);
    }
}

export default new Service()
