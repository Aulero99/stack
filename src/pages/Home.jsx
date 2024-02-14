import { createResource, createSignal, onMount } from 'solid-js'
import Card from '../components/Card'
import { logger } from '../utils/Logger'
import { keepsService } from '../services/KeepsService'

const getKeepsFromApi = async () => {
    try {
        let data = await keepsService.getKeepsFromApi()
        logger.log(data)
        return data
    } catch (e) {
        logger.log(e)
    }
}

export default function Home(){

    const [keeps] = createResource(getKeepsFromApi)

    return(
        <>
        <h1>This is the Home Page</h1>
        <For each={keeps()} fallback={<p>Loading...</p>}>{ keep =>
            <h3>{keep.name}</h3>
        }</For>
            <Card title='card1'/>
            <Card title='card2'/>
            <Card title='card3'>
            <p>
                Some text passed in
            </p>
            </Card>
             <p>{console.log(keeps(), keeps.loading)}</p>       
        </>
    )
}

