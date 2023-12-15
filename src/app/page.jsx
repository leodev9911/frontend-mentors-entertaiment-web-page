import HomeSection from "./components/HomeSection";
import Search from "./components/Search";

export default function Main() {
  return (
    <section className='flex flex-col gap-9'>
      <Search />
      <HomeSection />
    </section>
  )
}