
import './App.css'
import {Greeting} from "./greeting.tsx";
import {UserCard} from "../user-card.tsx";

function App() {
    return (
        <>
            <Greeting name={"Alex"} messageCount={6}/>
            <UserCard />
        </>
    )
}

export default App
