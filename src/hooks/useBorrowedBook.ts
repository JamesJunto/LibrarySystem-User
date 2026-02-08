import { useState } from "react";
import type { IBooks } from "../interface/IBooks";

export const useBorrowedBooks = () => {
  const [borrowedBooks, setBorrowedBooks] = useState<IBooks[]>([]);
  return { borrowedBooks, setBorrowedBooks };
};