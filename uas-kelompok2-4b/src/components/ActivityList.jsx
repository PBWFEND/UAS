// File: src/components/ActivityList.jsx
import ActivityItem from './ActivityItem';

const ActivityList = ({ activities, onUpdate, onDelete }) => {
  if (activities.length === 0) {
    return <p className="text-center text-gray-500 mt-6">Tidak ada aktivitas yang ditemukan.</p>;
  }

  return (
    <div className="mt-6 grid gap-4">
      {activities.map((activity) => (
        <ActivityItem 
          key={activity.id} 
          data={activity} 
          onUpdate={onUpdate} 
          onDelete={onDelete} 
        />
      ))}
    </div>
  );
};

export default ActivityList;