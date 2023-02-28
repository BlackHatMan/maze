import { ReactElement } from 'react';
import { createPortal } from 'react-dom';
import { FC } from 'react';
import './modal.css';

export const Modal: FC<{ children: ReactElement; isOpen: boolean; onClose: () => void }> = ({
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
