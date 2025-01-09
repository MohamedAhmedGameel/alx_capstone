# Book Store App

A simple and modern book store app built using **React**, **Vite**, **Tailwind CSS**, and **React Redux Toolkit**. The app fetches books from the [Open Library API](https://openlibrary.org/), featuring search functionality, category filters by subject, and displays the book's publication year as a substitute for pricing. Additionally, the hero section of the site is styled with a random image from **Unsplash**.

## Features

- **Search functionality**: Search for books by title, author, or subject.
- **Filters**: Filter books by subject (e.g., Science, Health, Business).
- **Book Display**: Display books with their titles, authors, first publication year, and covers (if available).
- **No Price**: Since the Open Library API does not provide pricing data, the app uses the **first published year** as a substitute for price.
- **Hero Section**: Uses a random image from Unsplash as a background for the hero section.
- **Responsive Design**: Fully responsive layout built with Tailwind CSS.

## Tech Stack

- **React**: JavaScript library for building user interfaces.
- **Vite**: A fast build tool and development server.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **React Redux Toolkit**: A state management library for managing global state.
- **Open Library API**: A free API that provides book data.
- **Unsplash API**: Used for fetching random background images for the hero section.

## Issues and Challenges

While building this project, several challenges have arisen due to the restrictions and limitations related to both paid and free APIs. Here’s an overview of the current issues:

### 1. **Cannot Use Paid APIs Due to Local Regulations**

As a result of the Egyptian Central Bank’s regulations, international transactions are restricted, preventing the use of paid APIs that require payments or subscriptions. This limitation has forced us to rely on free APIs, which come with their own set of challenges. We aim to provide a functional and useful application while abiding by local financial regulations.

**Impact**:

- We are unable to use premium APIs, such as those from Google Books, Amazon, or other commercial book databases, which typically offer more accurate and detailed data.

### 2. **Unreliable Data from Free APIs**

The **Open Library API**, while free and open-source, occasionally returns **incorrect, incomplete**, or **corrupted data**. For example:

- Missing cover images for books.
- Inconsistent author or publication details.
- Missing ISBNs or invalid book entries.

As a result, some books in the app may have incorrect data or may not be available, even though they should be.

**Impact**:

- The app's data may not always be accurate, and users may encounter some missing or mismatched details for certain books.

### Workarounds

We have implemented a few strategies to minimize the impact of these issues:

- **Fallback Data**: For books that do not return the correct cover image or other details, we use placeholder images or default data (e.g., publication year as a substitute for price).
- **UI/UX Adjustments**: The user interface has been designed to gracefully handle missing or incorrect data, showing placeholders when necessary to ensure the app still functions smoothly.

### Future Improvements

We are constantly working to improve the app. Some ideas for overcoming these challenges include:

- **Additional Free Data Sources**: Exploring other free APIs or open datasets to improve the data quality.
- **Manual Data Updates**: Allowing users to contribute corrections or additions to the database, improving the app’s accuracy over time.
- **Caching and Data Integrity**: Implementing caching systems to store previously fetched books and reduce the chance of returning corrupted data in subsequent sessions.

## Installation

To run this project locally, follow these steps:

### 1. Clone the repository

```bash
git clone https://github.com/your-username/book-store-app.git
cd book-store-app
```
