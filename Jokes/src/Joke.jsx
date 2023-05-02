import React from "react"

export default function Joke(props) {
    const [isShown, setIsShown] = React.useState(false)
    function toggleShown(){
        setIsShown(prevShown => !prevShown)
    }

    return (
        <div>
            {props.setup && <h3>Setup: {props.setup}</h3>}
            {isShown && <h4>Punchline: {props.punchline}</h4>}
            <button className="btn btn-success" onClick={toggleShown}>{isShown ? "Hide" : "Show"} Punchline</button>
            <hr />
        </div>
    )
}
