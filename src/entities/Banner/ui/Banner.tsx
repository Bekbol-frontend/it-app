import { memo, useMemo } from "react";
import styles from "./Banner.module.scss";

import BannerImg from "@/shared/assets/banner/banner-top.gif";
import { useTranslation } from "react-i18next";
import { Button } from "@/shared/ui/Button";

import { bannerTextItems } from "../models/types/index";

function Banner() {
  const { t } = useTranslation("home");

  const textItems = useMemo(
    () =>
      bannerTextItems.map((el) => (
        <li key={el.text}>
          <p>{t(el.text)}</p>
        </li>
      )),
    [bannerTextItems, t]
  );

  return (
    <section className={styles.sectionBanner}>
      <div className="container">
        <div className={styles.banner}>
          <div className={styles.left}>
            <h1 className={styles.bannerTitle}>{t("bannerTitle")}</h1>
            <p className={styles.bannerDesc}>{t("bannerDesc")}</p>
            <ul className={styles.textItems}>{textItems}</ul>
            <div className={styles.btnActions}>
              <Button type_btn="primary" addClass={styles.btnAction}>
                {t("Get a consultation")}
              </Button>
              <Button type_btn="dashed" addClass={styles.btnAction}>
                {t("Login/Registration")}
              </Button>
              <Button type_btn="dashed" addClass={styles.btnAction}>
                {t("Start the course")}
              </Button>
            </div>
          </div>
          <div className={styles.right}>
            <img src={BannerImg} alt="banner" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(Banner);
