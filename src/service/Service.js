import axios from 'axios'

const LIST_BUCKETS_API_URL = 'http://localhost:8080/b2/buckets'
const GET_APP_CONFIG_URL = 'http://localhost:8080/getConfigFromValue'

class Service {

    getAppConfig() {
        return axios.get(`${GET_APP_CONFIG_URL}`);
    }

    listBuckets() {
        return axios.get(`${LIST_BUCKETS_API_URL}`);
    }
}

export default new Service()
