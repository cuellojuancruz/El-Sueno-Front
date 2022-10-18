import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const { isLoading } = useAuth0();
  const user = useSelector((state) => state.createProduct.users)
  const isAuthenticated = useSelector((state) => state.createProduct.authenticated)
  console.log(user)



  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div>
        <img src={user.picture} alt={"https://i0.wp.com/elfutbolito.mx/wp-content/uploads/2019/04/image-not-found.png?ssl=1"} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
    )
  );
};

export default Profile;