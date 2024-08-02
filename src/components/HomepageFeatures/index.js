import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Легко использовать',
    Svg: require('@site/static/img/addbot.svg').default,
    description: (
      <>
        Вам нужно добавить бота и готово!
      </>
    ),
  },
  {
    title: 'Команды для развлечения пользователей сервера',
    Svg: require('@site/static/img/commands.svg').default,
    description: (
      <>
        Команды с рандомом, модерация и многое другое.
        Подробнее в документации.
      </>
    ),
  },
  {
    title: 'Бот работает на Python',
    Svg: require('@site/static/img/pythonlogo.svg').default,
    description: (
      <>
        Библиотека discord.py для Discord версии, библиотека TwitchIO для Twitch версии.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
