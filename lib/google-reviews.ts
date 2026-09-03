export type GoogleReview = {
  author: string;
  date: string;
  rating: number;
  text: string | null;
};

/**
 * Local snapshot of publicly displayed Google reviews.
 * Update this file when new reviews need to be published on the site.
 */
export const googleReviews = {
  rating: 5,
  totalReviews: 4,
  lastUpdated: "2026-09-03",
  reviews: [
    {
      author: "Hiago Oliveira",
      date: "01/09/2026",
      rating: 5,
      text: "Recomendo de olhos fechados!!!!",
    },
    {
      author: "Ruben Teixeira",
      date: "02/09/2026",
      rating: 5,
      text: "Profissionalismo em pessoa !",
    },
    {
      author: "Rafael Andrade",
      date: "02/09/2026",
      rating: 5,
      text: null,
    },
  ] satisfies GoogleReview[],
};
