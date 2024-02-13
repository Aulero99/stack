import { logger } from "../utils/Logger"
import { api } from "./AxiosService"

const MDI = 'api/keeps'

class KeepsService{
    async getKeepsFromApi(){
        logger.log('getKeepsFromApi()')
        const res = await api.get(MDI)
        logger.log(res.data)
        return res.data
    }


}

export const keepsService = new KeepsService()