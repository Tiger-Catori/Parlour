import type { Route } from "./+types/index";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "The Parlour Website | Contact" },
    { name: "description", content: "Custom website development" },
  ];
}

const ContactPage = () => {
  return (
    <>
        <h2 className="text-3xl font-bold text-green-600 mb-8 text-center">Contact Me</h2>
    </>
  )
}
export default ContactPage;
