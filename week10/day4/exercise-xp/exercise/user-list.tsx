import {UserCard} from "./user-card";
import {useEffect, useState} from "react";

interface UserApi {
    id: number,
    name: string,
    username: string,
    email: string,
    address: {
        street: string,
        suite: string,
        zipcode: string,
        geo: {
            lat: string,
            lng: string,
        }
    },
    phone: string,
    website: string,
    company: {
        name: string,
        catchPhrase: string,
        bs: string
    }
}

type UserType = {
    id: number,
    name: string,
}

const url = "https://jsonplaceholder.typicode.com/users";

export function UserList() {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [userList, setUserList] = useState<UserApi[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setUserList(data);
                setError(null);
            } catch (err) {
                setError(err.message);
                setUserList([]);
            } finally {
                setIsLoading(false);
            }
        }

        }, []
    )

    return (
        <>
        {isLoading ?
                (
                    <p>LOADING...</p>
                ) : (
                    <ul>
                    {userList.map((user: UserType) => (
                        <li key={user.id}>
                            <UserCard name={user.name} />
                        </li>
                    ))}
                </ul>)
        }
        </>
    )
}