"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "@/lib/motion";
import { SCHEMATIC_TOKENS, type Level } from "@/lib/label";

const STAGES = ["01 · Scan", "02 · Parse", "03 · Flag", "04 · Call"];

const RULE = "rgba(11,13,15,0.22)";
const RULE_SOFT = "rgba(11,13,15,0.10)";
const GRID = "rgba(11,13,15,0.045)";
const GRAPHITE = "rgba(11,13,15,0.84)";
const GRAPHITE_DIM = "rgba(75,81,87,0.9)";
const INK = "#1F4A7D";
const AVOID = "#B32B23";
const CAUTION = "#8F6100";
const CLEAR = "#1D7A4D";

const LEVEL_COLOR: Record<Level, string> = {
  avoid: AVOID,
  caution: CAUTION,
  clear: CLEAR,
};

const CYCLE = 7.6;

type Box = { x: number; y: number; w: number; h: number };

export function ScanSchematic() {
  const ref = useRef<HTMLCanvasElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let raf = 0;
    let running = !reduced;
    let last = performance.now();
    let clock = 0;
    let settled = false;

    const displayFamily =
      getComputedStyle(document.documentElement)
        .getPropertyValue("--font-display")
        .trim() || "Georgia, serif";
    const sansFamily =
      getComputedStyle(document.documentElement)
        .getPropertyValue("--font-sans")
        .trim() || "system-ui, sans-serif";

    const labelFont = (size: number) => `600 ${size}px ${sansFamily}`;
    const displayFont = (size: number, weight = 500) =>
      `${weight} ${size}px ${displayFamily}`;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = Math.max(1, Math.round(width * dpr));
      canvas.height = Math.max(1, Math.round(height * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const fs = () => (width < 460 ? 8 : 9.5);

    const stations = (): Box[] => {
      const pad = 14;
      const top = pad + 16;
      const bottom = height - pad - 18;
      const usableH = bottom - top;
      const row = width / Math.max(height, 1) > 1.6;

      if (row) {
        const gap = Math.max(20, width * 0.035);
        const w = (width - pad * 2 - gap * 3) / 4;
        return [0, 1, 2, 3].map((i) => ({
          x: pad + (w + gap) * i,
          y: top,
          w,
          h: usableH,
        }));
      }

      const gapX = Math.max(18, width * 0.06);
      const gapY = 30;
      const w = (width - pad * 2 - gapX) / 2;
      const h = (usableH - gapY) / 2;
      const grid = [
        [0, 0],
        [1, 0],
        [1, 1],
        [0, 1],
      ];
      return grid.map(([cx, cy]) => ({
        x: pad + (w + gapX) * cx,
        y: top + (h + gapY) * cy,
        w,
        h,
      }));
    };

    const fit = (text: string, max: number) => {
      if (ctx.measureText(text).width <= max) return text;
      let t = text;
      while (t.length > 1 && ctx.measureText(`${t}…`).width > max) {
        t = t.slice(0, -1);
      }
      return `${t}…`;
    };

    const frame = (box: Box, active: number) => {
      ctx.strokeStyle =
        active > 0.02 ? `rgba(31,74,125,${0.22 + active * 0.5})` : RULE_SOFT;
      ctx.fillStyle = `rgba(31,74,125,${active * 0.05})`;
      ctx.beginPath();
      ctx.rect(box.x, box.y, box.w, box.h);
      ctx.fill();
      ctx.stroke();
    };

    const drawScan = (box: Box, p: number, held: number) => {
      const pad = 12;
      const innerW = box.w - pad * 2;
      const rows = 7;
      const rowGap = Math.min(15, (box.h - pad * 2) / rows);
      const startY = box.y + (box.h - rowGap * (rows - 1)) / 2;
      const widths = [0.92, 0.74, 0.86, 0.62, 0.9, 0.7, 0.5];

      for (let i = 0; i < rows; i++) {
        const y = startY + rowGap * i;
        const seen = held > 0 || p * rows > i;
        const w = innerW * widths[i];
        ctx.strokeStyle = seen ? "rgba(11,13,15,0.45)" : "rgba(11,13,15,0.12)";
        ctx.lineWidth = seen ? 1.6 : 1;
        ctx.beginPath();
        ctx.moveTo(box.x + pad, Math.round(y) + 0.5);
        ctx.lineTo(box.x + pad + w, Math.round(y) + 0.5);
        ctx.stroke();
      }
      ctx.lineWidth = 1;

      if (p > 0 && p < 1) {
        const beamY = box.y + pad + (box.h - pad * 2) * p;
        const grad = ctx.createLinearGradient(0, beamY - 16, 0, beamY + 16);
        grad.addColorStop(0, "rgba(31,74,125,0)");
        grad.addColorStop(0.5, "rgba(31,74,125,0.16)");
        grad.addColorStop(1, "rgba(31,74,125,0)");
        ctx.fillStyle = grad;
        ctx.fillRect(box.x + 1, beamY - 16, box.w - 2, 32);
        ctx.strokeStyle = INK;
        ctx.beginPath();
        ctx.moveTo(box.x + 1, Math.round(beamY) + 0.5);
        ctx.lineTo(box.x + box.w - 1, Math.round(beamY) + 0.5);
        ctx.stroke();
      }

      const c = 9;
      ctx.strokeStyle = RULE;
      (
        [
          [box.x + 6, box.y + 6, 1, 1],
          [box.x + box.w - 6, box.y + 6, -1, 1],
          [box.x + 6, box.y + box.h - 6, 1, -1],
          [box.x + box.w - 6, box.y + box.h - 6, -1, -1],
        ] as const
      ).forEach(([cx, cy, sx, sy]) => {
        ctx.beginPath();
        ctx.moveTo(cx + c * sx, cy);
        ctx.lineTo(cx, cy);
        ctx.lineTo(cx, cy + c * sy);
        ctx.stroke();
      });
    };

    const drawTokens = (box: Box, p: number, flagged: boolean) => {
      const pad = 10;
      const rowH = Math.min(26, (box.h - pad * 2) / SCHEMATIC_TOKENS.length);
      const w = box.w - pad * 2;
      const top = box.y + (box.h - rowH * SCHEMATIC_TOKENS.length) / 2;
      ctx.font = labelFont(fs() - 1);
      ctx.textBaseline = "middle";

      SCHEMATIC_TOKENS.forEach((token, i) => {
        const appear = Math.max(0, Math.min(1, p * SCHEMATIC_TOKENS.length - i));
        if (appear <= 0) return;
        const y = top + rowH * i;
        const color = LEVEL_COLOR[token.level];
        const on = flagged && appear > 0.6;

        ctx.globalAlpha = appear;
        ctx.strokeStyle = on ? color : RULE_SOFT;
        ctx.fillStyle = on ? `${color}16` : "rgba(250,248,243,0.72)";
        ctx.beginPath();
        ctx.rect(box.x + pad, y, w, rowH - 4);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = on ? GRAPHITE : GRAPHITE_DIM;
        ctx.fillText(fit(token.name, w - 26), box.x + pad + 7, y + (rowH - 4) / 2);

        if (on) {
          ctx.fillStyle = color;
          ctx.fillRect(box.x + pad + w - 11, y + (rowH - 4) / 2 - 2, 4, 4);
        }
        ctx.globalAlpha = 1;
      });
    };

    const drawCall = (box: Box, p: number) => {
      if (p <= 0) return;
      const counts: [Level, number, string][] = [
        ["avoid", 1, "to avoid"],
        ["caution", 1, "caution"],
        ["clear", 4, "clear"],
      ];
      const pad = 14;
      const rowH = Math.min(38, (box.h - pad * 2) / 3.6);
      const top = box.y + (box.h - rowH * 3) / 2 - 6;
      counts.forEach(([level, n, text], i) => {
        const appear = Math.max(0, Math.min(1, p * 3 - i));
        if (appear <= 0) return;
        const y = top + rowH * i + rowH / 2;
        ctx.globalAlpha = appear;
        ctx.fillStyle = LEVEL_COLOR[level];
        ctx.fillRect(box.x + pad, y - 4, 4, 8);
        ctx.font = displayFont(Math.min(21, rowH * 0.72));
        ctx.fillStyle = LEVEL_COLOR[level];
        ctx.fillText(String(Math.ceil(n * appear)), box.x + pad + 12, y);
        ctx.font = labelFont(fs() - 1);
        ctx.fillStyle = GRAPHITE_DIM;
        ctx.fillText(text, box.x + pad + 12 + 16, y + 0.5);
        ctx.globalAlpha = 1;
      });

      const verdictY = top + rowH * 3 + 14;
      ctx.font = labelFont(fs() - 1);
      ctx.fillStyle = p > 0.9 ? AVOID : GRAPHITE_DIM;
      ctx.fillText(fit("Avoid · open the source", box.w - 28), box.x + 14, verdictY);
    };

    const connector = (a: Box, b: Box, p: number) => {
      const sameRow = Math.abs(a.y - b.y) < 4;
      const from = sameRow
        ? { x: a.x + a.w, y: a.y + a.h / 2 }
        : { x: a.x + a.w / 2, y: a.y + a.h };
      const to = sameRow
        ? { x: b.x, y: b.y + b.h / 2 }
        : { x: b.x + b.w / 2, y: b.y };
      const rev = sameRow && b.x < a.x;
      const s = rev ? { x: a.x, y: a.y + a.h / 2 } : from;
      const e = rev ? { x: b.x + b.w, y: b.y + b.h / 2 } : to;

      ctx.strokeStyle = RULE_SOFT;
      ctx.setLineDash([3, 4]);
      ctx.beginPath();
      ctx.moveTo(s.x, s.y);
      ctx.lineTo(e.x, e.y);
      ctx.stroke();
      ctx.setLineDash([]);

      if (p > 0 && p < 1) {
        const x = s.x + (e.x - s.x) * p;
        const y = s.y + (e.y - s.y) * p;
        ctx.fillStyle = INK;
        ctx.fillRect(x - 2.5, y - 2.5, 5, 5);
        ctx.strokeStyle = "rgba(31,74,125,0.4)";
        ctx.beginPath();
        ctx.rect(x - 5.5, y - 5.5, 11, 11);
        ctx.stroke();
      }
    };

    const draw = (now: number) => {
      const dt = Math.min(0.25, (now - last) / 1000);
      last = now;
      if (!reduced) {
        const next = clock + dt;
        if (next >= CYCLE) settled = true;
        clock = next % CYCLE;
      }
      const t = reduced ? 6.6 : clock;
      const held = reduced || settled ? 1 : 0;

      ctx.clearRect(0, 0, width, height);

      ctx.strokeStyle = GRID;
      ctx.lineWidth = 1;
      const step = 26;
      ctx.beginPath();
      for (let x = step; x < width; x += step) {
        ctx.moveTo(Math.round(x) + 0.5, 0);
        ctx.lineTo(Math.round(x) + 0.5, height);
      }
      for (let y = step; y < height; y += step) {
        ctx.moveTo(0, Math.round(y) + 0.5);
        ctx.lineTo(width, Math.round(y) + 0.5);
      }
      ctx.stroke();

      const boxes = stations();
      const span = (start: number, len: number) =>
        Math.max(0, Math.min(1, (t - start) / len));

      const scanP = span(0.15, 1.5);
      const parseP = Math.max(span(2.1, 1.2), held);
      const flagP = Math.max(span(3.7, 1.3), held);
      const callP = Math.max(span(5.3, 0.9), held);

      const hops = [span(1.7, 0.4), span(3.35, 0.35), span(5.0, 0.3)];
      for (let i = 0; i < 3; i++) connector(boxes[i], boxes[i + 1], hops[i]);

      const active = [
        scanP > 0 && scanP < 1 ? 1 : scanP >= 1 ? 0.35 : 0,
        parseP > 0 && parseP < 1 ? 1 : parseP >= 1 ? 0.35 : 0,
        flagP > 0 && flagP < 1 ? 1 : flagP >= 1 ? 0.35 : 0,
        callP > 0 ? 1 : 0,
      ];

      boxes.forEach((box, i) => frame(box, active[i]));

      ctx.font = labelFont(fs());
      ctx.textBaseline = "middle";
      boxes.forEach((box, i) => {
        ctx.fillStyle = active[i] > 0.5 ? INK : GRAPHITE_DIM;
        ctx.fillText(STAGES[i].toUpperCase(), box.x, box.y - 9);
      });

      drawScan(boxes[0], scanP, held);
      drawTokens(boxes[1], parseP, false);
      drawTokens(boxes[2], flagP, flagP > 0);
      drawCall(boxes[3], callP);

      const ly = height - 8;
      ctx.font = labelFont(fs() - 1);
      let lx = 14;
      (
        [
          ["avoid", "avoid"],
          ["caution", "caution"],
          ["clear", "clear"],
        ] as [Level, string][]
      ).forEach(([level, text]) => {
        ctx.fillStyle = LEVEL_COLOR[level];
        ctx.fillRect(lx, ly - 2, 8, 3);
        ctx.fillStyle = GRAPHITE_DIM;
        ctx.fillText(text, lx + 13, ly);
        lx += 13 + ctx.measureText(text).width + 18;
      });

      if (running) raf = requestAnimationFrame(draw);
    };

    if (reduced) draw(performance.now());
    else raf = requestAnimationFrame(draw);

    const io = new IntersectionObserver(
      ([entry]) => {
        if (reduced) return;
        if (entry.isIntersecting && !running) {
          running = true;
          last = performance.now();
          raf = requestAnimationFrame(draw);
        } else if (!entry.isIntersecting && running) {
          running = false;
          cancelAnimationFrame(raf);
        }
      },
      { threshold: 0 }
    );
    io.observe(canvas);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
    };
  }, [reduced]);

  return <canvas ref={ref} className="scan-schematic" aria-hidden="true" />;
}
