const moviesData = [
  {
    title: "Shrek 4",
    duration: "1h 30m",
    category: "Animation, Comedy",
    rating: 4
  },
  {
    title: "Black Panther",
    duration: "45m",
    category: "Superhero",
    rating: 5
  },
  {
    title: "Bourne Ultimatum",
    duration: "1h 10m",
    category: "Action",
    rating: 3
  },
  {
    title: "Avengers - Infinity Wars II",
    duration: "2h 30m",
    category: "Superhero",
    rating: 4
  },
  {
    title: "Fast and Furious 5",
    duration: "1h 35m",
    category: "Action",
    rating: 2
  }
];

// title * * *
// Bourne Ultimatum * * *

moviesData.map((data, idx) => {
  const title_movies = data.title;
  const rating_movies = data.rating;
  let stars = "";
  for (let m = 0; m < rating_movies; m++) {
    stars += " * ";
  }
  console.log(`${title_movies}  ${stars}`);
});
