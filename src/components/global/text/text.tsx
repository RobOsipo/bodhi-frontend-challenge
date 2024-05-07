// external imports
import { Typography } from "@mui/material";

type TextProps = {
  children: React.ReactNode;
  className?: string;
  font?: "primary" | "secondary";
  w?: "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900";
  s?: string;
  c?: string;
  mt?: string;
  pt?: string;
  mb?: string;
  pb?: string;
  sx?: { [key: string]: any };
};

// text component
export function Text({
  children,
  className = "",
  font = "primary",
  w = "400",
  s = "1rem",
  c = "#000",
  mt = "0",
  pt = "0",
  mb = "0",
  pb = "0",
  sx,
  ...restProps
}: Readonly<TextProps>) {
  return (
    <Typography
      className={className}
      sx={{
        fontWeight: w,
        fontSize: s,
        color: c,
        mt,
        pt,
        mb,
        pb,
        ...sx,
      }}
      {...restProps}
    >
      {children}
    </Typography>
  );
}

export default Text;
