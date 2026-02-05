interface UserCardProps {
    name?: string;
    age?: number;
    role?: string;
}

export function UserCard({name = "Anonymous", age = 0, role = "User"}: UserCardProps) {
    return (
        <>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Role: {role}</p>
        </>
    )
}