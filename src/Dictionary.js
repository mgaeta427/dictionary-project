import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";


export default function Dictionary(props) {
    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);

    function handleResponse(response) {
        setResults(response.data);
    }
    
    function search() {
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        axios.get(apiUrl).then(handleResponse);
    }
    
    function handleSubmit(event) {
        event.preventDefault();
        search();
        

        let apiKey ="9370643565959975t4bde2o89fba56f7";
        let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
        axios.get(apiUrl).then(handleResponse);
    
    }

    function handleKeywordChange(event) {
        setKeyword(event.target.value);

    }

        function load() {
            setLoaded(true);
            search();
        }
        
        if (loaded){
    return (
    <div className="Dictionary">
        <section>
            <h1>What word would you like to look up?</h1>
        <form onSubmit={handleSubmit}>
            <input 
            type="search" 
            onChange={handleKeywordChange} 
            defaultValue={props.defaultKeyword} />
        </form>
        <div className="hint">
            suggested words: sunset, wine, yoga, plants....
            </div>
        </section>
        <Results results={results} />
        </div>
    );

    } else {
        
    load();
    return "Loading";
}
}