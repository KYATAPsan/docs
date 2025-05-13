import React, { useState, useEffect } from 'react';
import '@site/src/css/quiz.css';

const allQuestions = [
  {
    question: "MinecraftはMicrosoftが開発した？",
    answer: false,
    explanation: "Mojangが開発し、のちにMicrosoftに買収されました。",
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
    explanation: "スティーブは男性、アレックスが女性キャラです。",
  },
  {
    question: "クリーパーは爆発する？",
    answer: true,
    explanation: "クリーパーは近づくと自爆して攻撃してきます。",
  },
];

export default function QuizForm() {
  const [step, setStep] = useState('intro'); // intro | mode | quiz | result
  const [mode, setMode] = useState(null); // 'practice' or 'exam'
  const [usedIndices, setUsedIndices] = useState([]);
  const [currentQ, setCurrentQ] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [quizEnded, setQuizEnded] = useState(false);
  const [feedback, setFeedback] = useState(null);

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
      nextOrFinish();
    }
  };

  const nextOrFinish = () => {
    if (answers.length + 1 === 10) {
      setQuizEnded(true);
      setStep('result');
    } else {
      getRandomQuestion();
    }
  };

  const handleNext = () => {
    if (answers.length + 1 === 10) {
      setQuizEnded(true);
      setStep('result');
    } else {
      getRandomQuestion();
    }
  };

  const startQuiz = (selectedMode) => {
    setMode(selectedMode);
    setUsedIndices([]);
    setAnswers([]);
    setScore(0);
    setQuizEnded(false);
    setFeedback(null);
    setStep('quiz');
    setTimeout(() => getRandomQuestion(), 0);
  };

  const resetQuiz = () => {
    setMode(null);
    setStep('intro');
    setUsedIndices([]);
    setAnswers([]);
    setScore(0);
    setQuizEnded(false);
    setFeedback(null);
    setCurrentQ(null);
  };

  useEffect(() => {
    if (step === 'quiz' && !currentQ && !quizEnded && answers.length === 0) {
      getRandomQuestion();
    }
  }, [step]);

  return (
    <div className="quiz-container">
      {step === 'intro' && (
        <>
          <h1>ボランティア応募 クイズ</h1>
          <p>
            このクイズは、ボランティア応募の前に Minecraft に関する理解度を確認するためのものです。
            本番モードでは7問以上正解することで応募フォームが表示されます。
            練習モードでは何度でも試せます。
          </p>
          <button className="quiz-button quiz-button-start" onClick={() => setStep('mode')}>
            スタート
          </button>
        </>
      )}

      {step === 'mode' && (
        <>
          <h2>モードを選択してください</h2>
          <div className="quiz-buttons">
            <button className="quiz-button quiz-button-true" onClick={() => startQuiz('practice')}>
              練習モード
            </button>
            <button className="quiz-button quiz-button-false" onClick={() => startQuiz('exam')}>
              本番モード
            </button>
          </div>
        </>
      )}

      {step === 'quiz' && currentQ && (
        <>
          <h2>{mode === 'practice' ? '練習モード' : '本番モード'}</h2>
          <h3>問題 {answers.length + 1} / 10</h3>
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

      {step === 'result' && (
        <div>
          <h2>結果: {score} / 10 正解</h2>
          {mode === 'exam' && score >= 7 ? (
            <>
              <p>おめでとうございます！応募フォームが表示されます。</p>
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
