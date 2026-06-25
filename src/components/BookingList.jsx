import BookingCard from "./BookingCard";
import EmptyState from "./EmptyState";

function BookingList({ bookings }) {
  if (bookings.length === 0) {
    return <EmptyState />;
  }

  return (
    <table className="booking-table">
      <thead>
        <tr>
          <th>Client</th>
          <th>Session type</th>
          <th>Date</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {bookings.map((booking) => (
          <BookingCard key={booking.id} booking={booking} />
        ))}
      </tbody>
    </table>
  );
}

export default BookingList;
