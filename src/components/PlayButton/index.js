import React, { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";

import styles from "./styles.module.css";

const PLAY_OPTIONS = [
  { label: "Classic", href: "https://classic.blockchainrpg.io" },
  { label: "Dash", href: "https://dash.blockchainrpg.io" },
];

export default function PlayButton() {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!open) return undefined;
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen(false);
      }
    }
    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <div className={clsx("dropdown", { "dropdown--show": open })} ref={ref}>
      <button
        type="button"
        className="button button--secondary button--lg"
        aria-haspopup="true"
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
      >
        Play Now
        <span className={styles.caret} aria-hidden="true" />
      </button>
      <ul className="dropdown__menu">
        {PLAY_OPTIONS.map((option) => (
          <li key={option.label}>
            <Link
              className="dropdown__link"
              to={option.href}
              onClick={() => setOpen(false)}
            >
              {option.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
