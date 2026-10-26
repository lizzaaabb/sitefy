"use client";
import { useState, useEffect, useRef } from "react";

// ფერები თითო პროექტისთვის — ერთი რიცხვი (hue) ან სამი [ზედა-მარცხენა, ზედა-მარჯვენა, ქვედა]
const HUES = {
  "valore.ge": [255, 75, 215],
  "utopiaviptravel.com": 230,
  "apollocreations.net": 260,
  "yourhood.ge": 30,
  "ocnebisremonti.ge": 85,
  "artofmovement.net": 15,
  "litox.ge": 250,
  "greenhallcapital.com": 195,
  "builde.ge": 140,
  "motionconcept.ge": 300,
};

const hostOf = (url) =>
  url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/.*$/, "");

const grad = ([a, b, c]) =>
  `radial-gradient(60% 65% at 15% 10%, oklch(0.52 0.17 ${a} / 0.9) 0%, oklch(0.52 0.17 ${a} / 0) 70%),` +
  `radial-gradient(55% 60% at 92% 18%, oklch(0.45 0.18 ${b} / 0.8) 0%, oklch(0.45 0.18 ${b} / 0) 70%),` +
  `radial-gradient(75% 60% at 60% 105%, oklch(0.4 0.16 ${c} / 0.85) 0%, oklch(0.4 0.16 ${c} / 0) 72%),` +
  `linear-gradient(160deg, oklch(0.2 0.05 ${a}), oklch(0.12 0.03 ${b}))`;

const MAX_TRIES = 8;

export default function LaptopMockup({ url, name, hue, screenshot, loadingText = "იტვირთება…" }) {
  const raw = hue ?? HUES[hostOf(url)] ?? 220;
  const hues = Array.isArray(raw) ? raw : [raw, raw + 50, raw - 40];

  const [useLocal, setUseLocal] = useState(Boolean(screenshot));
  const [tries, setTries] = useState(0);
  const [ready, setReady] = useState(false);
  const timer = useRef(null);
  useEffect(() => () => clearTimeout(timer.current), []);

  const remote =
    "https://s.wordpress.com/mshots/v1/" +
    encodeURIComponent(url) +
    "?w=1440&h=900&vpw=1440&vph=900" +
    (tries ? "&_r=" + tries : "");
  const src = useLocal ? screenshot : remote;

  const retry = () => {
    if (tries < MAX_TRIES) {
      timer.current = setTimeout(() => setTries((t) => t + 1), 4000);
    } else {
      setReady(true);
    }
  };

  const onLoad = (e) => {
    if (useLocal || e.currentTarget.naturalWidth > 400) setReady(true);
    else retry();
  };

  const onError = () => {
    if (useLocal) setUseLocal(false);
    else retry();
  };

  return (
    <div style={{ position: "relative", width: "100%", height: "100%", aspectRatio: "4 / 3", overflow: "hidden", background: grad(hues), isolation: "isolate" }}>
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(90% 60% at 50% 110%, rgba(0,0,0,0.18), rgba(0,0,0,0) 70%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", left: "11%", right: "11%", top: "15%", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div style={{ position: "relative", width: "100%", aspectRatio: "1440 / 948", background: "#0b0b0c", borderRadius: "14px 14px 4px 4px", boxShadow: "0 0 0 1.5px #9d9da2, 0 0 0 3px #2a2a2c, 0 40px 70px -20px rgba(0,0,0,0.55)", padding: "2.4% 2.4% 3.2%", boxSizing: "border-box" }}>
          <div style={{ position: "absolute", left: "50%", top: 0, transform: "translateX(-50%)", width: "13%", height: "3.2%", background: "#0b0b0c", borderRadius: "0 0 6px 6px", zIndex: 2 }} />
          <div style={{ position: "relative", width: "100%", height: "100%", borderRadius: 3, overflow: "hidden", background: "#141414" }}>
            {!ready && (
              <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, letterSpacing: "0.16em", color: "rgba(255,255,255,0.4)" }}>
                {loadingText}
              </div>
            )}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              key={src}
              src={src}
              alt={name}
              onLoad={onLoad}
              onError={onError}
              loading="lazy"
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "50% 0%", opacity: ready ? 1 : 0, transition: "opacity .5s ease", display: "block" }}
            />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(125deg, rgba(255,255,255,0.08), rgba(255,255,255,0) 40%)", pointerEvents: "none" }} />
          </div>
        </div>
        <div style={{ position: "relative", width: "118%", aspectRatio: "100 / 3.6", background: "linear-gradient(180deg, #e6e6e9 0%, #c9c9ce 45%, #8f8f95 100%)", borderRadius: "2px 2px 40% 40% / 2px 2px 100% 100%", boxShadow: "0 18px 30px -8px rgba(0,0,0,0.5)" }}>
          <div style={{ position: "absolute", left: "50%", top: 0, transform: "translateX(-50%)", width: "15%", height: "42%", background: "linear-gradient(180deg, #a9a9ae, #c6c6cb)", borderRadius: "0 0 10px 10px" }} />
        </div>
      </div>
    </div>
  );
}
