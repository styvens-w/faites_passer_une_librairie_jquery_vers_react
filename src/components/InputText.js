
function InputText({ type, label }) {


    return (
        <div className="input">
            <label htmlFor={type}>{label}</label>
            <input type="text" className={type} placeholder={label} autoComplete="off" />
        </div>
    )
}

export default InputText