import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { isBot } from "@/utils/env";
import { cn } from "@/utils/cn";

interface TypewriterProps {
  words: string[];
  /** Milliseconds per character. */
  typeMs?: number;
  /** Pause at a fully typed word. */
  holdMs?: number;
  className?: string;
  /** Show the blinking caret. */
  caret?: boolean;
}

/**
 * Type / hold / delete loop. Renders the first word statically for bots
 * and reduced-motion users.
 */
export function Typewriter({ words, typeMs = 55, holdMs = 1600, className, caret = true }: TypewriterProps) {
  const reduce = useReducedMotion();
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    if (isBot || reduce || words.length === 0) return;
    const word = words[wordIndex % words.length];
    let timeout: ReturnType<typeof setTimeout> | undefined;

    if (!deleting) {
      if (text.length < word.length) {
        timeout = setTimeout(() => setText(word.slice(0, text.length + 1)), typeMs);
      } else {
        timeout = setTimeout(() => setDeleting(true), holdMs);
      }
    } else {
      if (text.length > 0) {
        timeout = setTimeout(() => setText(word.slice(0, text.length - 1)), typeMs / 2);
      } else {
        setDeleting(false);
        setWordIndex((i) => (i + 1) % words.length);
      }
    }

    if (timeout) timers.current.push(timeout);
    return () => {
      timers.current.forEach(clearTimeout);
      timers.current = [];
    };
  }, [text, deleting, wordIndex, words, typeMs, holdMs, reduce]);

  if (isBot || reduce) {
    return <span className={className}>{words[0] ?? ""}</span>;
  }

  return (
    <span className={cn("inline-block", className)}>
      <span>{text}</span>
      {caret && (
        <span className="ml-0.5 inline-block h-[1em] w-[2px] translate-y-[0.15em] animate-pulse bg-primary" aria-hidden="true" />
      )}
    </span>
  );
}