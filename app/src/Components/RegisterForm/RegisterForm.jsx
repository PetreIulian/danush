import { useEffect } from "react";
import "./RegisterForm.css";

const RegisterForm = ({ onClose }) => {
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
        <h2>Înregistrare</h2>

        <input type="email" placeholder="Email" />
        <input type="text" placeholder="Nume Echipă" />
        <input type="tel" placeholder="Număr de telefon" />

        <div className="form-actions">
          <button className="cancel" onClick={onClose}>
            Anulează
          </button>
          <button className="confirm">
            Creează cont
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
