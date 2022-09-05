const FilmInput = ({data}, {name}) => {

    return(
        <select id={name} name={name} className="in-fields" required>
        {data.map((option, index) => (
                <option key={index} value={option}>
                    {option}
                </option>
            ))}
        </select>
    )
}

export default FilmInput;