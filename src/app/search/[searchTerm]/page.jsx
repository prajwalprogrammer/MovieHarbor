import Results from "@/components/Results";
import React from "react";

export default async function SearchPage({ params }) {
    console.log(params.searchTerm)
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${params.searchTerm}&include_adult=false&language=en-US`
  );

  if (!res.ok) {
    throw new Error("Error fetching Data");
  }
  const res1 = await res.json();
  const results = res1.results;
  console.log(results)
  return (
    <div>
      {results && results.length === 0 && (
        <h1 className="text-center mt-6">No Results Found</h1>
      )}
      {results && <Results result={results} />}
    </div>
  );
}
