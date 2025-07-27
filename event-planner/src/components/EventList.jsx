import React from 'react';
import EventItem from './EventItem';

function EventList({ events, onToggleComplete, onEdit, onDelete, filter, searchTerm, currentTime }) {
  const filteredEvents = events.filter(event => {
    const isCompleted = event.isCompleted;
    const eventDateTime = new Date(event.date + (event.time ? `T${event.time}` : 'T00:00'));
    const now = new Date();

    const isOverdue = eventDateTime < now && !isCompleted;
    const isUpcoming = eventDateTime >= now && !isCompleted;

    let statusMatch = true;
    if (filter === 'completed') {
      statusMatch = isCompleted;
    } else if (filter === 'upcoming') {
      statusMatch = isUpcoming;
    } else if (filter === 'overdue') {
      statusMatch = isOverdue;
    }

    const lowerCaseSearchTerm = searchTerm.toLowerCase().trim();
    
    const searchMatch = event.eventName.toLowerCase().includes(lowerCaseSearchTerm) ||
                        (event.description && event.description.toLowerCase().includes(lowerCaseSearchTerm)) ||
                        (event.location && event.location.toLowerCase().includes(lowerCaseSearchTerm));

    return statusMatch && searchMatch;
  });

  const sortedEvents = [...filteredEvents].sort((a, b) => {
    const dateA = new Date(a.date + (a.time ? `T${a.time}` : ''));
    const dateB = new Date(b.date + (b.time ? `T${b.time}` : ''));

    if (a.isCompleted && !b.isCompleted) return -1;
    if (!a.isCompleted && b.isCompleted) return 1;
    if (a.isCompleted && b.isCompleted) return dateB - dateA;

    const isOverdueA = dateA < currentTime;
    const isOverdueB = dateB < currentTime;

    if (isOverdueA && !isOverdueB) return -1;
    if (!isOverdueA && isOverdueB) return 1;
    if (isOverdueA && isOverdueB) return dateA - dateB;

    return dateA - dateB;
  });

  const getFilteredTitle = (currentFilter) => {
    switch (currentFilter) {
      case 'all':
        return 'Semua Kegiatan';
      case 'upcoming':
        return 'Kegiatan Mendatang';
      case 'completed':
        return 'Kegiatan Selesai';
      case 'overdue':
        return 'Kegiatan Terlewat';
      default:
        return 'Kegiatan'; 
    }
  };

  return (
    <div className="space-y-3">{}
      <h2 className="text-xl font-heading font-bold text-glassTextDark">
        {getFilteredTitle(filter)}
      </h2>
      {sortedEvents.length === 0 ? (
        <p className="text-glassTextDark text-base text-center py-4">
          Tidak ada kegiatan yang cocok dengan kriteria Anda.
        </p>
      ) : (
        sortedEvents.map(event => (
          <EventItem
            key={event.id}
            event={event}
            onToggleComplete={onToggleComplete}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))
      )}
    </div>
  );
}

export default EventList;