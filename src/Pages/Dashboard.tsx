import { BookOpen, CheckCircle, BookDown } from "lucide-react";
import type { IBooks } from "../interface/IBooks";

type DashboardProps = {
  books: IBooks[];
  loading: boolean;
  error: string | null;
  fetchData: () => void;
};

type Card = {
  title: string;
  value: number;
  icon: any;
  color: string;
  bgColor: string;
};

export const Dashboard = ({ books, loading, error }: DashboardProps) => {
  
 const cardsValues: Card[] = [
  {
    title: "Total Available Books",
    value: books.length,
    icon: BookOpen,
    color: "text-blue-600",
    bgColor: "bg-blue-100/30",
  },
  {
    title: "Total Borrowed Books",
    value: 0,
    icon: CheckCircle,
    color: "text-green-600",
    bgColor: "bg-green-100/30",
  },
  {
    title: "Total Returned Books",
    value: 0,
    icon: BookDown,
    color: "text-purple-600",
    bgColor: "bg-purple-100/30",
  },


];

  const getGenreColor = (genre: string) => {
    const colors: { [key: string]: string } = {
      Classic: "bg-amber-100 text-amber-800 border-amber-200",
      Fiction: "bg-blue-100 text-blue-800 border-blue-200",
      Dystopian: "bg-purple-100 text-purple-800 border-purple-200",
      Romance: "bg-pink-100 text-pink-800 border-pink-200",
      Fantasy: "bg-emerald-100 text-emerald-800 border-emerald-200",
    };
    return colors[genre] || "bg-gray-100 text-gray-800 border-gray-200";
  };

  if (loading) {
    return (
      <div className="h-screen w-screen flex justify-center items-center bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="flex flex-col items-center gap-4">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-slate-600 font-medium">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="h-screen w-screen flex justify-center items-center bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="bg-white rounded-xl shadow-lg p-8 max-w-md">
          <div className="flex items-center gap-3 text-red-600 mb-4">
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h3 className="font-semibold text-lg">Error Loading Dashboard</h3>
          </div>
          <p className="text-slate-600">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br ">
      <div className="max-w-7xl mx-auto p-6 md:p-8 lg:p-10">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-2">
            Library Dashboard
          </h1>
          <p className="text-slate-600">
            Track and manage your library collection
          </p>
        </div>


        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {cardsValues.map((card, index) => {
            const Icon = card.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-slate-200 overflow-hidden group"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`${card.bgColor} ${card.color} p-3 rounded-xl group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>
                  <h3 className="text-slate-600 text-sm font-medium mb-1">
                    {card.title}
                  </h3>
                  <p className="text-4xl font-bold text-slate-800">
                    {card.value}
                  </p>
                </div>
                <div
                  className={`h-1 ${card.color.replace("text-", "bg-")} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}
                ></div>
              </div>
            );
          })}
        </div>



        {/* Books Table */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden w-screen max-w-7xl">
          {/* Table Header */}
          <div className="p-4 border-b border-slate-200">
            <h2 className="text-xl font-semibold text-slate-800">
              Book Collection
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              {books.length} books in library
            </p>
          </div>

          {/* Table Body */}
          <div className="overflow-x-auto">
            <div
              className={`overflow-y-auto ${
                books.length > 5 ? "max-h-[350px]" : "" 
              }`}
            >
              <table className="w-full">
                <thead className="bg-slate-50 sticky top-0 z-10">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-slate-700 uppercase tracking-wider">
                      ID
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-slate-700 uppercase tracking-wider">
                      Title
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-slate-700 uppercase tracking-wider">
                      Author
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-slate-700 uppercase tracking-wider">
                      Year
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-slate-700 uppercase tracking-wider">
                      Genre
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-slate-700 uppercase tracking-wider">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {books.length > 0 ? (
                    books.map((book) => (
                      <tr
                        key={book.id}
                        className="hover:bg-blue-50/50 transition-colors duration-150"
                      >
                        <td className="px-6 py-4 text-sm text-slate-600">
                          {book.id}
                        </td>
                        <td className="px-6 py-4 text-sm font-medium text-slate-800">
                          {book.title}
                        </td>
                        <td className="px-6 py-4 text-sm text-slate-600">
                          {book.author}
                        </td>
                        <td className="px-6 py-4 text-sm text-slate-600">
                          {book.year}
                        </td>
                        <td className="px-6 py-4">
                          <span
                            className={`inline-block px-3 py-1 rounded-full text-sm font-medium border ${getGenreColor(
                              book.genre,
                            )}`}
                          >
                            {book.genre}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800 border border-green-200">
                            Available
                          </span>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td
                        colSpan={6}
                        className="px-6 py-12 text-center text-slate-500"
                      >
                        <BookOpen className="w-12 h-12 mx-auto mb-3 text-slate-300" />
                        <p className="font-medium">No books found</p>
                        <p className="text-sm mt-1">
                          Start by adding books to your library
                        </p>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* Footer */}
          <div className="px-6 py-4 border-t border-slate-200 bg-slate-50 text-sm">
            Total Books: <span className="font-semibold">{books.length}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
