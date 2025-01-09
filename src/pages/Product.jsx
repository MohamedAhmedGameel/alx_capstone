import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../rudex/cartSlice";

const ProductCard = () => {
  const dispatch = useDispatch();
  // Function to parse query parameters
  const getQueryParams = () => {
    const urlParams = new URLSearchParams(location.search);
    return urlParams.get("title");
  };

  const title = getQueryParams();

  useEffect(() => {
    if (title) {
      setLoading(true);
      setError(null);
      fetchBook(title);
    }
  }, [title]);

  // State to store the book data
  const [bookData, setBookData] = useState(null);

  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const handleAddToCart = (book) => {
    // Dispatch the book to the cart
    dispatch(addProduct({ ...book, quantity: 1 }));
    setShowPopup(true);

    // Hide the popup after 3 seconds
    setTimeout(() => setShowPopup(false), 3000);
  };

  // Function to fetch the book data from the API
  async function fetchBook(title) {
    try {
      const response = await fetch(
        `https://openlibrary.org/search.json?title=${title}&limit=1`
      );

      // Check if the request was successful
      if (!response.ok) {
        throw new Error("Failed to fetch book data");
      }

      const data = await response.json();
      setBookData(data.docs[0]);

      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  }

  // Render loading, error, or the book data
  if (loading) {
    return (
      <div className="py-16 min-h-screen flex items-center px-8 bg-gradient-to-r justify-center from-gray-100 via-gray-200 to-white">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-16 min-h-screen flex items-center px-8 bg-gradient-to-r justify-center from-gray-100 via-gray-200 to-white">
        Error: {error}
      </div>
    );
  }
  return (
    <section className="py-16 min-h-screen flex items-center px-8 bg-gradient-to-r from-gray-100 via-gray-200 to-white">
      <div className="mx-auto container grid place-items-center grid-cols-1 md:grid-cols-2 gap-10">
        <div className="flex justify-center">
          <img
            src={
              bookData.cover_edition_key
                ? `https://covers.openlibrary.org/b/id/${bookData.cover_i}-M.jpg`
                : "https://via.placeholder.com/400x600.png?text=No+Cover+Available"
            }
            alt={bookData.title}
            className="h-[36rem] shadow-lg rounded-xl transform transition-all duration-500 hover:scale-105"
          />
        </div>
        <div className="flex flex-col justify-between">
          <h3 className="text-4xl font-semibold text-gray-900 mb-4 tracking-wide leading-tight">
            {bookData.title}
          </h3>
          <h5 className="text-2xl font-semibold text-gray-800 mb-4">
            {bookData.first_publish_year
              ? bookData.first_publish_year
              : "Publisher info not available"}
          </h5>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed tracking-wide opacity-90">
            {bookData.first_sentence}
          </p>

          <div className="flex items-center gap-2 mb-4">
            <p className="text-sm font-semibold text-gray-700">
              {bookData.isbn ? bookData.isbn[0] : "ISBN info not available"}
            </p>
          </div>

          <div className="mb-4 flex items-center gap-4 md:w-1/2">
            <button
              onClick={() => handleAddToCart(bookData)}
              className="py-3 px-6 text-xs font-bold text-black uppercase bg-[#ff0] rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl focus:outline-none w-52"
            >
              Add to Cart
            </button>
          </div>
        </div>
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
    </section>
  );
};

export default ProductCard;
