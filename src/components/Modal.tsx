import { FC, ReactNode } from 'react';
import { createPortal } from 'react-dom';
import './modal.css';

export const Modal: FC<{ children: ReactNode; isOpen: boolean; onClose: () => void }> = ({
  children,
  isOpen,
  onClose,
}) => {
  return createPortal(
    <>
      {isOpen && (
        <div className="overlay" onClick={onClose}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            {children}
          </div>
        </div>
      )}
    </>,
    document.body
  );
};
