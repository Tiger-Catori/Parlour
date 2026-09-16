import { Outlet } from "react-router";
import HeroComponent from "~/components/Hero";

const HomeLayout = () => {
  return (
    <>
      <HeroComponent name="Michael"/>
      <section className="max-w-6xl mx-auto px-6 my-8">
        <Outlet />
      </section>
    </>
  );
}
export default HomeLayout;
