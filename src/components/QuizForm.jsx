import React, { useState, useEffect } from 'react';
import '@site/src/css/quiz.css';

const allQuestions = [
  {
    question: "MinecraftはMicrosoftが開発した？",
    answer: false,
    explanation: "Mojangが開発し、その後Microsoftが買収しました。",
  },
  {
    question: "エンダードラゴンはネザーにいる？",
    answer: false,
    explanation: "エンダードラゴンはエンドに出現します。",
  },
  {
    question: "TNTは爆発するブロックである？",
    answer: true,
    explanation: "TNTは火やレッドストーン信号で起爆します。",
  },
  {
    question: "スティーブは女性キャラ？",
    answer: false,
    explanation: "スティーブは男性キャラ、女性はアレックスです。",
  },
  {
    question: "クリーパーは爆発する？",
    answer: true,
    explanation: "クリーパーはプレイヤーに近づいて自爆します。",
  },
  {
    question: "ネザーポータルは黒曜石で作る？",
    answer: true,
    explanation: "ネザーポータルは黒曜石で縦長の枠を作ります。",
  },
  {
    question: "村人は水の中で生活する？",
    answer: false,
    explanation: "村人は通常、建物や地面で暮らします。",
  },
  {
    question: "金リンゴには効果がある？",
    answer: true,
    explanation: "金リンゴを食べると体力回復や耐性効果が得られます。",
  },
  {
    question: "スケルトンは剣で攻撃してくる？",
    answer: false,
    explanation: "スケルトンは弓で遠距離攻撃をします。",
  },
  {
    question: "ゾンビは昼間も燃えない？",
    answer: false,
    explanation: "ゾンビは昼間に日光で燃えます。",
  },
];

export default function QuizForm() {
  const [usedIndices, setUsedIndices] = useState([]);
  const [currentQ, setCurrentQ] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [quizEnded, setQuizEnded] = useState(false);

  const getRandomQuestion = () => {
    const remaining = allQuestions.map((_, i) => i).filter(i => !usedIndices.includes(i));
    if (remaining.length === 0) return;
    const nextIndex = remaining[Math.floor(Math.random() * remaining.length)];
    setUsedIndices(prev => [...prev, nextIndex]);
    setCurrentQ(allQuestions[nextIndex]);
  };

  const handleAnswer = (isTrue) => {
    const isCorrect = isTrue === currentQ.answer;
    if (isCorrect) setScore(prev => prev + 1);
    setAnswers(prev => [...prev, isCorrect]);

    if (answers.length + 1 === 10) {
      setQuizEnded(true);
      setCurrentQ(null);
    } else {
      getRandomQuestion();
    }
  };

  const resetQuiz = () => {
    setUsedIndices([]);
    setAnswers([]);
    setScore(0);
    setQuizEnded(false);
    setTimeout(() => getRandomQuestion(), 0);
  };

  useEffect(() => {
    if (!currentQ && !quizEnded) getRandomQuestion();
  }, [currentQ, quizEnded]);

  return (
    <div className="quiz-container">
      <h1>ボランティア応募クイズ</h1>

      {!quizEnded && currentQ && (
        <>
          <h2>問題 {answers.length + 1} / 10</h2>
          <p>{currentQ.question}</p>
          <div className="quiz-buttons">
            <button className="quiz-button quiz-button-true" onClick={() => handleAnswer(true)}>○（はい）</button>
            <button className="quiz-button quiz-button-false" onClick={() => handleAnswer(false)}>×（いいえ）</button>
          </div>
        </>
      )}

      {quizEnded && (
        <div>
          <h2>結果: {score} / 10 正解</h2>
          {score >= 7 ? (
            <>
              <p>✅ おめでとうございます！応募資格があります。</p>
              <form name="volunteer-apply" method="POST" data-netlify="true" netlify-honeypot="bot-field">
                <input type="hidden" name="form-name" value="volunteer-apply" />
                <p hidden>
                  <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
                </p>
                <input type="text" name="name" placeholder="お名前" required />
                <input type="email" name="email" placeholder="メールアドレス" required />
                <textarea name="message" placeholder="応募理由" required></textarea>
                <button type="submit">送信</button>
              </form>
            </>
          ) : (
            <>
              <p>❌ 残念ですが、不合格です。もう一度挑戦してください。</p>
              <button className="quiz-button quiz-button-retry" onClick={resetQuiz}>再挑戦する</button>
            </>
          )}
        </div>
      )}
    </div>
  );
}
