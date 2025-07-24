// File: src/components/StatsBox.jsx
import { FaListAlt, FaCheckCircle, FaHourglassHalf } from 'react-icons/fa';

const StatsBox = ({ total, done, pending }) => {
  const stats = [
    {
      label: 'Total Aktivitas',
      value: total,
      icon: <FaListAlt className="text-white text-xl" />,
      bg: 'from-purple-500 via-pink-500 to-red-500',
    },
    {
      label: 'Selesai',
      value: done,
      icon: <FaCheckCircle className="text-white text-xl" />,
      bg: 'from-green-400 via-green-500 to-green-600',
    },
    {
      label: 'Belum Selesai',
      value: pending,
      icon: <FaHourglassHalf className="text-white text-xl" />,
      bg: 'from-yellow-400 via-orange-400 to-red-400',
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
      {stats.map((stat, i) => (
        <div
          key={i}
          className={`rounded-2xl p-5 text-white shadow-xl bg-gradient-to-br ${stat.bg} relative overflow-hidden backdrop-blur-md border border-white/10 transition-all`}
        >
          <div className="flex items-center gap-3">
            <div className="bg-white/20 p-3 rounded-full">
              {stat.icon}
            </div>
            <div>
              <p className="text-sm opacity-90">{stat.label}</p>
              <h2 className="text-3xl font-bold drop-shadow-sm">{stat.value}</h2>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsBox;
