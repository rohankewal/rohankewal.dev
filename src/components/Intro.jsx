export default function Intro() {
  return (
    <div className="py-16 md:py-24 text-center">
      <img
        src="/profile-pic.jpg"
        className="rounded-full w-28 md:w-36 h-28 md:h-36 mx-auto mb-6 border-2 border-gray-100 dark:border-gray-800"
        alt="Profile Picture"
      />
      <h1 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-3">
        Hi, I'm Rohan!
      </h1>
      <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400 font-medium mb-4">
        WordPress Web Developer
      </p>
      <p className="max-w-lg mx-auto text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
        I'm a full-stack web developer based in New Jersey with expertise in
        WordPress, Shopify, and SquareSpace. In my free time, I enjoy gaming,
        working out, and spending time with family.
      </p>
      <a
        href="/about"
        className="inline-block text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 transition-colors"
      >
        Learn more &rarr;
      </a>
    </div>
  );
}
