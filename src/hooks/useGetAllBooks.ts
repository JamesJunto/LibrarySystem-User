import { useState, useEffect } from "react";
import { useCheckSession } from "./useCheckSession";
export const useGetAllBooks = (url: string) => {
  const [book, setBook] = useState<[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const { ready } = useCheckSession();

  const fetchAllBooksData = async () => {
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }

      const result = await response.json();
      setBook(result);

      console.log("Fetched data:", result);
    } catch (err: unknown) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (ready) {
      fetchAllBooksData();
    }
  }, [ready]);

  return { book, loading, error, fetchAllBooksData };
};
