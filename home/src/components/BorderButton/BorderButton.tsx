import * as React from "react";
import { styles } from "./BorderButton.css";

export interface BorderButtonProps {
  text: string;
  themeName:string;
  onClick: (_event:any) => void;
}

export const BorderButton = (props: BorderButtonProps) => {

  return (
    <button className={props.themeName === "LIGHT" ? styles.buttonLight : styles.buttonDark} onClick={props.onClick}>
      {props.text}
    </button>
  );
};
