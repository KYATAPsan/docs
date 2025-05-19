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
        "question": "サーバーにDDoS攻撃をしても許される？",
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
        "question": "荒らしに対する処罰はボランティアが独断で行う？",
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
        "question": "ギルドに加入したら運営に報告しなければならない？",
        "answer": true,
        "explanation": "ギルドの加入・移動は報告義務があります。"
    },
    {
        "question": "長期間ログインしなくてもボランティア権限は残る？",
        "answer": false,
        "explanation": "ログインがない場合、権限が解除されることがあります。"
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
        "question": "利用規約を読んでいなかった場合は規約違反にならない？",
        "answer": false,
        "explanation": "接続＝同意とみなされます。"
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
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLScLR3V01K8OHplxfdCGH-NbmgR1yCBfFFUi_C_5OJtjwJ7hLw/viewform?embedded=true"
            width="100%"
            height="2085"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            title="応募フォーム"
          >
            読み込んでいます…
          </iframe>
        </div>
      )}
    </div>
  );
}
