import { images, posts } from "@/data/content";
import { ArrowButton, Photo, Reveal } from "@/components/site/ui";

export function BlogView() {
  return (
    <>
      <section className="wrap grid items-center gap-10 py-12 lg:grid-cols-2">
        <div>
          <p className="micro text-olive">Journal</p>
          <h1 className="display mt-4">Notes from the studio</h1>
          <p className="mt-5 max-w-md text-muted">
            Short essays for clients planning a visit. They are original notes for this site, not press coverage.
          </p>
          <ArrowButton to="/booking" className="mt-7">Book your appointment</ArrowButton>
        </div>
        <div className="hero-media">
          <Photo src={images.flowers} alt="White daisies and cream roses in a ceramic vase" ratio="portrait" className="rounded-[2rem]" priority />
        </div>
      </section>

      <div className="wrap space-y-14 pb-16">
        {posts.map((post) => (
          <Reveal key={post.id}>
            <article id={post.id} className="grid scroll-mt-28 items-start gap-6 border-t border-line pt-10 lg:grid-cols-[18rem_1fr] lg:gap-12">
              <Photo src={post.image} alt={post.alt} ratio="photo" className="zoom rounded-[2rem]" />
              <div className="min-w-0">
                <p className="micro text-olive">{post.kicker}</p>
                <h2 className="serif mt-3 text-3xl leading-tight md:text-4xl">{post.title}</h2>
                <p className="mt-4 text-lg text-muted">{post.lede}</p>
                {post.body.map((paragraph) => (
                  <p key={paragraph.slice(0, 32)} className="mt-4 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </>
  );
}
