export default function Cell({isVisible, increaseScore}) {
    return (
        <>
            {isVisible &&
                <button type="button" onClick={increaseScore}>Press me!</button>
            }
        </>
    )
}