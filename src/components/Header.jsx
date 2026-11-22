import { Grid2X2, ChevronDown } from "lucide-react";

const Header = () => {
  return (
    <header className="header">
      <div className="mobile-brand">
        <Grid2X2 className="brand-icon" />
        <span>FocusBoard</span>
      </div>

      <div className="breadcrumb">
        <span>Workspace</span>
        <span>/</span>
        <strong>Overview</strong>
      </div>

      <button className="profile-button" type="button" aria-label="Profile">
        <span className="profile-avatar">JD</span>
        <ChevronDown size={15} />
      </button>
    </header>
  );
};

export default Header;
