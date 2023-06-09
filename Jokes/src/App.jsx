import React from "react"
import Joke from "./Joke"
import jokesData from "./jokesData"

export default function App() {
    const jokeElements = jokesData.map(joke => {
        return (
            <Joke 
                key={joke.id}
                setup={joke.setup} 
                punchline={joke.punchline} 
            />
        )
    })
    return (
        <div>
            <nav>
                <h2>Jokes</h2>
            </nav>
            <div className="content">
                {jokeElements}
            </div>
        </div>
    )
}
