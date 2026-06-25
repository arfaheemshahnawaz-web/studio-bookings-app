function EmptyState() {
  return (
    <div className="empty-state">
      <div className="empty-state-icon">📭</div>
      <h3>No bookings found</h3>
      <p>Try a different search term or status filter.</p>
    </div>
  );
}

export default EmptyState;
