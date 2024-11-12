import { memo, useCallback, useMemo, useRef } from "react";
import styles from "./SelectLang.module.scss";
import { useTranslation } from "react-i18next";
import { useOutsideClick } from "@/shared/hooks/useOutside";
import { clsx } from "@/shared/config/clsx";
import { ChevronDown } from "lucide-react";

import TranslationImg from "@/shared/assets/flags/translation.png";
import { ILangListItem } from "../model/types";

interface IProps {
  show: boolean;
  close: (val: boolean) => void;
  list: ILangListItem[];
  title: string;
  onSelect: (val: string) => void;
}

function SelectLang(props: IProps) {
  const { show, close, list, title, onSelect } = props;

  const ref = useRef<HTMLDivElement | null>(null);
  const { t } = useTranslation();

  const onToggle = useCallback(() => {
    if (show) {
      close(false);
    } else {
      close(true);
    }
  }, [show]);

  const onCloseSelect = useCallback(
    (val: string) => {
      close(false);
      onSelect(val);
    },
    [close, onSelect]
  );

  useOutsideClick({
    ref,
    handler: () => close(false),
  });

  const langElements = useMemo(
    () =>
      list.map((el) => (
        <span
          className={clsx([styles.value], {
            [styles.active]: title === el.value,
          })}
          key={el.value}
          onClick={() => onCloseSelect(el.value)}
        >
          <span>
            <img src={el.img} alt={el.value} />
          </span>
          {el.name}
        </span>
      )),
    [list, title]
  );

  return (
    <div className={styles.selectWrapper} ref={ref}>
      <div className={styles.select} onClick={onToggle}>
        <span className={styles.image}>
          <img src={TranslationImg} alt="image-translation" />
          {t("Selected")}: {title}
        </span>
        <span>
          <ChevronDown width={15} height={15} />
        </span>
      </div>
      <div className={clsx([styles.values], { [styles.show]: show })}>
        {langElements}
      </div>
    </div>
  );
}

export default memo(SelectLang);
