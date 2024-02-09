import NavBar from '../../components/Shared/Navbar'

export default function MainAppLayout({ children }) {
    return (
      <>
        <header>
          <NavBar />
        </header>
        <section className='py-6 lg:p-8 lg:pr-0 lg:pb-0 w-full lg:overflow-auto lg:scrollbar-none'>
            {children}
        </section>
      </>
    )
}