import React, { useState, useEffect } from 'react';
import '../css/quiz.css';

const allQuestions = [
  {
    question: "MinecraftはMicrosoftが開発した？",
    answer: false,
    explanation: "Mojangが開発し、その後Microsoftに買収されました。",
  },
  {
    question: "エンダードラゴンはネザーにいる？",
    answer: false,
    explanation: "エンダードラゴンはエンドに出現します。",
  },
  {
    question: "TNTは爆発するブロックである？",
    answer: true,
    explanation: "TNTは火やレッドストーンで起爆します。",
  },
  {
    question: "スティーブは女性キャラ？",
    answer: false,
    explanation: "スティーブは男性、アレックスが女性です。",
  },
  {
    question: "クリーパーは爆発する？",
    answer: true,
    explanation: "クリーパーは近づくと自爆してダメージを与えます。",
  },
  // 他の問題も同様に追加可能
];

export default function QuizForm({ mode = 'exam' }) {
  const [usedIndices, setUsedIndices] = useState([]);
  const [currentQ, setCurrentQ] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [quizEnded, setQuizEnded] = useState(false);
  const [feedback, setFeedback] = useState(null); // 正誤と解説

  const getRandomQuestion = () => {
    const remaining = allQuestions.map((_, i) => i).filter(i => !usedIndices.includes(i));
    if (remaining.length === 0) return null;
    const nextIndex = remaining[Math.floor(Math.random() * remaining.length)];
    setUsedIndices(prev => [...prev, nextIndex]);
    setCurrentQ(allQuestions[nextIndex]);
    setFeedback(null);
  };

  const handleAnswer = (isTrue) => {
    const isCorrect = isTrue === currentQ.answer;
    const explanation = currentQ.explanation;

    if (isCorrect) setScore(prev => prev + 1);
    setAnswers(prev => [...prev, isCorrect]);

    if (mode === 'practice') {
      setFeedback({
        correct: isCorrect,
        explanation,
      });
    } else {
      nextOrFinish(isCorrect);
    }
  };

  const nextOrFinish = (wasCorrect) => {
    if (answers.length + 1 === 10) {
      setQuizEnded(true);
    } else {
      getRandomQuestion();
    }
  };

  const handleNext = () => {
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
    setFeedback(null);
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
      <h1>{mode === 'practice' ? '練習モード' : 'ボランティア応募'}</h1>

      {!quizEnded && currentQ && (
        <>
          <h2>問題 {answers.length + 1} / 10</h2>
          <p>{currentQ.question}</p>
          <div className="quiz-buttons">
            <button className="quiz-button quiz-button-true" onClick={() => handleAnswer(true)}>○（はい）</button>
            <button className="quiz-button quiz-button-false" onClick={() => handleAnswer(false)}>×（いいえ）</button>
          </div>
          {mode === 'practice' && feedback && (
            <div style={{ marginTop: '1rem' }}>
              <p>{feedback.correct ? "✅ 正解！" : "❌ 不正解"}</p>
              <p><strong>解説:</strong> {feedback.explanation}</p>
              <button className="quiz-button quiz-button-retry" onClick={handleNext}>次の問題へ</button>
            </div>
          )}
        </>
      )}

      {quizEnded && (
        <div>
          <h2>結果: {score} / 10 正解</h2>
          {mode === 'exam' && score >= 7 ? (
            <>
              <p>おめでとうございます！応募資格があります。</p>
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
              <p>{mode === 'exam' ? "残念ですが、再挑戦してください。" : "練習が完了しました。"}</p>
              <button className="quiz-button quiz-button-retry" onClick={resetQuiz}>もう一度挑戦する</button>
            </>
          )}
        </div>
      )}
    </div>
  );
}

