import { useGet } from "../hooks/useGet"

export const useGetData = () => {
    return useGet("http://localhost:8080/getBook.php");
}