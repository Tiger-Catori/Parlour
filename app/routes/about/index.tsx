import type { Route } from "./+types/index";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "The Parlour Website | About" },
    { name: "description", content: "Custom website development" },
  ];
}

const AboutPage = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 bg-green-200 rounded-lg">
      {/* Intro */}
      <div className="flex flex-col md:flex-row md:items-start items-center gap-10 mb-12">
        <img src="/images/profile.webp" alt="profile"
          className="w-40 h-40 rounded-full object-cover border-3 border-green-500 shadow-md" />
      </div>

      <div className="mb-6">
        <h1 className="text-3xl font-semibold text-gray-900 mb-2">
          Hello, I'm Michael
        </h1>
        <p className="text-gray-900 text-lg">
          A software developer who's skills range from web and mobile apps to cloud computing.
        </p>
      </div>

      {/* Bio Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          My Mission
        </h2>
        <p className="text-gray-800 leadind-releaxed">
          Error deleniti doloremque est voluptatem voluptas veritatis. Blanditiis ut nisi unde nam ut iure et. Adipisci culpa ut velit placeat sed hic sunt. Dignissimos incidunt odit impedit quae. Aut nemo repellendus quos itaque facere minim
        </p>
      </div>

      {/* Tech Stack */}
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">
        Tech Stack I Use.
      </h2>
      <ul className="flex flex-wrap gap-4 text-sm text-gray-900">
        {[
          'React',
          'Next.js',
          'Java',
          'Kotlin',
          'XML',
          'Springboot',
          'Flask',
          'Python',
          'JavaScript',
          'HTML5',
          'CSS3',
          'SQL',
          'Docker'
        ].map((tech) => (
          <li key={tech} className="text-white bg-green-600 py-2 px-4 rounded-md">
            {tech}
          </li>
          ))}
      </ul>
    </div>
  );
};

export default AboutPage;
