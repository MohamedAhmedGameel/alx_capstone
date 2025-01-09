import { useDispatch } from "react-redux";
import { addProduct } from "../rudex/cartSlice";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Products = () => {
  const dispatch = useDispatch();
  const [showPopup, setShowPopup] = useState(false);
  const [books, setBooks] = useState([]);
  const [scienceBooks, setScienceBooks] = useState([]);
  const [healthBooks, setHealthBooks] = useState([]);
  const [businessBooks, setBusinessBooks] = useState([]);
  const [filters, setFilters] = useState({
    science: false,
    health: false,
    business: false,
  });
  const [searchKeyword, setSearchKeyword] = useState("");

  useEffect(() => {
    fetchBooks();
  }, []);

  // Define the URLs for the Open Library API endpoint to fetch books data
  let scienceUrl = `https://openlibrary.org/search.json?q=subject=science&isbn&limit=6`;
  let healthUrl = `https://openlibrary.org/search.json?q=subject=Photography&isbn&limit=6`;
  let businessUrl = `https://openlibrary.org/search.json?q=subject=crime&isbn&limit=6`;

  // Function to fetch the top books from each category
  async function fetchBooks() {
    try {
      // Make requests to all three endpoints
      const responses = await Promise.all([
        fetch(scienceUrl),
        fetch(healthUrl),
        fetch(businessUrl),
      ]);

      // Parse all responses into JSON
      const data = await Promise.all(responses.map((res) => res.json()));

      // Ensure that each API response has the expected 'docs' field
      const scienceBooks = data[0]?.docs || [];
      const healthBooks = data[1]?.docs || [];
      const businessBooks = data[2]?.docs || [];

      // Concatenate all the books into one list
      const allBooks = [...scienceBooks, ...healthBooks, ...businessBooks];

      // Update the state with the fetched data
      setBooks(allBooks);

      // Set individual categories (if needed)
      setScienceBooks(scienceBooks);
      setHealthBooks(healthBooks);
      setBusinessBooks(businessBooks);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  }

  // Handle filter change
  const handleFilterChange = (event) => {
    const { id, checked } = event.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [id]: checked,
    }));
  };

  // Handle Add to Cart
  const handleAddToCart = (book) => {
    // Dispatch the book to the cart
    dispatch(addProduct({ ...book, quantity: 1 }));
    setShowPopup(true);

    // Hide the popup after 3 seconds
    setTimeout(() => setShowPopup(false), 3000);
  };

  // Function to handle search input change and make API call
  const handleSearchChange = async (event) => {
    const keyword = event.target.value;
    setSearchKeyword(keyword);

    // If search is empty, reset books to the full list of filtered books
    if (keyword === "") {
      fetchBooks();
      return;
    }

    // Format the keyword with "+" between words
    const formattedKeyword = keyword.split(" ").join("+");

    try {
      const response = await fetch(
        `https://openlibrary.org/search.json?title=${formattedKeyword}&limit=8`
      );
      const data = await response.json();

      setBooks(data.docs); // Set the books to the search results
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  // Filter books based on selected categories and search keyword
  const filteredBooks = books.filter((book) => {
    // If no filters are selected, show all books
    const matchesFilter =
      (!filters.science && !filters.health && !filters.business) ||
      (filters.science && scienceBooks.find((b) => b.key === book.key)) ||
      (filters.health && healthBooks.find((b) => b.key === book.key)) ||
      (filters.business && businessBooks.find((b) => b.key === book.key));

    const matchesSearch =
      book.title.toLowerCase().includes(searchKeyword.toLowerCase()) ||
      (book.authors &&
        book.authors
          .map((author) => author.name)
          .join(", ")
          .toLowerCase()
          .includes(searchKeyword.toLowerCase()));

    return matchesFilter && matchesSearch;
  });

  return (
    <div className="bg-white max-w-[100vw]">
      <div className="mx-auto max-w-2xl px-4 pb-16 sm:px-6 sm:pb-16 lg:max-w-7xl g:px-8">
        <h2 className="text-6xl my-20 font-bold text-center tracking-tight text-gray-900">
          Our Books
        </h2>

        <section>
          <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
            <header>
              <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
                Books Collection
              </h2>

              <div className="flex items-center justify-between"></div>
            </header>

            <div className="mt-4 lg:mt-8 lg:grid lg:grid-cols-4 lg:items-start lg:gap-8">
              <div className="hidden space-y-4 lg:block">
                <label
                  className="mx-auto inline-flex mt-2 relative bg-white min-w-sm max-w-2xl flex-col md:flex-row items-center justify-center border py-2 px-2 rounded-2xl gap-2 shadow-2xl focus-within:border-gray-300"
                  htmlFor="search-bar"
                >
                  <input
                    id="search-bar"
                    placeholder="Search books..."
                    className="px-6 py-2 w-full rounded-md flex-1 outline-none bg-white"
                    value={searchKeyword}
                    onChange={handleSearchChange}
                  />
                </label>
                <div>
                  <details className="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden">
                    <summary className="flex cursor-pointer items-center justify-between gap-2 p-4 text-gray-900 transition">
                      <span className="text-sm font-medium"> Topic </span>

                      <span className="transition group-open:-rotate-180">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="size-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                          />
                        </svg>
                      </span>
                    </summary>

                    <div className="border-t border-gray-200 bg-white">
                      <header className="flex items-center justify-between p-4">
                        <span className="text-sm text-gray-700">
                          {Object.values(filters).filter(Boolean).length}{" "}
                          Selected
                        </span>
                        <button
                          type="button"
                          className="text-sm text-gray-900 underline underline-offset-4"
                          onClick={() =>
                            setFilters({
                              science: false,
                              health: false,
                              business: false,
                            })
                          }
                        >
                          Reset
                        </button>
                      </header>

                      <ul className="space-y-1 border-t border-gray-200 p-4">
                        <li>
                          <label
                            htmlFor="science"
                            className="inline-flex items-center gap-2"
                          >
                            <input
                              type="checkbox"
                              id="science"
                              checked={filters.science}
                              onChange={handleFilterChange}
                              className="size-5 rounded border-gray-300"
                            />
                            <span className="text-sm font-medium text-gray-700">
                              {" "}
                              Science{" "}
                            </span>
                          </label>
                        </li>

                        <li>
                          <label
                            htmlFor="health"
                            className="inline-flex items-center gap-2"
                          >
                            <input
                              type="checkbox"
                              id="health"
                              checked={filters.health}
                              onChange={handleFilterChange}
                              className="size-5 rounded border-gray-300"
                            />
                            <span className="text-sm font-medium text-gray-700">
                              {" "}
                              Health{" "}
                            </span>
                          </label>
                        </li>

                        <li>
                          <label
                            htmlFor="business"
                            className="inline-flex items-center gap-2"
                          >
                            <input
                              type="checkbox"
                              id="business"
                              checked={filters.business}
                              onChange={handleFilterChange}
                              className="size-5 rounded border-gray-300"
                            />
                            <span className="text-sm font-medium text-gray-700">
                              {" "}
                              Business{" "}
                            </span>
                          </label>
                        </li>
                      </ul>
                    </div>
                  </details>
                </div>
              </div>

              <div className="lg:col-span-3">
                <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                  {filteredBooks.map((book) => (
                    <li key={book.key} className="relative">
                      <Link
                        to={`/product?title=${book.title}`}
                        className="group block overflow-hidden"
                      >
                        <img
                          src={
                            book.cover_edition_key
                              ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
                              : "https://via.placeholder.com/400x600.png?text=No+Cover+Available"
                          }
                          alt={book.title}
                          className="h-[350px] w-full object-cover rounded-lg overflow-hidden transition duration-500 group-hover:scale-105 sm:h-[450px]"
                        />
                      </Link>
                      <div className="relative bg-white pt-3">
                        <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                          {book.title}
                        </h3>

                        <p className="mt-2">
                          <span className="sr-only">Author(s)</span>
                          <span className="tracking-wider text-gray-900">
                            {book.author_name
                              ? String(
                                  book.author_name
                                    .map((author) => author)
                                    .join(", ")
                                ).slice(0, 50)
                              : book.author_alternative_name
                              ? String(
                                  book.author_alternative_name
                                    .map((author) => author)
                                    .join(", ")
                                ).slice(0, 50)
                              : "Unknown Author"}
                          </span>
                        </p>

                        <p className="mt-2 flex items-center justify-between">
                          <span>
                            <span className="sr-only">Publisher</span>
                            <span className="tracking-wider text-gray-900">
                              {book.first_publish_year
                                ? book.first_publish_year
                                : "Publisher info not available"}
                            </span>
                          </span>

                          <button
                            onClick={() => handleAddToCart(book)}
                            className="text-sm font-medium text-black bg-[#ff0] py-2 px-4 rounded-lg"
                          >
                            Add to Cart
                          </button>
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div
        className={`fixed top-20 right-0 left-0 w-[100vw] flex justify-center duration-500 z-[51] ${
          showPopup === true ? "top-20" : "top-[-100%]"
        }`}
      >
        <p className="bg-[#ff0] text-neutral-800 w-fit px-4 py-1 rounded-lg">
          Product added to cart!
        </p>
      </div>
    </div>
  );
};

export default Products;
