export interface MovieDetails {}

export interface MovieSearch {
  //   Search: Array<MovieDetails>;
  Search: [];
  totalResults: Number;
  Response: Boolean;
}

export interface MovieAbstract {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}
// "Title": "Breaking Bad",
//             "Year": "2008–2013",
//             "imdbID": "tt0903747",
//             "Type": "series",
//             "Poster": "https://m.med
