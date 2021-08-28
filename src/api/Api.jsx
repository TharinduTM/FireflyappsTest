import axios from 'axios'
import { ApiConfig } from '../configs/ApiConfigs';



class MenuService {

    static async getMenu() {
        const response = await axios.get(ApiConfig.api)
        return response;
    }
}

export default MenuService;