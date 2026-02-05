/**
 * Exercise XP: Error Boundaries, Routing, and Data Handling.
 * This file demonstrates React Router usage and integrating an ErrorBoundary.
 */
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import { ErrorBoundary } from "../error-boundary.tsx";
import { PostData } from "./post-data.tsx";
import { Example1, Example2, Example3 } from "./class-example.tsx";

/**
 * Main component organizing routing and sub-components.
 */
export function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <nav>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/profile">Profile</NavLink>
                    <NavLink to="/shop">Shop</NavLink>
                </nav>
                <Routes>
                    <Route path="/" element={<ErrorBoundary><HomeScreen /></ErrorBoundary>} />
                    <Route path="/profile" element={<ErrorBoundary><ProfileScreen /></ErrorBoundary>} />
                    <Route path="/shop" element={<ErrorBoundary><ShopScreen /></ErrorBoundary>} />
                </Routes>
            </BrowserRouter>
            <hr />
            <PostData />
            <hr />
            <Example1 />
            <Example2 />
            <Example3 />
            <hr />
            <div className="webhook-section">
                <button onClick={fetchWebhook}>Fetch Webhook</button>
            </div>
        </div>
    )
}

export function HomeScreen() {
    return (
        <h1>HOME</h1>
    )
}

export function ProfileScreen() {
    return (
        <h1>PROFILE</h1>
    )
}

export function ShopScreen() {
    const isError = true
    if (isError) {
        throw new Error("Something went wrong")
    }
    return (
        <div>SHOP</div>
    )
}

async function fetchWebhook() {
    const url = "https://webhook.site/5e712301-a05e-4c5d-a135-22e7d8769d94";
    const body = {
        key1: 'myusername',
        email: 'mymail@gmail.com',
        name: 'Isaac',
        lastname: 'Doe',
        age: 27
    }
    try {
        const response = await fetch(url, {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
        });
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error)
    }
}