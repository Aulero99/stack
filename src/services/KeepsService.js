import { AppState } from "../AppState"
import { Keep } from "../models/Keep"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"

const MDI = 'api/keeps'

class KeepsService{
    async getKeepsFromApi(){
        logger.log('getKeepsFromApi()')
        const res = await api.get(MDI)
        logger.log('the response from the server is:', res.data)
        const keeps = AppState.keeps = res.data.map (k => new Keep(k))
        logger.log('the mapped data is:', keeps)
        return keeps
    }


}

export const keepsService = new KeepsService()