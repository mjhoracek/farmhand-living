import Logo from "../components/atoms/svg/Logo";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#1A1B1E]">
      <main className="flex min-h-screen w-full items-center justify-center px-6">
        <Logo style={{ width: "720px", maxWidth: "80vw" }} fill="#ffffff" />
      </main>
    </div>
  );
}
