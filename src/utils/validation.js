// src/utils/validation.js

export function validateBooking({
  clientName,
  sessionType,
  date,
}) {
  if (!clientName.trim()) {
    return "Client name is required";
  }

  if (!sessionType.trim()) {
    return "Session type is required";
  }

  if (!date) {
    return "Booking date is required";
  }

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  if (new Date(date) < today) {
    return "Booking date cannot be in the past";
  }

  return "";
}