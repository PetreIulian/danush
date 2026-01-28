import { useEffect, useState } from "react";
import "./PrinterForm.css";

const PrinterForm = ({ onClose }) => {
  const [step, setStep] = useState(1);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <div className="form-backdrop" onClick={onClose}>
      <div className="form-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>✕</button>

        {step === 1 && (
          <>
            <h2>Numele imprimantei</h2>

            <div><strong>Status:</strong> Disponibil</div>
            <div><strong>Printuri în așteptare:</strong> 2</div>

            <label>
              Încarcă fișier (.stl)
              <input type="file" />
            </label>

            <button className="confirm" onClick={() => setStep(2)}>
              Programează-te
            </button>
          </>
        )}

        {step === 2 && (
          <>
            <h2>Programare imprimantă</h2>

            <input type="text" placeholder="Nume echipă" />
            <input type="tel" placeholder="Număr de telefon" />

            <label>
              Încarcă fișier (.stl)
              <input type="file" />
            </label>

            <div className="form-actions">
              <button className="cancel" onClick={() => setStep(1)}>
                Înapoi
              </button>
              <button className="confirm">
                Confirmă programarea
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default PrinterForm;
