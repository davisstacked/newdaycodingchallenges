// I want to learn some big words so people think I'm smart.

// I opened up a dictionary to a page in the middle and started flipping through, looking for words I didn't know. I put each word I didn't know at increasing indices in a huge array I created in memory. When I reached the end of the dictionary, I started from the beginning and did the same thing until I reached the page I started at.

// Now I have an array of words that are mostly alphabetical, except they start somewhere in the middle of the alphabet, reach the end, and then start from the beginning of the alphabet. In other words, this is an alphabetically ordered array that has been "rotated." For example:

const words = [
  'ptolemaic',
  'retrograde',
  'supplant',
  'undulate',
  'xenoepist',
  'asymptote',  // <-- rotates here!
  'babka',
  'banoffee',
  'engender',
  'karpatka',
  'othellolagkage',
];

// Write a function for finding the index of the "rotation point," which is where I started working from the beginning of the dictionary. This array is huge (there are lots of words I don't know) so we want to be efficient here.

// To keep things simple, you can assume all words are lowercase.

// Solution
// This is a modified version of binary search. ↴ At each iteration, we go right if the item we're looking at is greater than the first item and we go left if the item we're looking at is less than the first item.

// We keep track of the lower and upper bounds on the rotation point, calling them floorIndex and ceilingIndex (initially we called them "floor" and "ceiling," but because we didn't imply the type in the name we got confused and created bugs). When floorIndex and ceilingIndex are directly next to each other, we know the floor is the last item we added before starting from the beginning of the dictionary, and the ceiling is the first item we added after.

const findRotationPoint = (words) => {
  const firstWord = words[0];

  let floorIndex = 0;
  let ceilingIndex = words.length - 1;

  while (floorIndex < ceilingIndex) {

    // guess a point halfway between floor and ceiling
    const guessIndex = Math.floor(floorIndex + ((ceilingIndex - floorIndex) / 2));

    // if guess comes after first word or is the first word
    if (words[guessIndex] >= firstWord) {
      // Go right 
      floorIndex = guessIndex;
    } else {

      // go left
      ceilingIndex = guessIndex;
    }

    // If floor and ceiling have converged
    if (floorIndex + 1 === ceilingIndex) {
      
      // Between floor and ceiling is where we flipped to the beginning
      //So ceiling is alphabetically first
      break;
    }
  }
  return ceilingIndex;
}

// 0(lg n) time complexity 0(1) space complexity