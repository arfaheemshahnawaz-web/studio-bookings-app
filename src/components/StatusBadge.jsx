function StatusBadge({ status }) {
  const normalized = status?.toLowerCase() || "";

  const classMap = {
    confirmed: "status-confirmed",
    pending:   "status-pending",
    cancelled: "status-cancelled",
  };

  const label = status
    ? status.charAt(0).toUpperCase() + status.slice(1).toLowerCase()
    : "Unknown";

  return (
    <span className={`status-badge ${classMap[normalized] || ""}`}>
      {label}
    </span>
  );
}

export default StatusBadge;
