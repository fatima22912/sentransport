import './StatReseau.css';

function StatReseau({ lignes = [] }) {
  const totalLignes = lignes.length;
  const totalArrets = lignes.reduce((sum, ligne) => sum + Number(ligne.arrets || 0), 0);
  const lignePlusArrets = lignes.reduce((max, ligne) => {
    if (!max || Number(ligne.arrets) > Number(max.arrets)) {
      return ligne;
    }
    return max;
  }, null);

  return (
    <div className="stat-reseau">
      <div className="stat-card">
        <div className="stat-value">{totalLignes}</div>
        <div className="stat-label">lignes totales</div>
      </div>

      <div className="stat-card">
        <div className="stat-value">{totalArrets}</div>
        <div className="stat-label">arrêts totaux</div>
      </div>

      <div className="stat-card">
        <div className="stat-value">
          {lignePlusArrets ? `Ligne ${lignePlusArrets.numero}` : '-'}
        </div>
        <div className="stat-label">
          {lignePlusArrets
            ? `${lignePlusArrets.depart} → ${lignePlusArrets.arrivee} (${lignePlusArrets.arrets} arrêts)`
            : 'Aucune ligne'}
        </div>
      </div>
    </div>
  );
}

export default StatReseau;
