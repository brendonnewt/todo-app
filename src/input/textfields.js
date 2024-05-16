import { textfields } from "../data/textfields";

const TextFields = () => {
    return (
        <div className="textfields">
        {textfields.map((textfield, index) => {
            return <input key={index} type='text' placeholder={textfield.placeholder} />
        })}
        </div>
    )
}

export default TextFields;