import type { Post } from "../../../studio/sanity.types";
import { PostPreview } from "./_components/post-preview";
import { ArrowRightIcon } from "@sanity/icons";
import GridContainer from "@/app/_components/grid-container";
import Container from "@/app/_components/container";
import Hero from "@/app/_components/hero";

import { LinkButton } from "@/app/_components/link-button";
import Carousel from "@/app/_components/carousel";
import { OurServices } from "@/app/_components/our-services";
import { urlForImage } from "@/sanity/lib/utils";
import { sanityFetch } from "@/sanity/lib/live";
import ConsultationForm from "@/app/_components/consultation-form";

const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current) && category == "upcoming"
]|order(_createdAt desc)[0...4]{_id, title, slug, coverImage, location, eventDates}`;

export default async function IndexPage() {
  const { data: posts } = await sanityFetch({
    query: POSTS_QUERY,
  });

  const postImageUrl = (post: Post) =>
    post?.coverImage
      ? urlForImage(post.coverImage)?.width(550).height(310).url() || ""
      : "";

  return (
    <main id="content">
      <div id="hero">
        <Hero />
      </div>
      <div id="who-we-are">
        <Container>
          <section className="py-16 md:py-20 lg:py-24">
            <div className="grid items-center gap-8 md:grid-cols-2">
              <Carousel
                className="h-[250px] min-h-[300px] max-w-[600px]"
                altPrefix="who-we-are-section"
                srcs={{
                  0: "https://b2670080.smushcdn.com/2670080/wp-content/uploads/2022/03/2018-kleinerteam.jpg?lossy=0&strip=1&webp=1",
                  1: "https://images.unsplash.com/photo-1739813914275-a0952d33477b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                  2: "https://images.unsplash.com/photo-1584738766473-61c083514bf4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                }}
              />
              <div>
                <h2 className="mb-6 text-3xl font-extrabold tracking-tight md:text-4xl lg:text-5xl">
                  Who We Are
                </h2>
                <p className="mb-8 text-base text-gray-600 md:text-lg lg:text-xl">
                  We&apos;re a Michigan rooted team passionate about giving new
                  life to old treasures. With years of experience, we connect
                  stories and collectors.
                </p>
                <LinkButton
                  href="#our-services"
                  variant="button"
                  colors="secondary"
                  subvariant="solid"
                >
                  Our Services
                </LinkButton>
              </div>
            </div>
          </section>
        </Container>
      </div>

      <div className="bg-platinum" id="upcoming-estate-sales">
        <Container>
          <div className="pt-16 pb-12">
            <section className="relative m-5">
              <div className="flex justify-between">
                <h2 className="mb-8 text-4xl leading-[0.9] font-bold tracking-tighter md:text-6xl">
                  Upcoming Estate Sales
                </h2>
              </div>
              <div className="mb-12">
                <GridContainer>
                  {posts.map((post: Post) => {
                    return (
                      <div key={post._id}>
                        <PostPreview
                          title={post.title || ""}
                          coverImage={postImageUrl(post) as string}
                          slug={post.slug?.current || ""}
                          dates={post?.eventDates || []}
                          fullAddress={post.location?.fullAddress || ""}
                        />
                      </div>
                    );
                  })}
                </GridContainer>
                <div className="mt-8 flex justify-end">
                  <LinkButton
                    variant="text"
                    href="/upcoming-estate-sales"
                    className="inline-flex"
                  >
                    View all upcoming estate sales
                    <ArrowRightIcon width={24} height={24} />
                  </LinkButton>
                </div>
              </div>
            </section>
          </div>
        </Container>
      </div>

      <div id="ready-to-sell-with-us">
        <Container>
          <section className="py-16 md:py-20 lg:py-24">
            <div className="grid items-center gap-8 md:grid-cols-2">
              <div className="md:order-2">
                <Carousel
                  className="h-[250px] min-h-[300px] max-w-[600px]"
                  altPrefix="ready-to-sell-with-us-section"
                  srcs={{
                    0: "https://images.unsplash.com/photo-1511737561643-649a082cd8a2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    1: "https://images.unsplash.com/photo-1526714777143-799b30a29fdb?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    2: "https://images.unsplash.com/photo-1642415314611-3439fb991d14?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    3: "https://images.unsplash.com/photo-1641443631464-e2a3928b3f9c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    4: "https://images.unsplash.com/photo-1619984827929-a056b71e4a3b?q=80&w=2037&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                  }}
                />
              </div>
              <div className="md:order-1">
                <h2 className="mb-6 text-3xl font-extrabold tracking-tight md:text-4xl lg:text-5xl">
                  Ready to Sell With Us?
                </h2>
                <p className="mb-8 text-base text-gray-600 md:text-lg lg:text-xl">
                  We make hosting your estate sale easy, organized, and
                  profitable. Let us handle the hard part so you can focus on
                  what matters most.
                </p>
                <LinkButton
                  href="/schedule-consultation"
                  subvariant="solid"
                  colors="secondary"
                >
                  Schedule a Consultation
                </LinkButton>
              </div>
            </div>
          </section>
        </Container>
      </div>

      <div id="our-services" tabIndex={-1}>
        <OurServices />
      </div>

      {/* Consultation Form */}
      <div className="bg-platinum">
        <Container>
          <section className="py-16 md:py-20 lg:py-24">
            <div className="mx-auto max-w-screen-md px-4">
              <h2 className="mb-4 text-center text-4xl font-extrabold tracking-tight">
                Schedule a Consultation
              </h2>
              <p className="mb-8 text-center font-light sm:text-xl lg:mb-16">
                Downsizing or managing a loved one’s estate? We’re here to guide
                you with care and clarity. Schedule a consultation and let’s
                start the conversation.
              </p>
              <ConsultationForm />
            </div>
          </section>
        </Container>
      </div>
    </main>
  );
}
