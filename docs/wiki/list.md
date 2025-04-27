---
title: Wiki一覧
description: '24sanサーバーの仕様や参加方法などをまとめたWiki一覧です。'
---

import { useDocById } from '@docusaurus/plugin-content-docs/client';
import DocCardList from '@theme/DocCardList';

# Wiki一覧

<DocCardList items={[
  'wiki/how-to-join',
  'wiki/server-rules',
  'wiki/guild/create',
  'wiki/guild/join',
  'wiki/panel/bedrock',
  'wiki/panel/java',
  'wiki/other/shop',
  'wiki/other/elevator',
].map((id) => {
  const metadata = useDocById(id);
  return {
    type: 'link',
    label: metadata.title,
    href: metadata.permalink,
    docId: id,
  };
})} />
