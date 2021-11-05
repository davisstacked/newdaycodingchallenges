// You've built an inflight entertainment system with on-demand movie streaming.

// Users on longer flights like to start a second movie right when their first one ends, but they complain that the plane usually lands before they can see the ending. So you're building a feature for choosing two movies whose total runtimes will equal the exact flight length.

// Write a function that takes an integer flightLength (in minutes) and an array of integers movieLengths (in minutes) and returns a boolean indicating whether there are two numbers in movieLengths whose sum equals flightLength.

// When building your function:

// Assume your users will watch exactly two movies
// Don't make your users watch the same movie twice
// Optimize for runtime over memory

const canTwoMoviesFillFlight = (flightLength, movieLengths) => {
  
  // Movie lengths we've seen so far
  const movieLengthsSeen = new Set();

  for (let i = 0; i < movieLengths.length; i++) {
    const firstMovieLength = movieLengths[i];

    const matchingSecondMovieLength = flightLength - firstMovieLength;
    if (movieLengthsSeen.has(matchingSecondMovieLength)) {
      return true;
    }

    movieLengthsSeen.add(firstMovieLength);
  }
  return false;
}

// Complexity: O(n) time, and O(n) space. 

const movieTimes = [20, 30, 50, 60, 40]
console.log(canTwoMoviesFillFlight(100, movieTimes))

// Bonus
// What if we wanted the movie lengths to sum to something close to the flight length (say, within 20 minutes)?
// What if we wanted to fill the flight length as nicely as possible with any number of movies (not just 2)?
// What if we knew that movieLengths was sorted? Could we save some space and/or time?
// What We Learned
// The trick was to use a set to access our movies by length, in O(1)O(1) time.

// Using hash-based data structures, like objects or sets, is so common in coding challenge solutions, it should always be your first thought. Always ask yourself, right from the start: "Can I save time by using an object?"