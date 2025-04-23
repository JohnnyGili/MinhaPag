import "../styles/buttons.css"

interface IButtonProps {
    text: string;
    handleFunction: Function;
    secondary?: boolean;
}

export default function Button({ text, handleFunction, secondary }: IButtonProps) {
    return (
        <button 
        // onClick={}
            className={secondary ? "btn-secondary" : "btn-primary"}>
            {text}
        </button>
    )
}