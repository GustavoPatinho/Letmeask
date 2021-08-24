interface ModalProps {
  onClose: () => void;
  onSubmit: () => void;
  title: string;
  subtitle: string;
  icon: string;
}

export function Modal({onClose, onSubmit, title, subtitle, icon}: ModalProps) { 
  
  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-reader">
          <img src={icon} alt="" />
        </div>
        <div className="modal-body">
          <h4>{title}</h4>
          <p>{subtitle}?</p>
            
        </div>
        <div className="modal-footer">
          <button className="modal-button" onClick={() => onClose() }>Cancelar</button>
          <button className="modal-button secondary" onClick={() => onSubmit() }>Sim, encerrar</button>
        </div>
      </div>
    </div>
  );
}