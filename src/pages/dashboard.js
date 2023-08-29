import { useEffect, useState } from "react";

const UserDashboard = () => {
    const [ items, setDashboardItems ] = useState(null);
    const [ loading, setloading ] = useState(true);

    useEffect(() => {
        async function fetchDashboardData() {
            // const response = await fetch("http://localhost:3000/dashboard");
            // const data = await response.json();
            const data = {
              posts: "10",
              likes: "20",
              comments: "30"
            };
            console.log(data);
            setDashboardItems(data);
            setloading(false);
        }
        fetchDashboardData();
    }, []);

    if (loading) {
        return (
            <h1>loading</h1>
        );
    }
    return (
        <>
            <h1>My Dashboard</h1>
            <h4>Posts : {items.posts}</h4>
            <h4>Likes : {items.likes}</h4>
            <h4>Commnets : {items.comments}</h4>
        </>
    );
    

}

export default UserDashboard;
