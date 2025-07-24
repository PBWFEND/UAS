import TransaksiItem from './TransaksiItem';
import './TransaksiList.css';

function TransaksiList({ transaksiList, onUpdate, onDelete }) {
  if (transaksiList.length === 0) return (
    <div className="empty-state">
      <p>📭 Tidak ada transaksi</p>
      <p>Mulailah dengan menambahkan transaksi baru</p>
    </div>
  );

  return (
    <div className="transactions-list">
      <h2 className="section-title">Daftar Transaksi</h2>
      <div className="transactions-grid">
        {transaksiList.map((transaksi) => (
          <TransaksiItem
            key={transaksi.id}
            transaksi={transaksi}
            onUpdate={onUpdate}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
}

export default TransaksiList;