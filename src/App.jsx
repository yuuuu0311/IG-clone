import logo from "./logo.svg";
import "./App.css";

import data from "./asset/mockData.json";

// components
import Header from "./components/hearder/Header";

function App() {
    const { biography, bio_links } = data.graphql.user;

    return (
        <div>
            <Header biography={biography} bioLinks={bio_links}>
                GG
            </Header>
        </div>
    );
}

export default App;
