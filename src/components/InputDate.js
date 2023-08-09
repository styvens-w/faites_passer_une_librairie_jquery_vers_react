import Datepicker from "./Datepicker";

function InputDate({ type, label }) {
    return (
        <div className="input">
            <label htmlFor={type}>{label}</label>
            <Datepicker type={type} />
        </div>
    )
}

export default InputDate