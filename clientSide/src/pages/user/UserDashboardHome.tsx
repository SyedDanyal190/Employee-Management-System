// import React from 'react'

// const UserDashboardHome : React.FC = () => {
//   return (
//     <div>UserDashboardHome</div>
//   )
// }

// export default UserDashboardHome










import React, { useEffect, useState } from 'react'
import axios from 'axios';

const UserDashboardHome: React.FC = () => {
  const [user, setUser] = useState<{ Name: string } | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");
      try {
        const res = await axios.get("http://localhost:4000/user/profile", {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setUser(res.data);
      } catch (err) {
        console.error("Error fetching user", err);
      }
    };

    fetchUser();
  }, []);

  return (
    <div>
      {user ? <h2>Welcome, {user.Name}!</h2> : <p>Loading...</p>}
    </div>
  );
};

export default UserDashboardHome;
