import { useState } from "react";
import { ChevronLeft, ChevronRight, Check } from "lucide-react";

const notes = [
  {
    heading: "Make today count.",
    description: "A little focus goes a long way.",
    label: "BEST TIP",
    task: "Design landing page",
    status: "NEXT UP",
    progress: "0%",
    percentage: 0,
  },
  {
    heading: "Small steps, big progress.",
    description: "Keep your priorities in view.",
    label: "FOCUS NOTES",
    task: "Fix mobile navigation",
    status: "IN PROGRESS",
    progress: "67%",
    percentage: 67,
  },
  {
    heading: "Celebrate the wins.",
    description: "Every completed task moves you forward.",
    label: "FOCUS NOTES",
    task: "Onboarding copy",
    status: "COMPLETED",
    progress: "100%",
    percentage: 100,
  },
];

const FocusNotes = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const previousSlide = () => {
    setActiveIndex((current) => (current - 1 + notes.length) % notes.length);
  };

  const nextSlide = () => {
    setActiveIndex((current) => (current + 1) % notes.length);
  };

  const note = notes[activeIndex];

  return (
    <section className="focus-notes">
      <div className="focus-banner">
        <div className="focus-content">
          <div className="focus-label">
            {note.label}{" "}
            <span>{String(activeIndex + 1).padStart(2, "0")} / 03</span>
          </div>

          <h2>{note.heading}</h2>
          <p>{note.description}</p>

          <div className="focus-indicators">
            {notes.map((item, index) => (
              <button
                key={item.heading}
                type="button"
                className={activeIndex === index ? "selected" : ""}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={activeIndex === index ? "true" : undefined}
              />
            ))}
          </div>
        </div>

        <div className="focus-task-preview">
          <div className="preview-status">
            <span className="preview-check">
              <Check size={12} />
            </span>
            <span>{note.status}</span>
          </div>

          <h4>{note.task}</h4>

          <div className="preview-progress">
            <div>
              <span className={`progress-fill progress-${note.percentage}`} />
            </div>
            <small>{note.progress}</small>
          </div>
        </div>

        <div className="focus-controls">
          <button
            type="button"
            onClick={previousSlide}
            aria-label="Previous focus note"
          >
            <ChevronLeft size={17} />
          </button>

          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next focus note"
          >
            <ChevronRight size={17} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FocusNotes;
