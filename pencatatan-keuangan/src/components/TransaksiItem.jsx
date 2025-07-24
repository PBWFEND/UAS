import { useState } from 'react';
import { formatCurrency, formatDate } from '../utils/helpers';
import './TransaksiItem.css';

function TransaksiItem({ transaksi, onUpdate, onDelete }) {
  const [editMode, setEditMode] = useState(false);
  const [editData, setEditData] = useState({ ...transaksi });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    if (!editData.keterangan || !editData.nominal) {
      alert("Semua field wajib diisi!");
      return;
    }
    
    onUpdate({
      ...editData,
      nominal: Number(editData.nominal),
      updatedAt: new Date().toISOString()
    });
    setEditMode(false);
  };

  return (
    <article className={`transaction-card ${transaksi.jenis}`}>
      {editMode ? (
        <div className="edit-form">
          <div className="form-group">
            <label htmlFor={`keterangan-${transaksi.id}`}>Keterangan</label>
            <input
              id={`keterangan-${transaksi.id}`}
              name="keterangan"
              value={editData.keterangan}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor={`nominal-${transaksi.id}`}>Nominal</label>
            <input
              id={`nominal-${transaksi.id}`}
              name="nominal"
              type="number"
              value={editData.nominal}
              onChange={handleChange}
              min="0"
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor={`jenis-${transaksi.id}`}>Jenis</label>
            <select
              id={`jenis-${transaksi.id}`}
              name="jenis"
              value={editData.jenis}
              onChange={handleChange}
              required
            >
              <option value="pemasukan">Pemasukan</option>
              <option value="pengeluaran">Pengeluaran</option>
            </select>
          </div>
          
          <div className="form-actions">
            <button 
              type="button"
              onClick={() => setEditMode(false)}
              className="secondary-button"
            >
              Batal
            </button>
            <button 
              type="button"
              onClick={handleSave}
              className="primary-button"
            >
              Simpan Perubahan
            </button>
          </div>
        </div>
      ) : (
        <>
          <header className="transaction-header">
            <h3>{transaksi.keterangan}</h3>
            <p className={`amount ${transaksi.jenis}`}>
              {transaksi.jenis === 'pemasukan' ? '+' : '-'}
              {formatCurrency(transaksi.nominal)}
            </p>
          </header>
          
          <div className="transaction-meta">
            <span className={`badge ${transaksi.jenis}`}>
              {transaksi.jenis === 'pemasukan' ? 'Pemasukan' : 'Pengeluaran'}
            </span>
            <time dateTime={transaksi.createdAt}>
              {formatDate(transaksi.createdAt)}
            </time>
          </div>
          
          <footer className="transaction-actions">
            <button 
              onClick={() => setEditMode(true)}
              className="edit-button"
              aria-label="Edit transaksi"
            >
              Edit
            </button>
            <button 
              onClick={() => onDelete(transaksi.id)}
              className="delete-button"
              aria-label="Hapus transaksi"
            >
              Hapus
            </button>
          </footer>
        </>
      )}
    </article>
  );
}

export default TransaksiItem;