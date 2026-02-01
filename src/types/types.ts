

interface HeaderMenu {
  key: string;
  label: string;
  icon?: React.ReactNode;

  onClick?: () => void;
  href?: string;

  variant?: "primary" | "secondary" | "danger";
  showOn?: "all" | "mobile" | "desktop";
  disabled?: boolean;
}
