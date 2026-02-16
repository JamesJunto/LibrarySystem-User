import { useGetAllBorrowedBooks } from "../hooks/useGetAllBorrowedBooks";
export const useBorrowedBooksData = () => {
    return useGetAllBorrowedBooks("http://localhost:8080/getBorrowedBook.php");
}