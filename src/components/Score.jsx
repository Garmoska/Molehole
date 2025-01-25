export default function Score({value}) {
    return (
        <fieldset>
            <label htmlFor="score" style={{marginLeft : "30px"}}>Score:</label>
            <input type="text" id="score" value={value} disabled/>
        </fieldset>
    )
}