import { useState, useEffect, useLayoutEffect } from "react";
import { retrieveUsers } from "../api/userAPI";
import type { UserData } from "../interfaces/UserData";
import ErrorPage from "./ErrorPage";
import UserList from '../components/Users';
import auth from '../utils/auth';
import SearchBar from "../components/SearchBar/SearchBar";

const Home = () => {

    const [users, setUsers] = useState<UserData[]>([]);
    const [error, setError] = useState(false);
    const [loginCheck, setLoginCheck] = useState(false);
    const [searchResults, setSearchResults] = useState<any[]>([]);

    useEffect(() => {
        if (loginCheck) {
            fetchUsers();
        }
    }, [loginCheck]);

    useLayoutEffect(() => {
        checkLogin();
    }, []);

    const checkLogin = () => {
        if (auth.loggedIn()) {
            setLoginCheck(true);
        }
    };

    const fetchUsers = async () => {
        try {
            const data = await retrieveUsers();
            setUsers(data)
        } catch (err) {
            console.error('Failed to retrieve tickets:', err);
            setError(true);
        }
    };

    const handleSearch = (results: any[]) => {
        setSearchResults(results);
    };

    if (error) {
        return <ErrorPage />;
    }

    return (
        <>
            {
                !loginCheck ? (
                    <div className='login-notice'>
                        <h1>
                            Login to see all your collections!
                        </h1>
                    </div>
                ) : (
                    <>
                        <SearchBar onSearch={handleSearch} /> {/* Use the SearchBar */}
                        <UserList users={users} />
                        <ul>
                            {searchResults.map((set) => (
                                <li key={set.set_num}>
                                    <h3>{set.name}</h3>
                                    {/* You can add more details or actions like adding to wishlist */}
                                </li>
                            ))}
                        </ul>
                    </>
                )}
        </>
    );
};

export default Home;
