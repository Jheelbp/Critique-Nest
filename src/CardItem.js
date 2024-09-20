
function CardItem({ src, text, label, path }) {
    return (
      <li className="card">
        <a href={path}>
          <img src={src} alt={label} className="card__image" />
          <div className="card__info">
            <h2>{label}</h2>
            <p>{text}</p>
          </div>
        </a>
      </li>
    );
  }
  export default CardItem;