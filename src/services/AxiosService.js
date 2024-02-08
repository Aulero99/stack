import Axios from "axios";
import { baseURL } from "../env";
import { logger } from "../utils/Logger";

export const api = Axios.create({
    baseURL,
    timeout:8000
})

api.interceptors.request.use(config => config, handleAxiosError)
api.interceptors.response.use(response => response, handleAxiosError)

function handleAxiosError(e){
    if(e.response){
        // The request was made but fell outside 2XX
        logger.warn('[AXIOS_ERROR_RESPONSE_DATA]', e.response.data)
    }else if(e.request){
        // request made, no response
        logger.warn('[AXIOS_ERROR_NO_REPSPONSE]', e.request)
    }else{
        // Something else triggered an error
        logger.warn('[AXIOS_ERROR_INVALID_REQUEST]', e.message)
    }
    return Promise.reject(e)
}