import React, { useState, useEffect } from 'react';
import '../css/quiz.css';

const allQuestions = [
  { question: "MinecraftはMicrosoftが開発した？", answer: false },
  { question: "エンダードラゴンはネザーにいる？", answer: false },
  { question: "TNTは爆発するブロックである？", answer: true },
  { question: "ゾンビは昼間も燃えない？", answer: false },
  { question: "クリーパーは爆発する？", answer: true },
  { question: "ネザーポータルは黒曜石で作る？", answer: true },
  { question: "村人は水の中で生活する？", answer: false },
  { question: "スティーブは女性キャラ？", answer: false },
  { question: "金リンゴには効果がある？", answer: true },
  { question: "ピグリンは金装備に反応する？", answer: true },
  { question: "クリエイティブモードでは落下ダメージを受ける？", answer: false },
  { question: "スケルトンは剣で攻撃してくる？", answer: false },
];

export default function QuizForm() {
  const [usedIndices, setUsedIndices] = useState([]);
  const [currentQ, setCurrentQ] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [quizEnded, setQuizEnded] = useState(false);

  const getRandomQuestion = () => {
    const remaining = allQuestions.map((_, i) => i).filter(i => !usedIndices.includes(i));
    if (remaining.length === 0) return null;
    const nextIndex = remaining[Math.floor(Math.random() * remaining.length)];
    setUsedIndices([...usedIndices, nextIndex]);
    setCurrentQ(allQuestions[nextIndex]);
  };

  const handleAnswer = (isTrue) => {
    const isCorrect = isTrue === currentQ.answer;
    setAnswers(prev => [...prev, isCorrect]);
    if (isCorrect) setScore(prev => prev + 1);

    if (answers.length + 1 === 10) {
      setQuizEnded(true);
    } else {
      getRandomQuestion();
    }
  };

  const startQuiz = () => {
    setUsedIndices([]);
    setAnswers([]);
    setScore(0);
    setQuizEnded(false);
    getRandomQuestion();
  };

  const resetQuiz = () => {
    startQuiz();
  };

  useEffect(() => {
    if (!currentQ && !quizEnded && answers.length === 0) {
      startQuiz();
    }
  }, []);

  return (
    <div className="quiz-container">
      <h1>ボランティア応募</h1>

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
          ) : (
            <>
              <p>残念ですが、再挑戦してください。</p>
              <button className="quiz-button quiz-button-retry" onClick={resetQuiz}>もう一度挑戦する</button>
            </>
          )}
        </div>
      )}
    </div>
  );
}
