import { useId, useState, type ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

type DisclosureProps = {
  label: string;
  children: ReactNode;
  className?: string;
  heading?: boolean;
};

export default function Disclosure({ label, children, className = '', heading = false }: DisclosureProps) {
  const [open, setOpen] = useState(false);
  const id = useId();
  const reducedMotion = useReducedMotion();
  const trigger = (
    <button
      id={id + '-trigger'}
      className="disclosure-trigger"
      type="button"
      aria-expanded={open}
      aria-controls={id}
      onClick={() => setOpen(value => !value)}
    >
      <span>{label}</span>
      <ChevronDown size={16} className="disclosure-chevron" aria-hidden="true" />
    </button>
  );

  return (
    <div className={`disclosure ${className}`}>
      {heading ? <h3 className="disclosure-heading">{trigger}</h3> : trigger}
      <motion.div
        id={id}
        className="disclosure-reveal"
        role="region"
        aria-labelledby={id + '-trigger'}
        aria-hidden={!open}
        inert={!open}
        initial={false}
        animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: reducedMotion ? 0 : 0.28, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="disclosure-content">{children}</div>
      </motion.div>
    </div>
  );
}
