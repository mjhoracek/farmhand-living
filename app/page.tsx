import Logo from "../components/atoms/svg/Logo";

export default function Home() {
  return (
    <div className="bg-[#1A1B1E] text-white">
      <header className="flex items-center justify-between px-8 py-6 text-xs uppercase tracking-[0.3em]">
        <Logo style={{ width: "140px" }} fill="#ffffff" />
        <nav className="flex items-center gap-8">
          <a className="opacity-70 transition hover:opacity-100" href="#about">
            About
          </a>
          <a className="opacity-70 transition hover:opacity-100" href="#contact">
            Contact
          </a>
        </nav>
      </header>

      <main className="flex min-h-screen flex-col items-center justify-center gap-6 px-6 text-center">
        <Logo style={{ width: "720px", maxWidth: "80vw" }} fill="#ffffff" />
        <p className="text-lg uppercase tracking-[0.35em] text-white/60">
          Welcome to Farmhand Living
        </p>
      </main>

      <section id="about" className="px-6 py-24 sm:px-10 md:px-16">
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-10">
          <div className="flex flex-col gap-4">
            <h2 className="text-xs uppercase tracking-[0.4em] text-white/60">
              About
            </h2>
            <h3 className="text-4xl font-semibold md:text-5xl">
              What We Are
            </h3>
            <p className="max-w-3xl text-lg text-white/70">
              Farmhand Living Inc is an integrated property management solution
              dedicated to securing comfortable, reliable, quality housing for
              sports teams.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-4xl font-semibold md:text-5xl">What We Do</h3>
            <p className="max-w-4xl text-lg text-white/70">
              Farmhand Living works on behalf of its teams and their affiliates
              to acquire properties that meet or exceed Housing Policy
              requirements. This streamlines operations, giving clubs a single
              vendor for all of their housing needs. Farmhand Living’s
              commitment to its partners doesn&apos;t end there, though...
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <p className="text-sm uppercase tracking-[0.35em] text-white/60">
              We also
            </p>
            <ul className="grid gap-4 text-base text-white/70 sm:grid-cols-2">
              <li>
                Furnish our units with quality furniture, televisions,
                kitchenware, and linens
              </li>
              <li>
                Provide full-time occupant support services in both English and
                Spanish for players and their families
              </li>
              <li>
                Work hand-in-hand with operations departments to facilitate all
                player move-ins and move-outs
              </li>
              <li>Handle all utility and vendor billing throughout the season</li>
              <li>
                Optimize team occupancy through preferred vendor terms and
                pricing
              </li>
              <li>
                Donate 1% of all proceeds to a local charity of the client
                organization&apos;s choosing
              </li>
            </ul>
          </div>

          <p className="text-lg font-medium text-white/80">
            We take care of everything related to housing so that operations
            departments can focus on winning.
          </p>
        </div>
      </section>

      <section id="contact" className="px-6 py-24 sm:px-10 md:px-16">
        <div className="mx-auto grid w-full max-w-5xl gap-16 md:grid-cols-[minmax(0,420px)_minmax(0,360px)] md:justify-center">
          <div className="flex flex-col gap-6">
            <h2 className="text-5xl font-semibold md:text-6xl">
              Let&apos;s Connect
            </h2>
            <div className="h-[3px] w-56 bg-[#e05a4f]" />
          </div>

          <div className="flex flex-col gap-8 text-white/80">
            <div className="grid gap-2">
              <h3 className="text-2xl font-semibold text-white md:text-3xl">
                Address
              </h3>
              <p>Farmhand Living Inc</p>
              <p>575 E Alluvial Ave Ste 101</p>
              <p>Fresno, CA 93720</p>
            </div>

            <div className="grid gap-2">
              <h3 className="text-2xl font-semibold text-white md:text-3xl">
                Email
              </h3>
              <a className="underline" href="mailto:info@farmhandliving.com">
                info@farmhandliving.com
              </a>
            </div>

            <div className="grid gap-2">
              <h3 className="text-2xl font-semibold text-white md:text-3xl">
                Phone
              </h3>
              <a className="underline" href="tel:5598012299">
                559.801.2299
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
