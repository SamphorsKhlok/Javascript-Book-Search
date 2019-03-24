export class Book {
  cover: Cover = new Cover();
  title: string;
  author: string;
  releaseDate: string;
  pages: number;
  link: string;

  constructor() {}
}

export class Cover {
  large: string;
  small: string;
}

// object reference
// {
//   "cover": {
//   "large": "https://covers.oreillystatic.com/images/9780596517748/lrg.jpg",
//     "small": "https://covers.oreillystatic.com/images/9780596517748/cat.gif"
// },
//   "title": "JavaScript: The Good Parts",
//   "author": "Douglas Crockford",
//   "releaseDate": "12/2008",
//   "pages": 172,
//   "link": "http://shop.oreilly.com/product/9780596517748.do"
// },
