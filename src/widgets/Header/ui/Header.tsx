import { memo, useCallback, useState } from "react";
import styles from "./Header.module.scss";

import Logo from "@/shared/assets/logo/logo.png";
import { langList } from "../model/types";
import { useTranslation } from "react-i18next";
import SelectLang from "@/shared/ui/SelectLang/ui/SelectLang";

function Header() {
  const [show, setShow] = useState(false);

  const { i18n } = useTranslation();

  const onSelectLang = useCallback(
    (val: string) => {
      i18n.changeLanguage(val);
    },
    [i18n]
  );

  const onClose = useCallback((val: boolean) => {
    setShow(val);
  }, []);

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.headerInner}>
          <a href="/">
            <img src={Logo} width={50} height={50} alt="logo-type" />
          </a>
          <div className={styles.actions}>
            <SelectLang
              show={show}
              close={onClose}
              list={langList}
              title={i18n.language}
              onSelect={onSelectLang}
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default memo(Header);
