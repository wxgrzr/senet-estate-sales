export type Post = {
  _id: string;
  title: string;
  slug: { current: string };
  coverImage: string;
  _createdAt: string;
  image: string;
  eventDates: string[];
  location: {
    state: string;
    zip: string;
    city: string;
    streetAddress: string;
    coordinates: {
      alt: number;
    };
    fullAddress: string;
  };
};
