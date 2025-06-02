const API_KEY = "b68b0b0d2de8689dedc7e7fbf7c0445b";
const BASE_URL = "https://www.themoviedb.org/3";

export const getPopularMovies = async () => {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  const data = await response.json();
  return data.results;
};

export const searchMovies = async (query) => {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
      query
    )}`
  );
  const data = await response.json();
  return data.results;
};

// export const getPopularMovies = async () => {
//     try {
//         const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);

//         if (!response.ok) {
//             throw new Error("Failed to fetch popular movies");
//         }

//         const data = await response.json();
//         return data.results;

//     } catch (error) {
//         console.error("Error fetching popular movies:", error);
//         return [];
//     }
// };


// export const searchMovies = async (query) => {
//     try {
//         const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);

//         if (!response.ok) {
//             throw new Error("Failed to search movies");
//         }

//         const data = await response.json();
//         return data.results;

//     } catch (error) {
//         console.error("Error searching movies:", error);
//         return [];
//     }
// };  