import React, { useState, useEffect } from 'react';
import '@site/src/css/quiz.css';

const allQuestions = [
    {
        "question": "Minecraft公式のEULAに違反しても24sanでは処罰されない？",
        "answer": false,
        "explanation": "EULA違反は処罰対象です。"
    },
    {
        "question": "不正クライアントの使用は禁止されていますか？",
        "answer": true,
        "explanation": "不正なクライアント・チートは利用規約で禁止されています。"
    },
    {
        "question": "サーバーはDDoSされているのでDDoS攻撃をしても許される？",
        "answer": false,
        "explanation": "DDoS攻撃は重大な違反です。"
    },
    {
        "question": "暴言や差別的な発言は24sanで許可されていますか？",
        "answer": false,
        "explanation": "暴言・差別発言は利用規約で禁止されています。"
    },
    {
        "question": "荒らしへの処罰は運営の判断によって行われますか？",
        "answer": true,
        "explanation": "処罰の判断は運営により行われます。"
    },
    {
        "question": "利用者間のトラブルにサーバー運営は責任を負いませんか？",
        "answer": true,
        "explanation": "トラブルの責任は負いませんと明記されています。"
    },
    {
        "question": "データ損失が発生した場合、運営は補償する？",
        "answer": false,
        "explanation": "ログ・バックアップの存在する分から修正をします。"
    },
    {
        "question": "r:#global を使ってロールバックしても良い？",
        "answer": false,
        "explanation": "広域ロールバックは禁止されています。"
    },
    {
        "question": "チャットログは保存されることがありますか？",
        "answer": true,
        "explanation": "チャットログやIPなどの記録は保管されます。"
    },
    {
        "question": "利用規約は予告なしに変更されることがありますか？",
        "answer": true,
        "explanation": "利用規約は予告なく変更される場合があります。"
    },
    {
        "question": "ボランティアはCoreProtectのロールバックについて理解していなければならない？",
        "answer": true,
        "explanation": "応募資格に含まれています。"
    },
    {
        "question": "ボランティア権限は個人的な目的で自由に使える？",
        "answer": false,
        "explanation": "私的利用は禁止です。"
    },
    {
        "question": "自分の対応した荒らしへの処罰は自分で行う？",
        "answer": false,
        "explanation": "処罰は運営判断で行われます。"
    },
    {
        "question": "通報のない状況でも勝手に対応してよい？",
        "answer": false,
        "explanation": "通報のない対応は禁止されています。"
    },
    {
        "question": "r:#world のようなロールバックは許可されている？",
        "answer": false,
        "explanation": "広域ロールバックは禁止です。"
    },
    {
        "question": "通報後は必ず返信コマンドを使う必要がある？",
        "answer": true,
        "explanation": "必ず返信を行う必要があります。"
    },
    {
        "question": "ログの内容を他の人に話してもよい？",
        "answer": false,
        "explanation": "ログ情報の外部共有は禁止です。"
    },
    {
        "question": "ボランティアはギルドに加入したら運営に報告しなければならない？",
        "answer": true,
        "explanation": "ギルドの加入・移動は報告義務があります。"
    },
    {
        "question": "毎日ログインしているが対応は一切していない状態で権限は残る？",
        "answer": false,
        "explanation": "権限が解除されることがあります。"
    },
    {
        "question": "エンダードラゴンに関するロールバックは禁止？",
        "answer": true,
        "explanation": "エンド関係のロールバックは禁止です。"
    },
    {
        "question": "ボランティア規約は変更されることがある？",
        "answer": true,
        "explanation": "運営判断により変更される場合があります。"
    },
    {
        "question": "特定プレイヤーのみに対応を続けても問題ない？",
        "answer": false,
        "explanation": "偏った対応は規約違反です。"
    },
    {
        "question": "チート行為は試す目的であってもBANされてしまう",
        "answer": true,
        "explanation": "チート行為は一切禁止です。"
    },
    {
        "question": "日本語が話せなくてもボランティアになれる？",
        "answer": false,
        "explanation": "日本語話者である必要があります。"
    },
    {
        "question": "CoreProtectの使用範囲はできるだけ広くとる？",
        "answer": false,
        "explanation": "最小範囲での操作が求められます。"
    },
    {
        "question": "ギルド作成時には報告の必要はない？",
        "answer": false,
        "explanation": "ギルド作成も報告義務があります。"
    },
    {
        "question": "ボランティア応募は規約に同意したものとみなされる？",
        "answer": true,
        "explanation": "応募時点で規約に同意したと見なされます。"
    },
    {
        "question": "運営が必要と判断した場合、予告なくサーバーが終了する可能性がある？",
        "answer": true,
        "explanation": "予告なくサーバー終了することがあります。"
    },
    {
        "question": "ログイン履歴は取得されることがある？",
        "answer": true,
        "explanation": "プレイヤーデータとして取得されます。"
    },
    {
        "question": "ギルド招待に応じたら必ず加入しなければならない？",
        "answer": false,
        "explanation": "拒否することも可能です。"
    },
    {
        "question": "再募集があった場合、既に受かっていれば応募しなくても権限は引き継ぎになる?",
        "answer": false,
        "explanation": "再応募の際に応募がなければ解除になります。"
    }
];


export default function QuizForm() {
  const [step, setStep] = useState('intro'); // intro | quiz | result
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [usedIndices, setUsedIndices] = useState([]);
  const [currentQ, setCurrentQ] = useState(null);

  const getRandomQuestion = () => {
    const remainingIndices = allQuestions
      .map((_, index) => index)
      .filter(index => !usedIndices.includes(index));

    if (remainingIndices.length === 0) return null;

    const randomIndex = remainingIndices[Math.floor(Math.random() * remainingIndices.length)];
    setUsedIndices(prev => [...prev, randomIndex]);
    setCurrentQ(allQuestions[randomIndex]);
  };

  const handleAnswer = (isTrue) => {
    const isCorrect = isTrue === currentQ.answer;

    if (isCorrect) {
      const newScore = score + 1;
      if (newScore === 10) {
        setShowForm(true);
        setStep('result');
      } else {
        setScore(newScore);
        getRandomQuestion();
      }
    } else {
      setFeedback({
        correct: false,
        explanation: currentQ.explanation,
      });
    }
  };

  const resetQuiz = () => {
    setStep('intro');
    setScore(0);
    setUsedIndices([]);
    setFeedback(null);
    setShowForm(false);
    setCurrentQ(null);
  };

  useEffect(() => {
    if (step === 'quiz' && !currentQ) {
      getRandomQuestion();
    }
  }, [step, currentQ]);

  return (
    <div className="quiz-container">
      {step === 'intro' && (
        <>
          <h1>ボランティア応募 クイズ</h1>
          <p>
            以下のクイズに全問正解すると、応募フォームが表示されます。  
            1問でも間違えると最初からやり直しになります。
          </p>
          <button className="quiz-button quiz-button-start" onClick={() => setStep('quiz')}>
            開始する
          </button>
        </>
      )}

      {step === 'quiz' && currentQ && (
        <>
          <h2>問題 {score + 1} / 10</h2>
          <p>{currentQ.question}</p>

          {!feedback && (
            <div className="quiz-buttons">
              <button className="quiz-button quiz-button-true" onClick={() => handleAnswer(true)}>○（はい）</button>
              <button className="quiz-button quiz-button-false" onClick={() => handleAnswer(false)}>×（いいえ）</button>
            </div>
          )}

          {feedback && (
            <div style={{ marginTop: '1rem' }}>
              <p>❌ 不正解</p>
              <p><strong>解説:</strong> {feedback.explanation}</p>
              <button
                className="quiz-button quiz-button-retry"
                onClick={resetQuiz}
                style={{ marginTop: '1.5rem' }}
              >
                最初からやり直す
              </button>
            </div>
          )}
        </>
      )}

      {step === 'result' && showForm && (
        <div>
          <h2>✅ 全問正解！</h2>
          <p>おめでとうございます。以下のフォームから応募を進めてください。</p>
            <iframe>
                <html lang="ja">

<head>
  <form action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSdon095XRPgR9GFNPOGslJUqIMGLJ9bbfs9vGR8d_fANnzVkQ/formResponse" class="contact_form"></form>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="google-site-verification" content="MNnaizlBskLqdrE3S7Lz9lFGxLtfp3UV4j3hwljkfZs" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ボランティア応募</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/destyle.css@1.0.15/destyle.css" />
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;300;400;500;700;900&display=swap"
    rel="stylesheet">
  <link rel="stylesheet" href="./style.css">
</head>
<body>
  <main class="contact_main">
    <h1 class="contact_h1">応募フォーム</h1>
    <form action="" class="contact_form">
      <label class="form_block">
        <div class="form_label">Discordアカウント名<span class="form-required">必須</span></div>
        <input type="text" name="entry.2000993600" class="form_field" placeholder="(例)もふもふきゃ" required>
      </label>
      <label class="form_block">
        <div class="form_label">Minecraftアカウント名<span class="form-required">必須</span></div>
        <input type="text" name="entry.612750954" class="form_field" placeholder="(例)_KYATAP_san" required>
      </label>
      <label class="form_block">
        <div class="form_label">所属しているギルド<span class="form-required">必須</span></div>
        <div class="form_radio-wrapper">
    <label class="label_radio">
      <input type="radio" name="entry.735582548" value="現在ギルドには所属していない" checked class="form_radio">
      <span class="radio_span">所属していない</span>
    </label>
    <label class="label_radio">
      <input type="radio" name="entry.735582548" value="その他:" class="form_radio">
      <span class="radio_span">所属している</span>
    </label>
      </label>
      <div class="form_block --textfield">
  <div class="form_label">補足（その他を選んだ人は必須です）</div>
  <textarea class="form_field --textfield" id="other-text" name="entry.735582548.other_option_response" placeholder="(例)KYATAP guild"></textarea>
</div>
<div class="form_block">
  <div class="form_label">24sanサーバーにどの機種でログインしているか教えてください<span class="form-required">必須</span></div>
  <div class="form_radio-wrapper">
    <label class="label_radio">
      <input type="radio" name="entry.560957424" value="PC(JAVA)" checked class="form_radio">
      <span class="radio_span">PC版(JAVA Edition)</span>
    </label>
    <label class="label_radio">
      <input type="radio" name="entry.560957424" value="PC(統合)" class="form_radio">
      <span class="radio_span">PC版(統合版)</span>
    </label>
    <label class="label_radio">
      <input type="radio" name="entry.560957424" value="PS4 PS5" class="form_radio">
      <span class="radio_span">PS4,PS5版</span>
    </label>
    <label class="label_radio">
      <input type="radio" name="entry.560957424" value="switch" class="form_radio">
      <span class="radio_span">Switch版</span>
    </label>
    <label class="label_radio">
      <input type="radio" name="entry.560957424" value="スマホ" class="form_radio">
      <span class="radio_span">スマホ版</span>
    </label>
  </div>
</div>
<div class="form_block">
  <div class="form_label">どのくらいの頻度で対応が可能か教えてください<span class="form-required">必須</span></div>
  <div class="form_radio-wrapper" id="frequency-options">
    <label class="label_radio">
      <input type="radio" name="entry.606469214" value="平日 & 休日 (平日昼間を含む)" checked class="form_radio">
      <span class="radio_span">平日(昼間を含む)＆休日</span>
    </label>
    <label class="label_radio">
      <input type="radio" name="entry.606469214" value="平日 & 休日 (平日夕方から)" class="form_radio">
      <span class="radio_span">平日(夕方から)＆休日</span>
    </label>
    <label class="label_radio">
      <input type="radio" name="entry.606469214" value="休日のみ" class="form_radio">
      <span class="radio_span">休日のみ</span>
    </label>
    <label class="label_radio">
      <input type="radio" name="entry.606469214" value="その他:" class="form_radio">
      <span class="radio_span">その他</span>
    </label>
  </div>
</div>
<div class="form_block --textfield">
  <div class="form_label">補足（その他を選んだ人は必須です）</div>
  <textarea class="form_field --textfield" id="other-text" name="entry.606469214.other_option_response" placeholder="(例)平日の昼間のみ...など"></textarea>
</div>
 <div class="form_block">
        <div class="form_label">現在24sanサーバーで何をしているか教えてください<span class="form-required">必須</span></div>
        <div class="form_radio-wrapper">
          <label class="label_radio">
            <input type="checkbox" name="entry.1115509067" value="建築" checked class="form_radio">
            <span class="radio_span">建築</span>
          </label>
          <label class="label_radio">
            <input type="checkbox" name="entry.1115509067" value="採掘" class="form_radio">
            <span class="radio_span">採掘</span>
          </label>
          <label class="label_radio">
            <input type="checkbox" name="entry.1115509067" value="PvP" class="form_radio">
            <span class="radio_span">PvP</span>
          </label>
          <label class="label_radio">
            <input type="checkbox" name="entry.1115509067" value="ショップ管理" class="form_radio">
            <span class="radio_span">ショップ管理</span>
          </label>
          <label class="label_radio">
            <input type="checkbox" name="entry.1115509067" value="ギルド運営" class="form_radio">
            <span class="radio_span">ギルド運営</span>
          </label>
          <label class="label_radio">
            <input type="checkbox" name="entry.1115509067" value="トラップ作成・トラップ管理" class="form_radio">
            <span class="radio_span">トラップ作成・トラップ管理</span>
          </label>
          <label class="label_radio">
            <input type="checkbox" name="entry.1115509067" value="特になし" class="form_radio">
            <span class="radio_span">特になし</span>
          </label>
          <label class="label_radio">
            <input type="checkbox" name="entry.1115509067" value="その他:" class="form_radio">
            <span class="radio_span">その他</span>
          </label>
        </div>
      </div>
</div>
<div class="form_block --textfield">
  <div class="form_label">補足（その他を選んだ人は必須です）</div>
  <textarea class="form_field --textfield" id="other-text" name="entry.1115509067.other_option_response" placeholder="(例)平日の昼間のみ...など"></textarea>
</div>

~ロールバックについての質問~
    <h2>現在の座標: x: 151 y: 76 z: 153</h2>
    <p>
        .Arasi_Aの行動を <code>r:#world</code>、<code>r:#global</code> を使用せずに<br>
        範囲指定してロールバックするコマンドを入力してください。<br>
        ※できるだけ少ない範囲が好ましいです。
    </p>
    <img src="応募フォーム質問用.png" alt="CoreProtectログ" style="max-width: 100%; height: auto;">
     <div class="form_block --textfield">
  <div class="form_label">回答</div>
  <textarea class="form_field --textfield" id="other-text" name="entry.1881462553"></textarea>
</div>
      <button type="submit" class="form-btn">この内容で送信する</button>
    </form>
  </main>

</body>
<script>
  document.addEventListener("DOMContentLoaded", function () {
    const radios = document.querySelectorAll('input[name="frequency"]');
    const otherText = document.getElementById("other-text");

    function updateRequiredState() {
      const selected = document.querySelector('input[name="frequency"]:checked');
      if (selected && selected.value === "その他") {
        otherText.setAttribute("required", "required");
      } else {
        otherText.removeAttribute("required");
      }
    }

//ページ読み込み時に初期状態確認
    updateRequiredState();

// ラジオボタンが変わったら実行
    radios.forEach(radio => {
      radio.addEventListener("change", updateRequiredState);
    });
  });
</script>

</html>
                width="640" 
                height="2334" 
                frameborder="0" marginheight="0" marginwidth="0">読み込んでいます…
            </iframe>
        </div>
      )}
    </div>
  );
}
