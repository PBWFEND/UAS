import React from 'react';

function Dashboard({ events, currentTime }) {
  const totalEvents = events.length;
  const completedEvents = events.filter(event => event.isCompleted).length;

  const now = new Date();

  const upcomingEvents = events.filter(event => {
    const eventDateTime = new Date(`${event.date}T${event.time || '00:00'}`);
    return !event.isCompleted && eventDateTime >= now;
  }).length;

  const overdueEvents = events.filter(event => {
    const eventDateTime = new Date(`${event.date}T${event.time || '00:00'}`);
    return eventDateTime < now && !event.isCompleted;
  }).length;

  const statItemClass = "flex-1 p-5 bg-glassBgLight rounded-3xl text-center shadow-glass-md " +
                        "backdrop-blur-sm border border-glassBorder " +
                        "transition-all duration-200 ease-in-out cursor-pointer " +
                        "hover:bg-glassBgLight/70 hover:shadow-glass-lg " +
                        "active:bg-glassBgLight/50 " +
                        "focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 focus-within:ring-offset-transparent";

  const statLabelClass = "text-sm text-glassTextDark font-body"; 
  const statValueClass = "text-2xl font-heading font-bold mt-1 text-primary"; 

  const handleStatClick = (filterType) => {
    console.log(`Statistik ${filterType} diklik!`);
  };

  return (
    <div className="mb-8 p-7 bg-glassBgLight rounded-4xl shadow-glass-xl backdrop-blur-md border border-glassBorder animate-fadeIn">
      <h2 className="text-2xl font-heading font-bold text-glassTextDark mb-6 text-center">Ringkasan Kegiatan Anda</h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div
          className={`${statItemClass}`}
          tabIndex="0"
          onClick={() => handleStatClick('total')}
        >
          <p className={statLabelClass}>Total</p>
          <p className={`${statValueClass}`}>{totalEvents}</p>
        </div>
        <div
          className={`${statItemClass}`}
          tabIndex="0"
          onClick={() => handleStatClick('completed')}
        >
          <p className={statLabelClass}>Selesai</p>
          <p className={`${statValueClass} text-success`}>{completedEvents}</p>
        </div>
        <div
          className={`${statItemClass}`}
          tabIndex="0"
          onClick={() => handleStatClick('upcoming')}
        >
          <p className={statLabelClass}>Mendatang</p>
          <p className={`${statValueClass}`}>{upcomingEvents}</p>
        </div>
        <div
          className={`${statItemClass}`}
          tabIndex="0"
          onClick={() => handleStatClick('overdue')}
        >
          <p className={statLabelClass}>Terlewat</p>
          <p className={`${statValueClass} text-danger`}>{overdueEvents}</p>
        </div>
      </div>

      {totalEvents === 0 && (
        <p className="text-center text-glassTextDark/70 mt-4 font-body">
          Tambahkan kegiatan pertama Anda untuk melihat ringkasan di sini!
        </p>
      )}
    </div>
  );
}

export default Dashboard;