import { Link } from "react-router";

const HeroComponent = ({ name = '[NAME]', text = 'Showcasing the potential of a new genre in social media!'}) => {
  return (
    <>
      <Hero name={name} text={text} />
    </>

  )
}
export default HeroComponent;

const Hero = ({ name, text }) => {
  return (
    <>
      <header className="text-center py-20 px-4 bg-gray-900 text-white transition-colors duration-300">
        <h2 className="text-4xl font-bold mb-4">
          Hello, my name is {name}.
        </h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-6">
          {text}
        </p>
        <div className="flex justify-center gap-4">
          <Link to='/projects' className="bg-green-600 text-white
            px-6 py-2 rounded hover:bg-green-700 transition">View Projects</Link>
          <Link to='/contact' className="border border-green-500 text-green-400
            px-6 py-2 rounded hover:bg-green-600
            hover:text-white transition">Contact Me</Link>
        </div>
      </header>
    </>
  )
}
