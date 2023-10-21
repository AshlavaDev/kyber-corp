import { AiOutlineClose } from "react-icons/ai";

interface ModalProps {
  onClose?: () => void;
  children?: React.ReactNode;
}

// This is a general component that can be called anywhere and accept whatever elements is needed from the caller
export default function Modal({ onClose, children }: ModalProps) {
  return (
    <div
      className="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-deepblue/50 text-lg text-deepblue md:text-xl"
      style={{ zIndex: 9999 }}
    >
      <div className="flex max-w-prose flex-col items-center gap-4 rounded-lg bg-seagray p-6 shadow-lg">
        <button className="text-2xl font-bold" onClick={onClose}>
          <AiOutlineClose />
        </button>
        {children}
      </div>
    </div>
  );
}
