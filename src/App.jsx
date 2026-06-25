import { useState } from "react";

import bookingsData from "./data/bookings";
import BookingList from "./components/BookingList";
import BookingForm from "./components/BookingForm";
import CalendlySection from "./components/CalendlySection";
import { FilterBar, SearchBar, SortDropdown } from "./components/Controls";

import "./styles/App.css";

const NAV_ITEMS = [
  { icon: "⊞", label: "Dashboard", active: true },
];

function StatCard({ label, value, delta, deltaType, valueColor }) {
  return (
    <div className="stat-card">
      <div className="stat-label">{label}</div>
      <div className="stat-value" style={valueColor ? { color: valueColor } : {}}>
        {value}
      </div>
      {delta && (
        <div className={`stat-delta ${deltaType || ""}`}>{delta}</div>
      )}
    </div>
  );
}

function App() {
  const [bookings, setBookings] = useState(bookingsData);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [sortOrder, setSortOrder] = useState("newest");
  const [showForm, setShowForm] = useState(false);
  const [showCalendly, setShowCalendly] = useState(false);

  const filteredBookings = bookings
    .filter((b) => {
      const matchesSearch = b.clientName
        .toLowerCase()
        .includes(search.toLowerCase());
      const matchesFilter =
        filter === "all" || b.status.toLowerCase() === filter.toLowerCase();
      return matchesSearch && matchesFilter;
    })
    .sort((a, b) =>
      sortOrder === "newest"
        ? new Date(b.date) - new Date(a.date)
        : new Date(a.date) - new Date(b.date)
    );

  const addBooking = (newBooking) => setBookings([...bookings, newBooking]);

  const confirmed = bookings.filter((b) => b.status.toLowerCase() === "confirmed").length;
  const pending   = bookings.filter((b) => b.status.toLowerCase() === "pending").length;

  return (
    <div className="dashboard">
      {/* ── Sidebar ── */}
      <aside className="sidebar">
        <div className="sidebar-logo">
          <div className="sidebar-logo-mark">
            <div>
              <div className="sidebar-logo-text">Studio</div>
              <div className="sidebar-logo-sub">Workspace</div>
            </div>
          </div>
        </div>

        <nav className="sidebar-nav">
          <div className="sidebar-section-label">Main</div>
          {NAV_ITEMS.map((item) => (
            <button
              key={item.label}
              className={`sidebar-item ${item.active ? "active" : ""}`}
            >
              <span className="sidebar-item-icon">{item.icon}</span>
              {item.label}
              {item.badge && (
                <span className="sidebar-badge">{bookings.length}</span>
              )}
            </button>
          ))}

        </nav>     
      </aside>

      {/* ── Main ── */}
      <div className="main">
        {/* Topbar */}
        <header className="topbar">
          <div className="breadcrumb">
            <span>Studio</span>
            <span className="breadcrumb-sep">›</span>
            <span className="breadcrumb-current">Dashboard</span>
          </div>
        </header>

        {/* Content */}
        <main className="content">
          <div className="page-header">
            <h1 className="page-title">Welcome👋</h1>
            <p className="page-subtitle">Here's what's happening with your studio today.</p>
          </div>

          {/* Stat Cards */}
          <div className="stat-grid">
            <StatCard
              label=" Total bookings"
              value={bookings.length}
            />
            <StatCard
              label=" Confirmed"
              value={confirmed}
              valueColor="#16a34a"
              delta={
                bookings.find((b) => b.status.toLowerCase() === "confirmed")
                  ?.clientName || "—"
              }
            />
            <StatCard
              label=" Pending"
              value={pending}
              valueColor="#ca8a04"
              delta={
                bookings.find((b) => b.status.toLowerCase() === "pending")
                  ?.clientName || "—"
              }
            />
          </div>

          {/* Bookings panel */}
          <div className="panel">
            <div className="panel-header">
              <div>
                <span className="panel-title">Bookings</span>
                <span className="panel-subtitle"> · {filteredBookings.length} sessions</span>
              </div>
              <div className="panel-actions">
                <FilterBar filter={filter} setFilter={setFilter} />
                <SearchBar search={search} setSearch={setSearch} />
                <SortDropdown sortOrder={sortOrder} setSortOrder={setSortOrder} />
                <button
                  className="btn-primary"
                  onClick={() => setShowForm(!showForm)}
                >
                  {showForm ? "✕ Close" : "+ New booking"}
                </button>
              </div>
            </div>

            <BookingList bookings={filteredBookings} />
          </div>

          {/* Booking form */}
          {showForm && (
            <BookingForm
              addBooking={addBooking}
              onClose={() => setShowForm(false)}
            />
          )}

          {/* Calendly */}
          {showCalendly && (
            <CalendlySection onClose={() => setShowCalendly(false)} />
          )}

          {/* Quick actions */}
          <div className="quick-grid">
            <div className="quick-card">
              <div className="quick-card-icon" style={{ background: "#ede9fe" }}>
                🗓️
              </div>
              <h3>Add a booking</h3>
              <p>Create a new studio session, assign a client, and set a session type and date.</p>
              <button
                className="btn-outline"
                onClick={() => setShowForm(!showForm)}
              >
                {showForm ? "✕ Hide form" : "+ Open booking form"}
              </button>
            </div>

            <div className="quick-card">
              <div className="quick-card-icon" style={{ background: "#e0f2fe" }}>
                📹
              </div>
              <h3>Schedule a meeting</h3>
              <p>Book a real consultation with a client via Calendly — syncs automatically.</p>
              <button
                className="btn-outline"
                onClick={() => setShowCalendly(!showCalendly)}
              >
                {showCalendly ? "✕ Hide scheduler" : "↗ Open Calendly"}
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
