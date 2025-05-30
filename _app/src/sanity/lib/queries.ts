import { defineQuery, groq } from 'next-sanity';

export const settingsQuery = defineQuery(`*[_type == "settings"][0]`);
export const contactInfoQuery = defineQuery(`*[_type == "contactInfo"][0]`);
export const faqQuery = defineQuery(`*[_type == "faq"] | order(order asc) {
  question,
  answer
}`);

export const testimonialQuery = defineQuery(`*[_type == "reviews"][0]{
  items[]{
    rating,
    review,
    name
  }
}`);

const postFields = /* groq */ `
  _id,
  title,
  "slug": slug.current,
  coverImage,
  location,
  eventDates
`;

const linkReference = /* groq */ `
  _type == "link" => {
    "page": page->slug.current,
    "post": post->slug.current
  }
`;

const linkFields = /* groq */ `
  link {
      ...,
      ${linkReference}
      }
`;

export const getPageQuery = defineQuery(`
  *[_type == 'page' && slug.current == $slug][0]{
    _id,
    _type,
    name,
    slug,
    heading,
    subheading,
    "pageBuilder": pageBuilder[]{
      ...,
      _type == "callToAction" => {
        ${linkFields},
      },
      _type == "infoSection" => {
        content[]{
          ...,
          markDefs[]{
            ...,
            ${linkReference}
          }
        }
      },
    },
  }
`);

export const sitemapData = defineQuery(`
  *[_type == "page" || _type == "post" && defined(slug.current)] | order(_type asc) {
    "slug": slug.current,
    _type,
    _updatedAt,
  }
`);

export const allPostsQuery = defineQuery(`
  *[_type == "post" && defined(slug.current) && category == "upcoming"] |
  order(date desc, _createdAt desc) {
    ${postFields}
  }
`);

export const POSTS_QUERY = defineQuery(`*[
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
    content[]{
    ...,
    markDefs[]{
      ...,
      ${linkReference}
    }
  },
    ${postFields}
  }
`);

export const postPagesSlugs = defineQuery(`
  *[_type == "post" && defined(slug.current)]
  {"slug": slug.current}
`);

export const pagesSlugs = defineQuery(`
  *[_type == "page" && defined(slug.current)]
  {"slug": slug.current}
`);
