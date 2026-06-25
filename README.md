# Studio Bookings Dashboard

A modern studio booking management dashboard built with React and Vite. The application allows users to view, search, filter, sort, and create studio bookings through a clean and responsive interface. It also includes Calendly integration for scheduling real consultation sessions.

---

## Features

### Booking Management

* View all studio bookings
* Search bookings by client name
* Filter bookings by status
* Sort bookings by date (Newest First / Oldest First)

### Add Booking

* Create new bookings directly from the dashboard
* Client-side form validation
* Success and error feedback messages
* Newly added bookings update instantly in the UI

### Booking Statuses

* Confirmed
* Pending
* Cancelled

### Calendly Integration

* Schedule real meetings using Calendly
* Embedded scheduling experience within the dashboard

### Responsive Design

* Desktop-friendly dashboard layout
* Mobile-responsive components
* Clean and modern user interface

---

## Tech Stack

* React
* Vite
* JavaScript (ES6+)
* CSS3
* Calendly

---

## Installation

Clone the repository:

```bash
git clone <repository-url>
cd studio-bookings-app
```

Install dependencies:

```bash
npm install
```

Create a `.env` file in the project root:

```env
VITE_CALENDLY_URL=your_calendly_booking_link
```

Example:

```env
VITE_CALENDLY_URL=https://calendly.com/your-username/studio-booking-session
```

Start the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:5173
```

---

## Production Build

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

---

## Project Structure

```text
src/
├── components/
│   ├── BookingCard.jsx
│   ├── BookingList.jsx
│   ├── BookingForm.jsx
│   ├── CalendlySection.jsx
│   ├── Controls.jsx
│   ├── StatusBadge.jsx
│
├── data/
│   └── bookings.js
│
├── styles/
│   └── App.css
│
├── utils/
│   └── validation.js
│
├── App.jsx
└── main.jsx
```

---

## Assumptions

* Booking data is managed using client-side state.
* Newly added bookings are not persisted after page refresh.
* Calendly scheduling is intentionally kept separate from the local booking list.
* No backend or database is required for this assignment.

---

## Environment Variables

Create a `.env` file in the project root using `.env.example` as a reference:

| Variable            | Description                                             |
| ------------------- | ------------------------------------------------------- |
| `VITE_CALENDLY_URL` | Calendly scheduling URL used for the embedded scheduler |

---

## Notes

* Internet access is required for the Calendly integration.
* If Google Fonts are enabled, an internet connection may also be required for font loading.
* All booking management functionality works entirely on the client side.

---

## Author

A R Faheem Shah Nawaz
