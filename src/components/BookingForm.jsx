import { useState } from "react";
import { validateBooking } from "../utils/validation";

function BookingForm({ addBooking, onClose }) {
  const [clientName, setClientName]   = useState("");
  const [sessionType, setSessionType] = useState("");
  const [date, setDate]               = useState("");
  const [status, setStatus]           = useState("confirmed");
  const [error, setError]             = useState("");
  const [success, setSuccess]         = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationError = validateBooking({ clientName, sessionType, date });
    if (validationError) {
      setError(validationError);
      return;
    }

    addBooking({ id: Date.now(), clientName, sessionType, date, status });

    setClientName("");
    setSessionType("");
    setDate("");
    setStatus("confirmed");
    setError("");
    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <div className="form-panel">
      <div className="form-panel-header">
        <span className="form-panel-title">New Booking</span>
        {onClose && (
          <button className="form-panel-close" onClick={onClose} aria-label="Close form">
            ✕
          </button>
        )}
      </div>

      <div className="form-panel-body">
        {success && (
          <p className="form-success" style={{ marginBottom: 12 }}>
            ✅ Booking added successfully.
          </p>
        )}

        <div className="form-grid">
          <div className="form-field">
            <label className="form-label" htmlFor="bf-client">Client name</label>
            <input
              id="bf-client"
              className="form-input"
              type="text"
              placeholder="e.g. Jordan Reyes"
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
            />
          </div>

          <div className="form-field">
            <label className="form-label" htmlFor="bf-session">Session type</label>
            <input
              id="bf-session"
              className="form-input"
              type="text"
              placeholder="e.g. Photography"
              value={sessionType}
              onChange={(e) => setSessionType(e.target.value)}
            />
          </div>

          <div className="form-field">
            <label className="form-label" htmlFor="bf-date">Date</label>
            <input
              id="bf-date"
              className="form-input"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>

          <div className="form-field">
            <label className="form-label" htmlFor="bf-status">Status</label>
            <select
              id="bf-status"
              className="form-select"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="confirmed">Confirmed</option>
              <option value="pending">Pending</option>
              <option value="cancelled">Cancelled</option>
            </select>
          </div>
        </div>

        <div className="form-footer">
          <button className="btn-primary" onClick={handleSubmit}>
            + Add booking
          </button>
          {error && (
            <span className="form-error">⚠ {error}</span>
          )}
        </div>
      </div>
    </div>
  );
}

export default BookingForm;
