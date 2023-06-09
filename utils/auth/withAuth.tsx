import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export const withAuth = (Component) => {
  const AuthenticatedComponent = () => {
    const router = useRouter();
    const [data, setData] = useState();

    useEffect(() => {
      const getUser = async () => {
        const response = await fetch("http://localhost:4000/user/me");
        const userData = await response.json();
        if (!userData) {
          router.push("/admin/login");
        } else {
          setData(userData);
        }
      };
      getUser();
    }, []);

    return !!data ? <Component data={data} /> : null; // Render whatever you want while the authentication occurs
  };

  return AuthenticatedComponent;
};
