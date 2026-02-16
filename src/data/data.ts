import { useGetAllBooks } from "../hooks/useGetAllBooks"

export const useGetData = () => {
    return useGetAllBooks("http://localhost:8080/getBook.php");
}