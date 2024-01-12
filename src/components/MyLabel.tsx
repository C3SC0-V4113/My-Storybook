import "./MyLabel.css";

interface Props {
  /**Label text */
  label: string;
  /**Label Size */
  size?: "normal" | "h1" | "h2" | "h3";
  /**If wants to be all caps */
  allCaps?: boolean;
  /**Predefined colors for text */
  color?: "text-primary" | "text-secondary" | "text-tertiary";
  /**Hexadecimal code for text color */
  fontColor?: string;
}

export const MyLabel = ({
  label,
  size = "normal",
  allCaps = false,
  color,
  fontColor,
}: Props) => {
  return (
    <span
      className={size + color ? color : ""}
      style={
        fontColor
          ? {
              color: fontColor,
            }
          : {}
      }
    >
      {allCaps ? label.toUpperCase() : label}
    </span>
  );
};
