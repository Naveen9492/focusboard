import {
  LayoutGrid,
  ListTodo,
  CalendarDays,
  Settings,
  Grid2X2,
} from "lucide-react";

const Sidebar = () => {
  const menuItems = [
    { label: "Overview", icon: LayoutGrid },
    { label: "My tasks", icon: ListTodo },
    { label: "Calendar", icon: CalendarDays },
    { label: "Settings", icon: Settings },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <Grid2X2 className="brand-icon" />
        <span>FocusBoard</span>
      </div>

      <div className="sidebar-section">
        <p className="sidebar-heading">WORKSPACE</p>

        <nav className="sidebar-menu" aria-label="Main navigation">
          {menuItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <button
                type="button"
                key={item.label}
                className={`sidebar-link ${index === 0 ? "active" : ""}`}
                aria-current={index === 0 ? "page" : undefined}
              >
                <Icon size={17} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
