const FilmInput = ({onChange, data, name, disabled}) => {

    return(
        <select id={name} name={name} onChange={onChange} disabled={disabled} className="in-fields" required>
        {data.map((option, index) => (
                <option key={index} value={option}>
                    {option}
                </option>
            ))}
        </select>
    )
}

export default FilmInput;