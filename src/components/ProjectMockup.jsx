export default function ProjectMockup({ project }) {
  const { accentColor, accentSecondary, title } = project;

  return (
    <div
      className="project-mockup"
      style={{ backgroundColor: accentColor }}
    >
      <div className="mockup-device">
        <div className="mockup-screen" style={{ borderColor: accentSecondary }}>
          <span className="mockup-label">{title}</span>
          <div
            className="mockup-ui-bar"
            style={{ backgroundColor: accentSecondary }}
          />
          <div className="mockup-ui-block" />
          <div className="mockup-ui-block short" />
        </div>
      </div>
    
      <div
        className="mockup-accent"
        style={{ backgroundColor: accentSecondary }}
      />
    </div>
  );
}
