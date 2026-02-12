import { useGet } from "../hooks/useGet"

export const useBorrowedBooksData = () => {
    return useGet("http://localhost:8080/getBorrowedBook.php");
}