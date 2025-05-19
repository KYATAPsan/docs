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
  {
    question: "ビーコンは空に向かって光を放つ？",
    answer: true,
    explanation: "ビーコンは空に向かってビームを放ちます。",
  },
  {
    question: "サバイバルモードでは飛行できる？",
    answer: false,
    explanation: "飛行できるのはクリエイティブモードまたはエリトラ使用時のみです。",
  },
  {
    question: "村人は夜になるとベッドで眠る？",
    answer: true,
    explanation: "村人は夜になるとベッドで眠ります。",
  },
  {
    question: "砂利は重力の影響を受けない？",
    answer: false,
    explanation: "砂利は重力で落下します。",
  },
  {
    question: "ネザーには水を設置できる？",
    answer: false,
    explanation: "ネザーでは水は蒸発して設置できません。",
  }
];

export default function QuizForm() {
  const [step, setStep] = useState('intro'); // intro | quiz | result
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const currentQ = allQuestions[currentIndex];

  const handleAnswer = (isTrue) => {
    const isCorrect = isTrue === currentQ.answer;

    if (isCorrect) {
      const newScore = score + 1;
      if (newScore === 10) {
        setShowForm(true);
        setStep('result');
      } else {
        setScore(newScore);
        setCurrentIndex(currentIndex + 1);
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
    setCurrentIndex(0);
    setFeedback(null);
    setShowForm(false);
  };

  useEffect(() => {
    if (step === 'quiz') {
      setFeedback(null);
    }
  }, [currentIndex, step]);

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
          <h2>問題 {currentIndex + 1} / 10</h2>
          <p>{currentQ.question}</p>
          <div className="quiz-buttons">
            <button className="quiz-button quiz-button-true" onClick={() => handleAnswer(true)}>○（はい）</button>
            <button className="quiz-button quiz-button-false" onClick={() => handleAnswer(false)}>×（いいえ）</button>
          </div>

          {feedback && (
            <div style={{ marginTop: '1rem' }}>
              <p>❌ 不正解</p>
              <p><strong>解説:</strong> {feedback.explanation}</p>
              <button className="quiz-button quiz-button-retry" onClick={resetQuiz}>
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
