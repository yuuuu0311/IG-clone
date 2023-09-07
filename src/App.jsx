import logo from "./logo.svg";
import "./App.css";

import data from "./asset/mockData.json";

// components
import Header from "./components/hearder/Header";
import Content from "./components/content/Content";

function App() {
    return (
        <main className="flex max-h-screen overflow-hidden">
            <aside className="bg-red-500 w-24 "></aside>
            <div className="grow overflow-y-auto">
                <div className="max-w-6xl m-auto px-3 py-10">
                    <Header></Header>
                    <Content></Content>
                </div>
            </div>
        </main>
    );
}

export default App;
