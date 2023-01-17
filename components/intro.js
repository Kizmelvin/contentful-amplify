export default function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        Blog.
      </h1>
      <h4 className="text-left md:text-left text-lg mt-10 md:pl-8">
        A statically generated blog example using{" "}
        <a
          href="https://nextjs.org/"
          className="underline hover:text-success duration-200 transition-colors"
        >
          Next.js
        </a>
        ,{" "}
        <a
          href="https://www.contentful.com/"
          className="underline hover:text-success duration-200 transition-colors"
        >
          Contentful
        </a>
        , and{" "}
        <a
          href="https://aws.amazon.com/amplify/"
          className="underline hover:text-success duration-200 transition-colors"
        >
          AWS Amplify
        </a>{" "}
        for hosting.
      </h4>
    </section>
  );
}
