import { textfields } from "../data/textfields";

const TextFields = () => {
    return (
        <>
        {textfields.map((textfield, index) => {
            return <input key={index} type='text' placeholder={textfield.placeholder} />
        })}
        </>
    )
}

export default TextFields;