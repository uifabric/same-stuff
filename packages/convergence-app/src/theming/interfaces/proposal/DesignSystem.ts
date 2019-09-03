import { designSystemContext } from "@microsoft/fast-jss-manager-react/dist/context";

export interface Theme {
  direction: "ltr" | "rtl";
  mode: "light" | "dark" | "hc-light" | "hc-dark";
  designSystem: DesignSystem;
}

export interface DesignSystem {
  // Colors
  background: string;

  // Effects
  borderRadius: number;
  elevatedBorderRadius: number;
}
