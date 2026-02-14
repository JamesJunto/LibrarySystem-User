import type { IBooks } from "../interface/IBooks";

const BorrowedBooksPage = ({ borrowedBooks, loading }: { borrowedBooks: IBooks[]; loading: boolean }) => {

  if (loading) {
    return (
      <div className="h-screen w-screen flex justify-center items-center bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="flex flex-col items-center gap-4">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-slate-600 font-medium">Loading borrowed books...</p>
        </div>
      </div>
    );
  }

  if (borrowedBooks.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 p-8">
        <div className="text-center">
          <svg
            className="mx-auto h-24 w-24 text-gray-400 mb-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
            />
          </svg>
          <h2 className="text-3xl font-bold text-gray-800 mb-3">No Borrowed Books</h2>
          <p className="text-gray-600 text-lg">You haven't borrowed any books yet.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">My Borrowed Books</h1>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {borrowedBooks.map((book) => (
            <div
              key={book.book_id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 transform hover:-translate-y-1"
            >
              <div className="p-6">
                <div className="mb-4">
                  <h2 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                    {book.title}
                  </h2>
                  <p className="text-sm text-gray-600 mb-1">
                   Author: {book.author || 'Unknown Author'}
                  </p>
                
                </div>

                <div className="flex items-center gap-2 mb-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800">
                    Borrowed
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700">
                    {book.genre || 'General'}
                  </span>
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <button className="w-full px-4 py-2.5 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 active:bg-blue-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                    Return Book
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BorrowedBooksPage;