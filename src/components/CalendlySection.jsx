import { InlineWidget } from "react-calendly";

const calendlyUrl =
    import.meta.env.VITE_CALENDLY_URL;

function CalendlySection({ onClose }) {
  return (
    <div className="calendly-panel">
      <div className="calendly-panel-header">
        <span className="calendly-panel-title">📹 Schedule a Session via Calendly</span>
        {onClose && (
          <button
            className="form-panel-close"
            onClick={onClose}
            aria-label="Close Calendly"
          >
            ✕
          </button>
        )}
      </div>

       <InlineWidget
        url={calendlyUrl}
        styles={{
          minWidth: "320px",
          height: "700px",
        }}
      />
    </div>
  );
}

export default CalendlySection;
