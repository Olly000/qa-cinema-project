const FilmInput = ({onChange, data, name}) => {

    return(
        <select id={name} name={name} onChange={onChange} className="in-fields" required>
        {data.map((option, index) => (
                <option key={index} value={option}>
                    {option}
                </option>
            ))}
        </select>
    )
}

export default FilmInput;