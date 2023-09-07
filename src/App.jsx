import logo from "./logo.svg";
import "./App.css";

import data from "./asset/mockData.json";

// components
import Header from "./components/hearder/Header";
import Content from "./components/content/Content";

function App() {
    return (
        <div>
            <Header></Header>
            <Content></Content>
        </div>
    );
}

export default App;
