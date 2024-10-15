function CookieCard({ cookie }) {
  return (
    <div key={cookie.id} className="cookie-item">
      <img src={cookie.image} alt={cookie.name} className="cookie-image" />
      <p>{cookie.name}</p>
      <p>{cookie.price}</p>
      <button type="submit">SUBMIT</button>
    </div>
  );
}

export default CookieCard;
