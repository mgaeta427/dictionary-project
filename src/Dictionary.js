import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
    let [keyword, setKeyword] = useState("");

    function handleResponse(response) {
        console.log(response);
    }
    
    function search(event) {
        event.preventDefault();
        

        let apiKey ="9370643565959975t4bde2o89fba56f7";
        let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
        axios.get(apiUrl).then(handleResponse);
    
    }

    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }
    
    return (
    <div className="Dictionary">
        <form onSubmit={search}>
            <input type="search" onChange={handleKeywordChange} />
        </form>
        </div>
    );


    }