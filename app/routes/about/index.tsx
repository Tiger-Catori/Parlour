import type { Route } from "./+types/index";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "The Parlour Website | About" },
    { name: "description", content: "Custom website development" },
  ];
}

const AboutPage = () => {
  return (
    <>
        <h2 className="text-3xl font-bold text-green-600 mb-2">
          Hey, I'm Michael
        </h2>
    </>
  );
};

export default AboutPage;
