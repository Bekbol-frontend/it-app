import { memo } from "react";
import styles from "./Web.module.scss";

function Web() {
  return (
    <section className={styles.sectionWeb}>
      <div className="container">
        <div className={styles.web}>
          <h1 className={styles.mainTitle}>1. Веб бағдарламалау</h1>

          <h3 className={styles.subTitle}>
            Веб бағдарламалау – бұл веб-сайттар мен веб-қосымшаларды жасау
            процесі. Бұл сала HTML, CSS және JavaScript сияқты негізгі
            технологиялардан тұрады және олардың көмегімен статикалық және
            интерактивті веб-парақтарды әзірлеуге болады. Веб бағдарламалаудың
            екі негізгі түрі бар
          </h3>

          <div className={styles.wrapperInfo}>
            <div className={styles.wrapperInfoItem}>
              <h2>1. Фронтенд бағдарламалау</h2>
              <p>
                Пайдаланушы интерфейсі мен пайдаланушының көретін және әрекет
                ететін бөлігін жасауға бағытталған. Фронтенд бағдарламалау HTML,
                CSS және JavaScript тілдерін және олардың кітапханалары мен
                фреймворктарын (мысалы, React, Vue, Angular) қолдануды қамтиды.
              </p>
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

export default memo(Web);
