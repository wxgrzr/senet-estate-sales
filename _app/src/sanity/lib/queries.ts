import { defineQuery } from 'next-sanity';

// [0] for singleton docs
export const settingsQuery = defineQuery(`*[_type == "settings"][0]`);
export const contactInfoQuery = defineQuery(`*[_type == "contactInfo"][0]`);
export const testimonialQuery = defineQuery(`*[_type == "reviews"][0]{
  items[]{
    rating,
    review,
    name
  }
}`);

export const faqQuery = defineQuery(`*[_type == "faqs"][0]{
  items[] {
    question,
    answer
  }
}`);

const postFields = /* groq */ `
  _id,
  _updatedAt,
  "title": coalesce(title, "Untitled Estate Sale"),
  "slug": slug.current,
  coverImage,
  eventDates,
  location {
    fullAddress,
    coordinates {
      lat,
      lng
    }
  }
`;

export const allPostsQuery = defineQuery(`
  *[_type == "post" && defined(slug.current) && category == "upcoming"] |
  order(date desc, _createdAt desc) {
    ${postFields}
  }
`);

export const slicedPostsQuery = defineQuery(`*[
  _type == "post" && defined(slug.current) && category == "upcoming"
]|order(_createdAt desc)[0...12]{_id, title, slug, coverImage, location, eventDates}`);

export const morePostsQuery = defineQuery(`
  *[_type == "post" && _id != $skip && defined(slug.current)]
    | order(date desc, _updatedAt desc) [0...$limit] {
    ${postFields}
  }
`);

export const postQuery = defineQuery(`
  *[_type == "post" && slug.current == $slug] [0] {
    body[]{...},
    gallery[]{...},
    ${postFields}
  }
`);

export const markerPostsQuery = defineQuery(`
  *[
    _type == "post" &&
    defined(slug.current) &&
    category == "upcoming" &&
    defined(location.coordinates.lat) &&
    defined(location.coordinates.lng)
  ]{
    _id,
    "title": coalesce(title, "Untitled Estate Sale"),
    "slug": slug.current,
    location {
      fullAddress,
      coordinates {
        lat,
        lng
      }
    }
  }
`);

export const postPagesSlugs = defineQuery(`
  *[_type == "post" && defined(slug.current)]
  {"slug": slug.current}
`);

export const sitemapData = defineQuery(`
  *[_type == "post" && defined(slug.current)] | order(_type asc) {
    "slug": slug.current,
    _type,
    _updatedAt,
  }
`);
