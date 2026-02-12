import type { IBooks } from "../interface/IBooks";
const BorrowedBooksPage = ({ borrowedBooks }: { borrowedBooks: IBooks[] }) => {

  if (borrowedBooks.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-full">
        <h2 className="text-2xl font-semibold mb-4">No Borrowed Books</h2>
        <p className="text-gray-600">You haven't borrowed any books yet.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4 p-4 ml-8">
      {borrowedBooks.map((book) => (
        <div
          key={book?.book_id}
          className="card bg-primary text-primary-content w-96"
        >
          <div className="card-body">
            <h2 className="card-title">{book?.title}</h2>


            <div className="card-actions justify-end">
              <button className="btn">Return</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BorrowedBooksPage;
