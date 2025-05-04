import { PostPreview } from "@/app/_components/post-preview";
import { Post } from "../../../../studio/sanity.types";
// import { sanityFetch } from '@/sanity/live';
// import { urlFor } from '@/utils/urlFor';
import { Breadcrumbs } from "@/app/_components/breadcrumbs";
import { sanityFetch } from "@/sanity/lib/live";
import { urlForImage } from "@/sanity/lib/utils";

const POSTS_QUERY = `*[
  _type == "post" && defined(slug.current) && category == "upcoming"
]|order(_createdAt desc)[0...12]{_id, title, slug, coverImage, location, eventDates}`;

export default async function UpcomingEstateSales() {
  const { data: posts } = await sanityFetch({
    query: POSTS_QUERY,
  });

  const postImageUrl = (post: Post) =>
    post?.coverImage
      ? urlForImage(post.coverImage)?.width(550).height(310).url() || ""
      : "";

  return (
    <div className="py-8 md:py-20 lg:py-24">
      <div className="hidden md:block">
        {" "}
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Upcoming Estate Sales", href: "/upcoming-estate-sales" },
          ]}
        />
      </div>
      <section className="py-2 md:py-4 lg:py-8">
        <div className="mb-8">
          <h2 className="text-5xl font-bold leading-[0.9] tracking-tighter md:text-6xl">
            Upcoming Estate Sales
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="flex h-[30lvh] items-center justify-center border md:h-full">
            <p>TODO: map area</p>
          </div>
          <div className="grid grid-cols-subgrid gap-8 py-2 md:row-start-1 md:py-0 lg:grid-cols-2 lg:gap-4">
            {posts.map((post: Post) => {
              return (
                <div key={post._id}>
                  <PostPreview
                    title={post.title || ""}
                    coverImage={postImageUrl(post) as string}
                    slug={post?.slug?.current || ""}
                    dates={post.eventDates || []}
                    fullAddress={post?.location?.fullAddress as string}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
