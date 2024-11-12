import { ButtonHTMLAttributes, ReactNode, useMemo } from "react";
import styles from "./Button.module.scss";
import { TYPE_MODS, clsx } from "@/shared/config/clsx";

type TYPE_BTN = "primary" | "default" | "dashed" | "text";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  type_btn?: TYPE_BTN;
  addClass?: string;
}

function Button(props: IProps) {
  const {
    children,
    type_btn = "default",
    addClass = "",
    ...otherProps
  } = props;

  const typeBtnClass = useMemo<TYPE_MODS>(
    () => ({
      [styles[type_btn]]: true,
    }),
    [type_btn]
  );

  return (
    <button
      className={clsx([styles.btn, addClass], { ...typeBtnClass })}
      {...otherProps}
    >
      {children}
    </button>
  );
}

export default Button;
