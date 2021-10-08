export type Genre = {
  name: string;
};

export type Award = {
  name: string;
  year: number;
};

export type Movie = {
  name: string;
  overview: string;
  release_date: Date;
  director: string;
  genres: Genre[];
  awards: Award[];
  adults: boolean;
};
