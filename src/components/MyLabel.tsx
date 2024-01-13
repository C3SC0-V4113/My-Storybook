import "./MyLabel.css";

interface Props {
  /**Label text */
  label: string;
  /**Label Size */
  size?: "normal" | "h1" | "h2" | "h3";
  /**If wants to be all capitalized */
  allCaps?: boolean;
  /**Predefined colors for label */
  color?: "text-primary" | "text-secondary" | "text-tertiary";
  /**Hexadecimal code for text color */
  fontColor?: string;
  /**Color personalizado de fondo */
  backgroundColor?: string;
}

export const MyLabel = ({
  label,
  size = "normal",
  allCaps = false,
  color,
  fontColor,
  backgroundColor = "transparent",
}: Props) => {
  return (
    <span
      className={`${size} ${color ? color : ""}`}
      style={
        fontColor
          ? {
              color: fontColor,
              backgroundColor,
            }
          : { backgroundColor }
      }
    >
      {allCaps ? label.toUpperCase() : label}
    </span>
  );
};
