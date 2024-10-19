import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import { useEffect, useState } from 'react';

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
  {
    title: 'コンテンツ検索',
    Svg: require('@site/static/img/survival_docs.svg').default,
    description: (
      <>
        コミュニティが必要な情報を簡単に見つけられるように、ドキュメント検索をサポートします。
      </>
    ),
  },
  {
    title: 'ドキュメントバージョニング',
    Svg: require('@site/static/img/survival_docs.svg').default,
    description: (
      <>
        プロジェクトの全てのバージョンに対応したドキュメントをサポートします。ドキュメントバージョニングを使用して、リリースと同期した情報を提供します。
      </>
    ),
  },
];

function Feature({ Svg, title, description, isSingleColumn }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: '2rem',
        maxWidth: isSingleColumn ? '100%' : '400px',
        flex: isSingleColumn ? '1 1 100%' : '1 1 30%',
        margin: '1rem',
      }}
    >
      <div className="text--center">
        <Svg role="img" style={{ maxWidth: '100%' }} />
      </div>
      <div className="text--center padding-horiz--md" style={{ textAlign: 'center' }}>
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  const [isSingleColumn, setIsSingleColumn] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSingleColumn(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // 初期値設定

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className={styles.features}>
      <div
        className="container"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '1rem',
        }}
      >
        {/* 全ての要素をフレックスで配置 */}
        {FeatureList.map((props, idx) => (
          <Feature key={idx} {...props} isSingleColumn={isSingleColumn} />
        ))}
      </div>
    </section>
  );
}
