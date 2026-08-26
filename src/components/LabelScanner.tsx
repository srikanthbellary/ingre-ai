"use client";

import { useEffect, useRef, useState } from "react";
import { FINDINGS, LABEL_ROWS, flaggedCount, type Level } from "@/lib/label";
import { useReducedMotion } from "@/lib/motion";

const CYCLE = 7200;
const BEAM_MS = 2100;
const VERDICT_AT = 2150;
const FLAG_START = 280;
const FLAG_STEP = 190;

const levelWord: Record<Level, string> = {
  avoid: "Avoid",
  caution: "Caution",
  clear: "Clear",
};

export function LabelScanner() {
  const rootRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const [flags, setFlags] = useState<Record<string, Level>>({});
  const [verdict, setVerdict] = useState(false);
  const [beamOn, setBeamOn] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    if (reduced) {
      const next: Record<string, Level> = {};
      LABEL_ROWS.forEach((row) => {
        if (row.level !== "clear") next[row.name] = row.level;
      });
      setFlags(next);
      setVerdict(true);
      setScore(flaggedCount);
      setBeamOn(false);
      return;
    }

    let timers: number[] = [];
    let loop: number | null = null;
    let running = false;
    let scoreRaf = 0;

    const clearTimers = () => {
      timers.forEach((id) => window.clearTimeout(id));
      timers = [];
      if (loop !== null) window.clearTimeout(loop);
      loop = null;
      cancelAnimationFrame(scoreRaf);
    };

    const countUp = () => {
      const start = performance.now();
      const tick = (now: number) => {
        const p = Math.min(1, (now - start) / 600);
        setScore(Math.round(flaggedCount * p));
        if (p < 1) scoreRaf = requestAnimationFrame(tick);
      };
      scoreRaf = requestAnimationFrame(tick);
    };

    const play = () => {
      setFlags({});
      setVerdict(false);
      setScore(0);
      setBeamOn(false);
      requestAnimationFrame(() => setBeamOn(true));

      LABEL_ROWS.forEach((row, i) => {
        if (row.level === "clear") return;
        timers.push(
          window.setTimeout(() => {
            setFlags((prev) => ({ ...prev, [row.name]: row.level }));
          }, FLAG_START + i * FLAG_STEP)
        );
      });

      timers.push(
        window.setTimeout(() => {
          setVerdict(true);
          countUp();
        }, VERDICT_AT)
      );

      timers.push(
        window.setTimeout(() => {
          setBeamOn(false);
        }, BEAM_MS)
      );

      loop = window.setTimeout(play, CYCLE);
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !running) {
          running = true;
          play();
        } else if (!entry.isIntersecting && running) {
          running = false;
          clearTimers();
        }
      },
      { threshold: 0.2 }
    );
    io.observe(root);

    return () => {
      running = false;
      clearTimers();
      io.disconnect();
    };
  }, [reduced]);

  return (
    <div ref={rootRef} className="scanner">
      <div className="phone" aria-hidden="true">
        <div className="phone-screen">
          <span className="phone-notch" />
          <span className="scan-reticle" />
          {beamOn ? <span className="scan-beam" /> : null}
          <div className="label-card">
            <p className="label-kicker">Personal care</p>
            <p className="label-title">Daily lotion</p>
            <p className="label-head">Ingredients</p>
            {LABEL_ROWS.map((row) => {
              const flag = flags[row.name];
              return (
                <div
                  key={row.name}
                  className="label-row"
                  data-flag={flag ?? ""}
                >
                  <span>{row.name}</span>
                  <span className="label-flag">
                    {flag ? levelWord[flag] : ""}
                  </span>
                </div>
              );
            })}
          </div>
          <div className={`verdict${verdict ? " is-in" : ""}`}>
            <div className="verdict-score">
              <b>{score}</b>
              <span>flagged on this label</span>
            </div>
            <p className="verdict-note">
              Avoid. Every flag points to the list it came from.
            </p>
          </div>
        </div>
      </div>

      <ul className="findings">
        {FINDINGS.map((item) => (
          <li key={item.name} className="finding" data-level={item.level}>
            <span className="finding-dot" aria-hidden="true" />
            <span>
              <span className="finding-name">{item.name}</span>
              <span className="finding-why">{item.note}</span>
            </span>
            <span className="finding-tag">{levelWord[item.level]}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
