export default function Cell({isVisible}) {
    return (
        <>
            {isVisible &&
                <button type="button">Press me!</button>
            }
        </>
    )
}