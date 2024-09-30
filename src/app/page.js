import cookies from "./cookies";

export default function Home() {
  const cookiesList = cookies.map((cookie) => (
    <div key={cookie.id} className="cookie-item">
      <img src={cookie.image} alt={cookie.name} className="cookie-image" />
      <p>{cookie.name}</p>
      <p>{cookie.price}</p>
    </div>
  ));
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 font-[family-name:var(--font-geist-sans)]">
      <h1>Cookies</h1>
      <div className="cookie-list">{cookiesList}</div>
    </div>
  );
}
