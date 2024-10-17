import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: "便利なパネル機能",
    Svg: require('@site/static/img/compass_docs.svg').default,
    description: (
      <>
        「24san」では、コンパスやリカバリーコンパスを使ってパネルを開くことで、
      コマンドを入力せずにサーバーの各種機能を簡単に利用することができます！
      </>
    ),
  },
  {
    title: 'ギルドを作成・参加しよう！',
    Svg: require('@site/static/img/guild_docs.svg').default,
    description: (
      <>
        ギルドを作成して、自分だけのコミュニティを作りましょう！友達を誘って、一緒に冒険や建築を楽しんでください！
        ギルドの作成・参加するにはパネルかコマンドを使用します。 <code>docs</code> からパネルやコマンドを確認してみましょう！
      </>
    ),
  },
  {
    title: 'サバイバルを楽しもう！',
    Svg: require('@site/static/img/survival_docs.svg').default,
    description: (
      <>
        24sanのサバイバルは、初心者でも気軽に楽しめる便利で楽な環境が魅力！いつでも誰かと一緒に遊べるので、24時間いつでもサバイバルを満喫できます。仲間と協力して、楽しい時間を過ごしましょう！
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
        <Heading as="h3" className={styles.boldTitle}>{title}</Heading>
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
