export default function Card(props){
    return(
        <div>
            <h3>
                {props.title}
            </h3>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero sunt expedita cum possimus quo reiciendis?
            </p>
            {props.children}
        </div>
    )
}