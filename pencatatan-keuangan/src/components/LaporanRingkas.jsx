import { formatCurrency } from '../utils/helpers';
import './LaporanRingkas.css';

function LaporanRingkas({ saldo, pemasukan, pengeluaran }) {
  return (
    <div className="summary-cards">
      <div className="summary-card saldo">
        <h3>Saldo</h3>
        <p className={saldo >= 0 ? 'positive' : 'negative'}>
          {formatCurrency(saldo)}
        </p>
      </div>
      
      <div className="summary-card pemasukan">
        <h3>Pemasukan</h3>
        <p className="positive">{formatCurrency(pemasukan)}</p>
      </div>
      
      <div className="summary-card pengeluaran">
        <h3>Pengeluaran</h3>
        <p className="negative">{formatCurrency(pengeluaran)}</p>
      </div>
    </div>
  );
}

export default LaporanRingkas;