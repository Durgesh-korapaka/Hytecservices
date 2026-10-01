import type { CSSProperties, ElementType, ReactNode } from "react";

type Props = {
  as?: ElementType;
  delay?: number;
  className?: string;
  children: ReactNode;
  id?: string;
};

/** Fades/slides children in on scroll (see useRevealObserver + index.css). */
export default function Reveal({ as: Tag = "div", delay = 0, className, children, id }: Props) {
  return (
    <Tag id={id} data-reveal="" className={className} style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}>
      {children}
    </Tag>
  );
}
