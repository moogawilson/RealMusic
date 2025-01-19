import { useState, useEffect } from "react";
import { signIn, useSession } from "next-auth/react";
import axios from "axios";

export function useUserSession() {
  const { data: session, status } = useSession();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    if (status === "authenticated" && session?.user) {
      checkOrCreateUser(session.user);
    }
  }, [status, session]);

  const checkOrCreateUser = async (user: any) => {
    setLoading(true);
    setError(null);

    try {
      const userExists = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/check-user`,
        {
          params: { email: user.email },
        }
      );

      if (!userExists.data.exists) {
        await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/create-user`, {
          email: user.email,
          name: user.name,
          image: user.image,
        });
      }
    } catch (err: any) {
      setError(err.message || "An error occurred while creating the user.");
    } finally {
      setLoading(false);
    }
  };

  return {
    session,
    loading,
    error,
    signIn,
  };
}
