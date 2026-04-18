import { useEffect, useRef, useState } from "react";
import "./App.css";

type CounterCardProps = {
  label: string;
  hint: string;
  count: number;
  onIncrement: () => void;
  onDecrement: () => void;
  isWinner: boolean;
  showTieMark: boolean;
  showConfetti: boolean;
  children: React.ReactNode;
};

function CounterCard({
  label,
  hint,
  count,
  onIncrement,
  onDecrement,
  isWinner,
  showTieMark,
  showConfetti,
  children,
}: CounterCardProps) {
  return (
    <article
      className={`counter-card${isWinner ? " counter-card--winner" : ""}${showTieMark ? " counter-card--tie" : ""}`}
      aria-label={`${label} licznik`}
    >
      {showConfetti ? (
        <div className="counter-card__confetti" aria-hidden="true">
          <span className="counter-card__confetti-piece counter-card__confetti-piece--a" />
          <span className="counter-card__confetti-piece counter-card__confetti-piece--b" />
          <span className="counter-card__confetti-piece counter-card__confetti-piece--c" />
          <span className="counter-card__confetti-piece counter-card__confetti-piece--d" />
          <span className="counter-card__confetti-piece counter-card__confetti-piece--e" />
          <span className="counter-card__confetti-piece counter-card__confetti-piece--f" />
        </div>
      ) : null}
      {showTieMark ? (
        <div className="counter-card__tie-mark" aria-hidden="true">
          X
        </div>
      ) : null}
      <div className="counter-card__art">{children}</div>
      <div className="counter-card__body">
        <div>
          <p className="counter-card__eyebrow">Wypatrzone na spacerze</p>
          <h2>{label}</h2>
          <p className="counter-card__hint">{hint}</p>
        </div>

        <div
          className="counter-card__value"
          aria-live="polite"
          aria-atomic="true"
        >
          {count}
        </div>

        <div className="counter-card__actions">
          <button
            type="button"
            className="counter-card__button counter-card__button--minus"
            onClick={onDecrement}
            aria-label={`Zmniejsz licznik ${label}`}
          >
            −1
          </button>
          <button
            type="button"
            className="counter-card__button counter-card__button--plus"
            onClick={onIncrement}
            aria-label={`Zwiększ licznik ${label}`}
          >
            +1
          </button>
        </div>
      </div>
    </article>
  );
}

function KolpakIllustration() {
  return (
    <svg
      viewBox="0 0 220 220"
      className="wheel wheel--kolpak"
      role="img"
      aria-label="Ilustracja stalowej felgi bez kołpaka"
    >
      <circle cx="110" cy="110" r="98" className="wheel__shadow" />
      <circle cx="110" cy="110" r="84" className="wheel__outer" />
      <circle cx="110" cy="110" r="66" className="wheel__steel-plate" />
      <circle cx="110" cy="110" r="24" className="wheel__hub" />
      <circle cx="110" cy="56" r="11" className="wheel__hole" />
      <circle cx="156" cy="83" r="11" className="wheel__hole" />
      <circle cx="156" cy="137" r="11" className="wheel__hole" />
      <circle cx="110" cy="164" r="11" className="wheel__hole" />
      <circle cx="64" cy="137" r="11" className="wheel__hole" />
      <circle cx="64" cy="83" r="11" className="wheel__hole" />
      <circle cx="110" cy="110" r="9" className="wheel__bolt" />
      <circle cx="110" cy="88" r="4.5" className="wheel__bolt" />
      <circle cx="129" cy="99" r="4.5" className="wheel__bolt" />
      <circle cx="129" cy="121" r="4.5" className="wheel__bolt" />
      <circle cx="110" cy="132" r="4.5" className="wheel__bolt" />
      <circle cx="91" cy="121" r="4.5" className="wheel__bolt" />
      <circle cx="91" cy="99" r="4.5" className="wheel__bolt" />
    </svg>
  );
}

function AlufelgaIllustration() {
  return (
    <svg
      viewBox="0 0 220 220"
      className="wheel wheel--alufelga"
      role="img"
      aria-label="Ilustracja alufelgi inspirowanej wzorem Forda Kugi z 2025 roku"
    >
      <circle cx="110" cy="110" r="98" className="wheel__shadow" />
      <circle cx="110" cy="110" r="84" className="wheel__outer" />
      <circle cx="110" cy="110" r="70" className="wheel__rim" />
      <circle cx="110" cy="110" r="51" className="wheel__barrel" />

      <g className="wheel__spoke-pair">
        <path
          d="M96 43 105 40 116 85 108 112 96 102 90 68Z"
          className="wheel__spoke-main"
        />
        <path
          d="M124 43 115 40 104 85 112 112 124 102 130 68Z"
          className="wheel__spoke-main"
        />
        <path
          d="M101 53 106 52 112 84 108 98 102 92 98 69Z"
          className="wheel__spoke-cut"
        />
        <path
          d="M119 53 114 52 108 84 112 98 118 92 122 69Z"
          className="wheel__spoke-cut"
        />
      </g>
      <g transform="rotate(72 110 110)" className="wheel__spoke-pair">
        <path
          d="M96 43 105 40 116 85 108 112 96 102 90 68Z"
          className="wheel__spoke-main"
        />
        <path
          d="M124 43 115 40 104 85 112 112 124 102 130 68Z"
          className="wheel__spoke-main"
        />
        <path
          d="M101 53 106 52 112 84 108 98 102 92 98 69Z"
          className="wheel__spoke-cut"
        />
        <path
          d="M119 53 114 52 108 84 112 98 118 92 122 69Z"
          className="wheel__spoke-cut"
        />
      </g>
      <g transform="rotate(144 110 110)" className="wheel__spoke-pair">
        <path
          d="M96 43 105 40 116 85 108 112 96 102 90 68Z"
          className="wheel__spoke-main"
        />
        <path
          d="M124 43 115 40 104 85 112 112 124 102 130 68Z"
          className="wheel__spoke-main"
        />
        <path
          d="M101 53 106 52 112 84 108 98 102 92 98 69Z"
          className="wheel__spoke-cut"
        />
        <path
          d="M119 53 114 52 108 84 112 98 118 92 122 69Z"
          className="wheel__spoke-cut"
        />
      </g>
      <g transform="rotate(216 110 110)" className="wheel__spoke-pair">
        <path
          d="M96 43 105 40 116 85 108 112 96 102 90 68Z"
          className="wheel__spoke-main"
        />
        <path
          d="M124 43 115 40 104 85 112 112 124 102 130 68Z"
          className="wheel__spoke-main"
        />
        <path
          d="M101 53 106 52 112 84 108 98 102 92 98 69Z"
          className="wheel__spoke-cut"
        />
        <path
          d="M119 53 114 52 108 84 112 98 118 92 122 69Z"
          className="wheel__spoke-cut"
        />
      </g>
      <g transform="rotate(288 110 110)" className="wheel__spoke-pair">
        <path
          d="M96 43 105 40 116 85 108 112 96 102 90 68Z"
          className="wheel__spoke-main"
        />
        <path
          d="M124 43 115 40 104 85 112 112 124 102 130 68Z"
          className="wheel__spoke-main"
        />
        <path
          d="M101 53 106 52 112 84 108 98 102 92 98 69Z"
          className="wheel__spoke-cut"
        />
        <path
          d="M119 53 114 52 108 84 112 98 118 92 122 69Z"
          className="wheel__spoke-cut"
        />
      </g>

      <circle cx="110" cy="110" r="28" className="wheel__lug-ring" />
      <circle cx="110" cy="110" r="11" className="wheel__bolt" />
      <circle cx="110" cy="89" r="4.2" className="wheel__bolt" />
      <circle cx="128" cy="100" r="4.2" className="wheel__bolt" />
      <circle cx="128" cy="120" r="4.2" className="wheel__bolt" />
      <circle cx="110" cy="131" r="4.2" className="wheel__bolt" />
      <circle cx="92" cy="120" r="4.2" className="wheel__bolt" />
      <circle cx="92" cy="100" r="4.2" className="wheel__bolt" />
    </svg>
  );
}

function App() {
  const [kolpakCount, setKolpakCount] = useState(0);
  const [alufelgaCount, setAlufelgaCount] = useState(0);
  const [winner, setWinner] = useState<"kolpak" | "alufelga" | null>(null);
  const [showTie, setShowTie] = useState(false);
  const resultTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (resultTimeoutRef.current !== null) {
        window.clearTimeout(resultTimeoutRef.current);
      }
    };
  }, []);

  const clearResultState = () => {
    setWinner(null);
    setShowTie(false);

    if (resultTimeoutRef.current !== null) {
      window.clearTimeout(resultTimeoutRef.current);
      resultTimeoutRef.current = null;
    }
  };

  const resetCounts = () => {
    clearResultState();
    setKolpakCount(0);
    setAlufelgaCount(0);
  };

  const showResult = () => {
    clearResultState();

    if (kolpakCount === alufelgaCount) {
      setShowTie(true);
      resultTimeoutRef.current = window.setTimeout(() => {
        setShowTie(false);
        resultTimeoutRef.current = null;
      }, 3000);
      return;
    }

    const nextWinner = kolpakCount > alufelgaCount ? "kolpak" : "alufelga";
    setWinner(nextWinner);
    resultTimeoutRef.current = window.setTimeout(() => {
      setWinner(null);
      resultTimeoutRef.current = null;
    }, 3000);
  };

  return (
    <main className="app-shell">
      <header className="hero-panel">
        <p className="hero-panel__eyebrow">Spacerowy licznik aut</p>
        <h1>Kołpak czy alufelga?</h1>
        <p className="hero-panel__lead">
          Dotykaj dużego przycisku, gdy coś wypatrzysz. Mniejszy przycisk służy
          do poprawki.
        </p>
      </header>

      <section className="counter-grid" aria-label="Liczniki wypatrzonych aut">
        <CounterCard
          label="Kołpak"
          hint="Tu liczysz zwykłą stalową felgę bez ozdobnej alufelgi."
          count={kolpakCount}
          onIncrement={() => setKolpakCount((current) => current + 1)}
          onDecrement={() => setKolpakCount((current) => current - 1)}
          isWinner={winner === "kolpak"}
          showTieMark={showTie}
          showConfetti={winner === "kolpak"}
        >
          <KolpakIllustration />
        </CounterCard>

        <CounterCard
          label="Alufelga"
          hint="Ilustracja inspirowana wzorem alufelgi Forda Kugi z 2025 roku."
          count={alufelgaCount}
          onIncrement={() => setAlufelgaCount((current) => current + 1)}
          onDecrement={() => setAlufelgaCount((current) => current - 1)}
          isWinner={winner === "alufelga"}
          showTieMark={showTie}
          showConfetti={winner === "alufelga"}
        >
          <AlufelgaIllustration />
        </CounterCard>
      </section>

      <div className="bottom-actions">
        <button
          type="button"
          className="reset-button"
          onClick={resetCounts}
          aria-label="Wyzeruj oba liczniki"
        >
          Resetuj liczniki
        </button>
        <button
          type="button"
          className="result-button"
          onClick={showResult}
          aria-label="Pokaż, który licznik wygrywa"
        >
          Wynik
        </button>
      </div>
    </main>
  );
}

export default App;
