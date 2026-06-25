/* ── SearchBar ── */
export function SearchBar({ search, setSearch }) {
  return (
    <input
      className="panel-search"
      type="text"
      placeholder="Search client…"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      aria-label="Search bookings by client name"
    />
  );
}

/* ── FilterBar ── */
export function FilterBar({ filter, setFilter }) {
  const tabs = [
    { value: "all",       label: "All" },
    { value: "confirmed", label: "Confirmed" },
    { value: "pending",   label: "Pending" },
    { value: "cancelled", label: "Cancelled" },
  ];

  return (
    <div className="filter-tabs" role="group" aria-label="Filter by status">
      {tabs.map((tab) => (
        <button
          key={tab.value}
          className={`filter-tab ${filter === tab.value ? "active" : ""}`}
          onClick={() => setFilter(tab.value)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}

/* ── SortDropdown ── */
export function SortDropdown({ sortOrder, setSortOrder }) {
  return (
    <select
      className="panel-sort"
      value={sortOrder}
      onChange={(e) => setSortOrder(e.target.value)}
      aria-label="Sort order"
    >
      <option value="newest">Newest first</option>
      <option value="oldest">Oldest first</option>
    </select>
  );
}

/* ── BookingCounter (kept for backward compat) ── */
export function BookingCounter({ count }) {
  return (
    <span className="booking-count-badge">
      📋 {count} {count === 1 ? "booking" : "bookings"}
    </span>
  );
}

/* Legacy default exports so old imports still work */
export default FilterBar;
