
function InputSelect({ type, label, datas }) {

    return (
        <div className="input">
            <label htmlFor={type}>{label}</label>
            <select className={type} autoComplete="off" >
                <option disabled >Select {label}</option>
                {
                    datas.map((data) => (
                        <option key={data.name} value={data.abbreviation ? data.abbreviation : data.name}>{data.name}</option>
                    ))
                }
            </select>
        </div>
    )
}

export default InputSelect