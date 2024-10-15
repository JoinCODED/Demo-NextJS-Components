import cookies from "../cookies";
import CookieCard from "./CookieCard";

function CookieList() {
  const cookieCards = cookies.map((cookie) => (
    <CookieCard key={cookie.name + cookie.id} cookie={cookie} />
  ));
  return <div className="cookie-list">{cookieCards}</div>;
}

export default CookieList;
