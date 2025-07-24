import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, CalendarClock } from 'lucide-react'; // Ganti ikon di sini
import ActivityForm from '../components/ActivityForm';
import ActivityList from '../components/ActivityList';
import FilterBar from '../components/FilterBar';
import SearchBar from '../components/SearchBar';
import StatsBox from '../components/StatsBox';

const Home = ({
  activities,
  onAddActivity,
  onUpdateActivity,
  onDeleteActivity,
  searchTerm,
  onSearch,
  filterCategory,
  onFilter,
  darkMode,
  toggleDarkMode,
}) => {
  const [quote, setQuote] = useState('');

  const filtered = activities.filter((act) => {
    const matchTitle = act.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchCategory = filterCategory === 'All' || act.category === filterCategory;
    return matchTitle && matchCategory;
  });

  const doneCount = activities.filter((a) => a.isDone).length;
  const pendingCount = activities.filter((a) => !a.isDone).length;

  useEffect(() => {
    const quotes = [
      '📘 Plan smart, learn smarter.',
      '🌟 Small progress is still progress.',
      '🎯 Focus on goals, not obstacles.',
      '🧠 Upgrade your habits, upgrade your future.',
    ];
    setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f7f2ff] via-[#e3dafd] to-[#d8c7fa] dark:from-[#0f0c29] dark:via-[#302b63] dark:to-[#24243e] transition-all duration-500 text-gray-900 dark:text-white">
      <div className="max-w-6xl mx-auto px-6 py-10">

        {/* Mode Toggle */}
        <div className="flex justify-end mb-4">
          <button
            onClick={toggleDarkMode}
            className="px-4 py-2 rounded-full bg-zinc-200 dark:bg-zinc-700 hover:bg-zinc-300 dark:hover:bg-zinc-600 transition font-medium shadow"
          >
            {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
          </button>
        </div>

        {/* Hero Header */}
        <motion.div
          className="bg-white/30 dark:bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl p-8 mb-10 flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 relative">
            {/* Icon Bulat Berputar */}
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 8, ease: 'linear' }}
              className="w-14 h-14 rounded-full bg-gradient-to-tr from-purple-600 via-indigo-500 to-pink-500 shadow-xl flex items-center justify-center"
            >
              <CalendarClock className="w-6 h-6 text-white" />
            </motion.div>

            {/* Running Text + Deskripsi */}
            <div className="relative w-full sm:w-72 md:w-96 lg:w-[400px] overflow-hidden">
              {/* Running Text */}
              <motion.div
                className="absolute whitespace-nowrap text-4xl font-extrabold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent tracking-tight flex items-center gap-2"
                animate={{ x: ['100%', '-100%'] }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              >
                Edu-Time <Sparkles className="w-5 h-5 text-purple-400 animate-pulse" />
              </motion.div>

              {/* Deskripsi */}
              <div className="pt-10">
                <p className="text-sm text-zinc-700 dark:text-zinc-300">
                  Smart Activity & Time Manager for Students ✨
                </p>
              </div>
            </div>
          </div>

          {/* Quote */}
          <motion.p
            className="italic text-center text-zinc-600 dark:text-zinc-400 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            {quote}
          </motion.p>
        </motion.div>

        {/* StatsBox */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <StatsBox total={activities.length} done={doneCount} pending={pendingCount} />
        </motion.div>

        {/* Layout Grid */}
        <motion.div
          className="grid md:grid-cols-3 gap-6 mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="md:col-span-1">
            <ActivityForm onAdd={onAddActivity} />
          </div>

          <div className="md:col-span-2 space-y-4">
            <div className="flex flex-col md:flex-row justify-between gap-4">
              <SearchBar onSearch={onSearch} />
              <FilterBar onFilter={onFilter} />
            </div>

            <ActivityList
              activities={filtered}
              onUpdate={onUpdateActivity}
              onDelete={onDeleteActivity}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
