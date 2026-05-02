import './Header.css';

function Header() {
  // 👉 Date du jour en français
  const date = new Date().toLocaleDateString('fr-FR');

  return (
    <header className="header">
      <h1 className="header-titre">SenTransport</h1>

      <p className="header-soustitle">
        Votre guide du transport en commun à Dakar
      </p>

      {/* 👉 Date affichée */}
      <p className="header-date">{date}</p>
    </header>
  );
}

export default Header;