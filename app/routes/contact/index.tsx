import type { Route } from "./+types/index";
import { Form } from "react-router";

export async function action({ request }: Route.ActionArgs) {
  const formData = await request.formData();
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const subject = formData.get('subject') as string;
  const message = formData.get('message') as string;

  const errors: Record<string, string> = {};

  if (!name) errors.name = 'Name is required';
  if (!subject) errors.subject = 'Subject is required';
  if (!message) errors.message = 'Message is required';

  if (!email) {
    errors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = 'Invalid email format';
  }

  if (Object.keys(errors).length > 0) {
    return {errors}
  }

  const data = {
    name,
    email,
    subject,
    message
  };

  return {message: 'Form submitted successfully', data}
}

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "The Parlour Website | Contact" },
    { name: "description", content: "Custom website development" },
  ];
}

const ContactPage = ({ actionData }: Route.ComponentProps) => {
  const errors = actionData?.errors || {};

  return (
    <div className="max-w-3xl mx-auto mt-13 px-10 py-8 bg-green-200 rounded-lg">
      <h2 className="text-3xl uppercase font-semibold text-gray-900 mb-4 text-center">Contact Me!</h2>
      <p className="text-md text-gray-900 mb-4 text-center">Here you can notify me of any queries.</p>
      {actionData?.message ? (
        <p className="mb-6 bg-indigo-500 text-white text-center font-semibold text-md
          rounded-sm shadow-md py-2">{actionData.message}</p>) : null}
      <Form method="post" className="space-y-6">
        <NameInput errors={errors} />
        <EmailInput errors={errors} />
        <SubjectInput errors={errors} />
        <MessageInput errors={errors} />
        <SubmitButton />
      </Form>
    </div>
  )
}
export default ContactPage;


const NameInput = ({errors}) => {
  return (
    <div>
      <label htmlFor="name" className="hidden block text-md font-normal text-gray-900">
        Full name
      </label>
      <input
        type="text" id="name" name="name" placeholder="Full name"
        className="w-full mt-1 px-4 py-2 border border-green-500
        rounded-sm bg-white text-gray-900"/>
      {errors.name && (
        <p className=" text-red-500 text-sm mt-1">
          {errors.name}
        </p>
      )}
    </div>
  )
}


const EmailInput = ({errors}) => {
  return (
    <div>
      <label htmlFor="email" className="hidden block text-md font-normal text-gray-900">
        Email address
      </label>
      <input
        type="email" id="email" name="email" placeholder="Email address"
        className="w-full mt-1 px-4 py-2 border border-green-500
        rounded-sm bg-white text-gray-900"/>
        {errors.email && (
          <p className=" text-red-500 text-sm mt-1">
            {errors.email}
          </p>
        )}
    </div>
  )
}

const SubjectInput = ({errors}) => {
  return (
    <div>
      <label htmlFor="subject" className="hidden block text-md font-normal text-gray-900">
        Subject
      </label>
      <input
        type="text" id="subject" name="subject" placeholder="Subject"
        className="w-full mt-1 px-4 py-2 border border-green-500
        rounded-sm bg-white text-gray-900"/>
        {errors.subject && (
          <p className=" text-red-500 text-sm mt-1">
            {errors.subject}
          </p>
        )}
    </div>
  )
}


const MessageInput = ({errors}) => {
  return (
    <div>
      <label htmlFor="message" className="hidden block text-md font-normal text-gray-900">
        Message
      </label>
      <textarea
        id="message" name="message" placeholder="Message"
        className="w-full mt-1 px-4 py-2 border border-green-500
        rounded-sm bg-white text-gray-900"/>
        {errors.message && (
          <p className=" text-red-500 text-sm mt-1">
            {errors.message}
          </p>
        )}
    </div>
  )
}


const SubmitButton = () => {
  return (
    <button className="text-md font-semibold uppercase cursor-pointer w-full bg-green-600 text-white py-3 rounded-sm hover:bg-green-700">
      Send Message
    </button>
  )
}
