interface IFunctionCard {
    title: string;
    description: string;
    img: string;
}

export default function FunctionCard(props: IFunctionCard) {
    return (
        <div className='card'>
            <img src={props.img} alt="Foto caminhao 1" width={280} height={180} />
            <h2>{props.title}</h2>
            {props.description}
        </div> 
    )
}