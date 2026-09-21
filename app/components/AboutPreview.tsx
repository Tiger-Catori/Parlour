import { Link } from "react-router";

const AboutPreview = () => {
  return (
    <section className="rounded-md mt-12 p-10 flex flex-col md:flex-row items-center gap-8 bg-gray-800">
      <img src="/images/profile.webp" alt="profile"
        className="w-32 h-32 rounded-full object-cover border-3 border-green-500 shadow-md" />

      <div>
        <h2 className="text-2xl font-bold text-white mb-2">
          About Me.
        </h2>
        <p className="text-gray-200 mb-4 max-w 4xl">
          Hi, my name is Michael. I am a software developer who's skills range from web and mobile apps to cloud computing.
        </p>
        <Link to='/about' className="inline-block text-green-400 hover:underline text-sm">
          Learn more about me.
        </Link>
      </div>
    </section>
  )
}
export default AboutPreview;
