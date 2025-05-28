import React, { useState, useEffect } from 'react';
import '@site/src/css/quiz.css';

const allQuestions = [
    {
        "question": "Minecraft公式のEULAに違反しても24sanでは処罰されない？",
        "answer": false,
        "explanation": "EULA違反は処罰対象です。"
    },
    {
        "question": "24san外のminecraftサーバーで処罰された場合24sanでも処罰されるのか?",
        "answer": false,
        "explanation": "24san外のサーバールールによる処罰が当サーバーに影響を及ぼすことはありません。"
    },
    {
        "question": "不正クライアントの使用は禁止されていますか？",
        "answer": true,
        "explanation": "不正なクライアント・チートは利用規約で禁止されています。"
    },
    {
        "question": "間違えて破壊してしまった場合は通報すれば治してくれるのか？",
        "answer": false,
        "explanation": "自分で直してください。"
    },
    {
        "question": "必ず荒らし行為を行えばアドベンチャーになるのか?",
        "answer": false,
        "explanation": "裁量などにより適正な処罰を行います。"
    },
    {
        "question": "暴言や差別的な発言は24sanで許可されていますか？",
        "answer": false,
        "explanation": "暴言・差別発言は利用規約で禁止されています。"
    },
    {
        "question": "ボランティア権限を所持した場合は周囲に理解を得るために所持したことを公表すべき？",
        "answer": false,
        "explanation": "権限の公表はご遠慮ください"
    },
    {
        "question": "他人のおうちを間違えて壊してしまったが自分ですぐに修正すれば処罰されない",
        "answer": true,
        "explanation": "間違えて破壊してしまったものは速やかに元に戻してください。"
    },
    {
        "question": "利用者間のトラブルにサーバー運営は責任を負いませんか？",
        "answer": true,
        "explanation": "トラブルの責任は負いませんと明記されています。"
    },
    {
        "question": "データ損失が発生した場合、運営は完全に補償する？",
        "answer": false,
        "explanation": "ログ・バックアップの存在する分のみ修正をします。"
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
        "explanation": "エンドにものを建てる場合エンダードラゴンが存在していることは本人も了承済みのはずです。なので当内容のロールバックは禁止です。"
    },
    {
        "question": "ボランティア規約は変更されることがある？",
        "answer": true,
        "explanation": "運営判断により変更される場合があります。"
    },
    {
        "question": "必ず上から順番に対応しなければならない?",
        "answer": true,
        "explanation": "上から通報の北順番通りに対応をお願いします。"
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
　const [selectedFrequency, setSelectedFrequency] = useState("平日 & 休日 (平日昼間を含む)");
　const [selectedGuildStatus, setSelectedGuildStatus] = useState("現在ギルドには所属していない");

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
          <form
            action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSdon095XRPgR9GFNPOGslJUqIMGLJ9bbfs9vGR8d_fANnzVkQ/formResponse"
            method="POST"
            target="_self"
            className="contact_form"
          >
            <label className="form_block">
              <div className="form_label">Discordアカウント名<span className="form-required">必須</span></div>
              <input type="text" name="entry.2000993600" className="form_field" placeholder="(例)もふもふきゃ" required />
            </label>

            <label className="form_block">
              <div className="form_label">Minecraftアカウント名<span className="form-required">必須</span></div>
              <input type="text" name="entry.612750954" className="form_field" placeholder="(例)_KYATAP_san" required />
            </label>

            <div className="form_block">
              <div className="form_label">所属しているギルド<span className="form-required">必須</span></div>
              <div className="form_radio-wrapper">
                <label className="label_radio">
                  <input
                    type="radio"
                    name="entry.735582548"
                    value="現在ギルドには所属していない"
                    checked={selectedGuildStatus === "現在ギルドには所属していない"}
                    onChange={() => setSelectedGuildStatus("現在ギルドには所属していない")}
                    className="form_radio"
                  />
                  <span className="radio_span">所属していない</span>
                </label>
                <label className="label_radio">
                  <input
                    type="radio"
                    name="entry.735582548"
                    value="その他:"
                    checked={selectedGuildStatus === "その他:"}
                    onChange={() => setSelectedGuildStatus("その他:")}
                    className="form_radio"
                  />
                  <span className="radio_span">所属している(補足欄に記入をお願いします)</span>
                </label>
              </div>
            </div>

            {selectedGuildStatus === "その他:" && (
              <div className="form_block --textfield">
                <div className="form_label">補足（所属しているを選んだ人は必須です）</div>
                <textarea className="form_field --textfield" name="entry.735582548.other_option_response" placeholder="(例)KYATAP guild" required />
              </div>
            )}

            <div className="form_block">
              <div className="form_label">どの機種でログインしているか<span className="form-required">必須</span></div>
              <div className="form_radio-wrapper">
                {["PC(JAVA)", "PC(統合)", "PS4 PS5", "switch", "スマホ"].map((device, idx) => (
                  <label className="label_radio" key={idx}>
                    <input type="radio" name="entry.560957424" value={device} defaultChecked={idx === 0} className="form_radio" />
                    <span className="radio_span">{device}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="form_block">
              <div className="form_label">どのくらいの頻度で対応できますか？<span className="form-required">必須</span></div>
              <div className="form_radio-wrapper">
                {[
                  "平日 & 休日 (平日昼間を含む)",
                  "平日 & 休日 (平日夕方から)",
                  "休日のみ",
                  "その他:"
                ].map((option, idx) => (
                  <label className="label_radio" key={idx}>
                    <input
                      type="radio"
                      name="entry.606469214"
                      value={option}
                      checked={selectedFrequency === option}
                      onChange={() => setSelectedFrequency(option)}
                      className="form_radio"
                    />
                    <span className="radio_span">{option.replace(" (", "（").replace(")", "）")}</span>
                  </label>
                ))}
              </div>
            </div>

            {selectedFrequency === "その他:" && (
              <div className="form_block --textfield">
                <div className="form_label">その他の詳細(その他を選んだ人は必須です）</div>
                <textarea className="form_field --textfield" name="entry.606469214.other_option_response" placeholder="(例)平日の昼間のみ...など" required />
              </div>
            )}

            <div className="form_block">
              <div className="form_label">現在24sanサーバーで何をしているか<span className="form-required">必須</span></div>
              <div className="form_radio-wrapper">
                {["建築", "採掘", "PvP", "ショップ管理", "ギルド運営", "トラップ作成・トラップ管理"].map((activity, idx) => (
                  <label className="label_radio" key={idx}>
                    <input type="checkbox" name="entry.1115509067" value={activity} className="form_radio" />
                    <span className="radio_span">{activity}</span>
                  </label>
                ))}
              </div>
            </div>

            <h2>現在の座標: x: 151 y: 76 z: 153</h2>
            <p>
              .Arasi_Aの行動を <code>r:#world</code>、<code>r:#global</code> を使用せずに<br />
              範囲指定してロールバックするコマンドを入力してください。<br />
              ※できるだけ少ない範囲が好ましいです。
            </p>
            <img src="KYATAP_sanここに写真をお願いします" alt="CoreProtectログ" style={{ maxWidth: "100%", height: "auto" }} />
            
            <div className="form_block --textfield">
              <div className="form_label">回答</div>
              <textarea className="form_field --textfield" name="entry.1881462553"></textarea>
            </div>

            <button type="submit" className="quiz-button quiz-button-submit" style={{ marginTop: '1rem' }}>
              フォームを送信する
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
