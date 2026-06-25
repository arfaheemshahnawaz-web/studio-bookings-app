import StatusBadge from "./StatusBadge";

/* Maps session type keywords → pill style class */
function getSessionClass(type) {
  const t = type?.toLowerCase() || "";
  if (t.includes("photo"))   return "session-photography";
  if (t.includes("podcast")) return "session-podcast";
  if (t.includes("video"))   return "session-video";
  if (t.includes("music"))   return "session-music";
  return "session-default";
}

/* Initials + background color from name */
function getAvatarStyle(name) {
  const palettes = [
    { bg: "#ede9fe", color: "#5b21b6" },
    { bg: "#e0f2fe", color: "#0369a1" },
    { bg: "#fef3c7", color: "#92400e" },
    { bg: "#fce7f3", color: "#9d174d" },
    { bg: "#dcfce7", color: "#166534" },
    { bg: "#fff7ed", color: "#9a3412" },
  ];
  const index = (name?.charCodeAt(0) || 0) % palettes.length;
  return palettes[index];
}

function getInitials(name) {
  if (!name) return "?";
  const parts = name.trim().split(" ");
  return parts.length >= 2
    ? parts[0][0].toUpperCase() + parts[1][0].toUpperCase()
    : parts[0][0].toUpperCase();
}

function formatDate(dateStr) {
  if (!dateStr) return "—";
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function BookingCard({ booking }) {
  const avatarStyle = getAvatarStyle(booking.clientName);
  const sessionClass = getSessionClass(booking.sessionType);

  return (
    <tr>
      {/* Client */}
      <td>
        <div className="client-cell">
          <div
            className="client-avatar"
            style={{ background: avatarStyle.bg, color: avatarStyle.color }}
          >
            {getInitials(booking.clientName)}
          </div>
          <div>
            <div className="client-name">{booking.clientName}</div>
            <div className="client-email">
              {booking.clientName?.toLowerCase().replace(" ", ".") + "@email.com"}
            </div>
          </div>
        </div>
      </td>

      {/* Session type */}
      <td>
        <span className={`session-pill ${sessionClass}`}>
          {booking.sessionType}
        </span>
      </td>

      {/* Date */}
      <td className="date-cell">{formatDate(booking.date)}</td>

      {/* Status */}
      <td>
        <StatusBadge status={booking.status} />
      </td>
    </tr>
  );
}

export default BookingCard;
