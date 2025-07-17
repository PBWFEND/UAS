import { useState } from 'react';
import './FormTransaksi.css';

function FormTransaksi({ onAdd, onCancel }) {
  const [formData, setFormData] = useState({
    keterangan: '',
    nominal: '',
    jenis: 'pemasukan'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.keterangan || !formData.nominal) {
      alert("Semua field wajib diisi!");
      return;
    }

    const data = {
      id: String(+new Date()),
      ...formData,
      nominal: Number(formData.nominal),
      tanggal: new Date().toLocaleDateString('id-ID', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
      })
    };

    onAdd(data);
    setFormData({
      keterangan: '',
      nominal: '',
      jenis: 'pemasukan'
    });
  };

  return (
    <form onSubmit={handleSubmit} className="transaction-form">
      <h2 className="form-title">Tambah Transaksi</h2>
      
      <div className="form-group">
        <label htmlFor="keterangan">Keterangan</label>
        <input
          id="keterangan"
          name="keterangan"
          type="text"
          placeholder="Contoh: Gaji Bulanan"
          value={formData.keterangan}
          onChange={handleChange}
          className="form-input"
          required
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="nominal">Nominal (Rp)</label>
        <input
          id="nominal"
          name="nominal"
          type="number"
          placeholder="100000"
          value={formData.nominal}
          onChange={handleChange}
          className="form-input"
          required
          min="0"
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="jenis">Jenis Transaksi</label>
        <select
          id="jenis"
          name="jenis"
          value={formData.jenis}
          onChange={handleChange}
          className="form-select"
          required
        >
          <option value="pemasukan">Pemasukan</option>
          <option value="pengeluaran">Pengeluaran</option>
        </select>
      </div>
      
      <div className="form-actions">
        {onCancel && (
          <button 
            type="button" 
            onClick={onCancel}
            className="cancel-button"
          >
            Batal
          </button>
        )}
        <button type="submit" className="submit-button">
          Simpan Transaksi
        </button>
      </div>
    </form>
  );
}

export default FormTransaksi;