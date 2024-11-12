import { memo } from "react";
import styles from "./Mobile.module.scss";

function Mobile() {
  return (
    <section className={styles.sectionMobile}>
      <div className="container">
        <div className={styles.mobile}>
          <h1 className={styles.mainTitle}>2. Мобильді қосымшаларды жасау</h1>

          <h3 className={styles.subTitle}>
            Мобильді қосымшаларды жасау – смартфондар мен планшеттер үшін
            қосымшалар әзірлеу процесі. Бұл процесс iOS және Android сияқты
            платформаларға арналған қосымшаларды жасауға бағытталады.
          </h3>

          <div className={styles.wrapperInfo}>
            <div className={styles.wrapperInfoItem}>
              <h2>1. Нативті қосымшалар</h2>
              <p>
                Нативті қосымшалар нақты платформаға арналып, оның жеке тілдері
                мен құралдарымен жазылады
              </p>
              <ul>
                <li>1. iOS үшін Swift немесе Objective-C тілдері қолданылады.</li>
                <li>2. Android үшін Java немесе Kotlin қолданылады.</li>
              </ul>
            </div>

            <div className={styles.wrapperInfoItem}>
              <h2>2. Бэкенд бағдарламалау</h2>
              <p>
                Бұл сервер жағындағы бағдарламалау, яғни серверде орындалатын
                және пайдаланушыға қажетті мәліметтерді жеткізетін процестер мен
                дерекқорлармен жұмыс істеуді қамтиды. Бэкенд бағдарламалау үшін
                PHP, Python, Ruby, Node.js сияқты тілдер жиі қолданылады.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(Mobile);
