/**
 * Greeting Component - Week 10 Day 4 Exercise 2.
 * Demonstrates TypeScript interface for props with type safety.
 */

/**
 * Interface defining props for the Greeting component.
 * @property name - The user's name to display
 * @property messageCount - Number of messages to display
 */
interface GreetingInterface {
    name: string;
    messageCount: number;
}

/**
 * Greeting component that displays name and message count.
 * @param greeting - Props conforming to GreetingInterface
 */
export function Greeting(greeting: GreetingInterface) {
    return (
        <>
            <p>{greeting.name}</p>
            <p>{greeting.messageCount}</p>
        </>
    )
}