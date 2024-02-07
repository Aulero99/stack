import Card from '../components/Card'


export default function Name(props){
    return(
        <>
        <h1>This is the Home Page</h1>
            <Card title='card1'/>
            <Card title='card2'/>
            <Card title='card3'>
            <p>
                Some text passed in
            </p>
            </Card>        
        </>
    )
}

