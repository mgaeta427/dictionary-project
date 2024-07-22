import './App.css';
import Dictionary from "./Dictionary";


export default function App() {
  return (
    <div className="App">
    <div className="container">
      <header className="App-header">
        Knowledge Is Power
       </header>
    <main>
      <Dictionary defaultKeyword="sunset" />
    </main>
    <footer className="App-footer">
      {" "}
      This project was coded by {" "}
      <a 
      href="https://github.com/mgaeta427"
      target="_blank"
      rel="noreferrer"
      >
        Maribel Boban
      </a>
       , is open-sourced on {" "}
      <a
      href="https://github.com/mgaeta427/dictionary-app"
      target="_blank"
      rel="noreferrer"
      >
        Github
      </a>{" "}
      and hosted on {" "}
      <a
      href="https://app.netlify.com/my-fantastic-dictionary-app.netlify.app"
      target="_blank"
      rel="noreferrer"
      >
        Netlify
      </a>
      
      </footer>
      </div>
      </div>
        
  );
}


