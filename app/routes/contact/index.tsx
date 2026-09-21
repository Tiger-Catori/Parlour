import type { Route } from "./+types/index";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "The Parlour Website | Contact" },
    { name: "description", content: "Custom website development" },
  ];
}

const ContactPage = () => {
  return (
    <div className="max-w-3xl mx-auto mt-13 px-10 py-8 bg-green-200 rounded-lg">
      <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Contact Me</h2>
      <form className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-md font-medium text-gray-900">
            Full Name
          </label>
          <input
            type="text" id="name" name="name"
            className="w-full mt-1 px-4 py-2
            rounded-sm bg-white text-gray-900"/>
        </div>
        <div>
          <label htmlFor="email" className="block text-md font-medium text-gray-900">
            Email
          </label>
          <input
            type="email" id="email" name="email"
            className="w-full mt-1 px-4 py-2
            rounded-sm bg-white text-gray-900"/>
        </div>
        <div>
          <label htmlFor="subject" className="block text-md font-medium text-gray-900">
            Subject
          </label>
          <input
            type="text" id="subject" name="subject"
            className="w-full mt-1 px-4 py-2
            rounded-sm bg-white text-gray-900"/>
        </div>
        <div>
          <label htmlFor="message" className="block text-md font-medium text-gray-900">
            Message
          </label>
          <textarea
            id="message" name="message"
            className="w-full mt-1 px-4 py-2
            rounded-sm bg-white text-gray-900"/>
        </div>
        <button className="text-lg cursor-pointer w-full bg-green-600 text-white py-3 rounded-sm hover:bg-green-700">
          Send Message
        </button>
      </form>
    </div>
  )
}
export default ContactPage;
