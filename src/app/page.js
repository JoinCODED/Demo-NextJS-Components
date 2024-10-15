import CookieList from "./components/CookieList";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 font-[family-name:var(--font-geist-sans)]">
      <h1>Cookies</h1>
      <CookieList />
    </div>
  );
}
