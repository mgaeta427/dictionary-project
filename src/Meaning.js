import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
    return (
    <div className="Meaning">
    <h3>{props.meaning.partOfSpeech}</h3>
        <div>
            <div className="definition">{props.meaning.definition}</div>
            <div className="example">{props.meaning.example}</div>
                <em>{props.meaning.example}</em>
                <Synonyms synonyms={props.meaning.synonyms} />
                   
        </div>
        </div>

    );


}