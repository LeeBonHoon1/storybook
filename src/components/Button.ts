interface Btn {
  label?: string;
  backgroundColor?: string;
  size?: string;
  onClick?: () => void;
}

const Button = ({
  label,
  backgroundColor = "red",
  size = "md",
  onClick,
}: Btn) => {
  let scale = 1;
  if (size === "sm") scale = 0.75;
  if (size === "lg") scale = 1.5;

  const style = {
    backgroundColor,
    padding: `${scale * 0.5}rem ${scale * 1}rem`,
    border: "none",
  };
};

export default Button;
