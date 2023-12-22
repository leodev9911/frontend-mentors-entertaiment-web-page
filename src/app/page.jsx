import HomeSection from "../components/Home/HomeSection";
import Search from "../components/Shared/Search";

export default function Main() {
  return (
    <section className='flex flex-col gap-9'>
      <Search />
      <HomeSection />
    </section>
  )
}