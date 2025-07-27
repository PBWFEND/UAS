import React from 'react';

function EventItem({ event, onToggleComplete, onEdit, onDelete }) {
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('id-ID', options);
  };

  const now = new Date();
  const eventDateTime = new Date(`${event.date}T${event.time || '00:00'}`);

  const isPast = eventDateTime < now && !event.isCompleted;

  return (
    <div
      className={`
        bg-glassBgLight p-6 rounded-3xl shadow-glass-sm mb-4 flex flex-col md:flex-row justify-between items-start md:items-center
        backdrop-blur-sm border border-glassBorder
        transition-all duration-300 ease-in-out cursor-pointer
        ${event.isCompleted ? 'opacity-70' : ''}
        hover:bg-glassBgLight/70 hover:shadow-glass-md hover:scale-[1.01]
      `}
      onClick={() => onEdit(event)}
    >
      <div className="flex-1 mb-4 md:mb-0">
        <h3 className={`text-xl font-heading font-semibold text-glassTextDark ${event.isCompleted ? 'line-through text-textSecondary' : ''}`}>
          {event.eventName}
        </h3>
        <p className="text-glassTextDark/80 text-sm mt-2 font-body flex items-center">
          <span className="font-normal mr-1 text-glassTextDark">🗓️</span> {formatDate(event.date)}
          {event.time && <span className="ml-4 flex items-center"><span className="font-normal mr-1 text-glassTextDark">⏰</span> {event.time}</span>}
        </p>
        {event.location && (
          <p className="text-glassTextDark/80 text-sm mt-1 font-body flex items-center">
            <span className="font-normal mr-1 text-glassTextDark">📍</span> {event.location}
          </p>
        )}
        {event.description && (
          <p className="text-glassTextDark text-base mt-3 whitespace-pre-wrap font-body">{event.description}</p>
        )}
        {isPast && (
          <p className="text-danger text-xs font-semibold mt-2 px-2 py-1 bg-danger/10 rounded-full inline-block border border-danger/50">
            Kegiatan ini sudah terlewat!
          </p>
        )}
      </div>

      <div className="flex space-x-3 flex-wrap justify-end md:ml-4 mt-2 md:mt-0">
        <button
          onClick={(e) => { e.stopPropagation(); onToggleComplete(event.id); }}
          className={`
            py-2 px-4 rounded-lg text-glassTextLight font-semibold text-sm transition duration-200 ease-in-out shadow-glass-sm hover:shadow-glass-md
            ${event.isCompleted ? 'bg-warning hover:bg-amber-600' : 'bg-success hover:bg-emerald-600'}
          `}
        >
          {event.isCompleted ? 'Batalkan Selesai' : 'Tandai Selesai'}
        </button>

        <button
          onClick={(e) => { e.stopPropagation(); onEdit(event); }}
          className="bg-gradient-to-r from-primary to-secondary text-glassTextLight font-semibold py-2 px-4 rounded-lg text-sm transition duration-200 ease-in-out shadow-glass-sm hover:shadow-glass-md"
        >
          Edit
        </button>

        <button
          onClick={(e) => { e.stopPropagation(); onDelete(event.id, event.eventName); }}
          className="bg-danger hover:bg-red-600 text-glassTextLight font-semibold py-2 px-4 rounded-lg text-sm transition duration-200 ease-in-out shadow-glass-sm hover:shadow-glass-md"
        >
          Hapus
        </button>
      </div>
    </div>
  );
}

export default EventItem;