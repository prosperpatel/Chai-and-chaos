import React, { useState, useEffect, useRef } from "react";

// ==========================================
// CHAI & CHAOS — HOSTEL FOOD FIGHT
// Custom avatars + catchphrases for each roomie
// ==========================================

// ====== CUSTOM CARTOON AVATARS (SVG, matched to real photos) ======
function Avatar({ who, size = 80 }) {
  const avatars = {
    shubhi: (
      <svg viewBox="0 0 100 110" width={size} height={size}>
        <path d="M 18 48 Q 12 85 22 105 L 78 105 Q 88 85 82 48 Q 82 22 50 18 Q 18 22 18 48 Z" fill="#3d2515" />
        <path d="M 22 55 Q 18 80 26 100" stroke="#c2986a" strokeWidth="2.5" fill="none" opacity="0.7" />
        <path d="M 78 55 Q 82 80 74 100" stroke="#c2986a" strokeWidth="2.5" fill="none" opacity="0.7" />
        <path d="M 30 60 Q 28 80 32 95" stroke="#a67a4d" strokeWidth="1.5" fill="none" opacity="0.5" />
        <ellipse cx="50" cy="55" rx="21" ry="24" fill="#e8b894" />
        <path d="M 28 42 Q 32 28 50 26 Q 68 28 72 42 Q 62 34 50 35 Q 38 34 28 42 Z" fill="#2d1a0e" />
        <ellipse cx="42" cy="54" rx="2.5" ry="3" fill="#1a0f08" />
        <ellipse cx="58" cy="54" rx="2.5" ry="3" fill="#1a0f08" />
        <circle cx="43" cy="53" r="0.8" fill="white" />
        <circle cx="59" cy="53" r="0.8" fill="white" />
        <path d="M 37 48 Q 42 46 47 49" stroke="#1a0f08" strokeWidth="1.5" fill="none" />
        <path d="M 53 49 Q 58 46 63 48" stroke="#1a0f08" strokeWidth="1.5" fill="none" />
        <path d="M 44 68 Q 50 72 56 68 Q 53 70 50 70 Q 47 70 44 68 Z" fill="#e91e63" />
        <path d="M 24 90 L 26 110 L 74 110 L 76 90 Q 62 83 50 83 Q 38 83 24 90 Z" fill="#4a1a3d" />
        <text x="76" y="84" fontSize="12">💅</text>
      </svg>
    ),
    aish: (
      <svg viewBox="0 0 100 110" width={size} height={size}>
        <path d="M 20 46 Q 14 88 24 108 L 76 108 Q 86 88 80 46 Q 80 20 50 17 Q 20 20 20 46 Z" fill="#0d0604" />
        <ellipse cx="50" cy="55" rx="21" ry="24" fill="#d9a578" />
        <path d="M 28 40 Q 36 26 50 24 Q 64 26 72 40 L 52 35 L 50 28 L 48 35 Z" fill="#050302" />
        <circle cx="50" cy="37" r="2.2" fill="#dc2626" />
        <circle cx="50" cy="37" r="1" fill="#7f1d1d" />
        <ellipse cx="42" cy="54" rx="2.5" ry="3" fill="#1a0f08" />
        <ellipse cx="58" cy="54" rx="2.5" ry="3" fill="#1a0f08" />
        <circle cx="43" cy="53" r="0.8" fill="white" />
        <circle cx="59" cy="53" r="0.8" fill="white" />
        <path d="M 37 49 Q 42 47 47 49" stroke="#1a0f08" strokeWidth="1.5" fill="none" />
        <path d="M 53 49 Q 58 47 63 49" stroke="#1a0f08" strokeWidth="1.5" fill="none" />
        <path d="M 43 67 Q 50 73 57 67" stroke="#7c2d12" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M 22 90 L 24 110 L 76 110 L 78 90 Q 62 82 50 82 Q 38 82 22 90 Z" fill="#dc2626" />
        <circle cx="50" cy="88" r="1" fill="#fbbf24" />
        <circle cx="45" cy="92" r="0.8" fill="#fbbf24" />
        <circle cx="55" cy="92" r="0.8" fill="#fbbf24" />
        <circle cx="42" cy="97" r="0.7" fill="#fbbf24" />
        <circle cx="58" cy="97" r="0.7" fill="#fbbf24" />
        <path d="M 18 88 Q 14 100 22 110 L 28 110 L 26 92 Z" fill="#b91c1c" />
      </svg>
    ),
    appu: (
      <svg viewBox="0 0 100 110" width={size} height={size}>
        <path d="M 20 46 Q 14 88 24 108 L 76 108 Q 86 88 80 46 Q 80 20 50 17 Q 20 20 20 46 Z" fill="#1a0f08" />
        <ellipse cx="50" cy="55" rx="21" ry="24" fill="#d9a578" />
        <path d="M 28 42 Q 34 28 50 26 Q 66 28 72 42 Q 60 34 50 35 Q 40 34 28 42 Z" fill="#0d0604" />
        <path d="M 30 48 L 48 49 L 50 57 L 48 58 L 32 58 Q 28 57 28 52 Q 28 48 30 48 Z" fill="#1a0f08" />
        <path d="M 70 48 L 52 49 L 50 57 L 52 58 L 68 58 Q 72 57 72 52 Q 72 48 70 48 Z" fill="#1a0f08" />
        <rect x="48" y="52" width="4" height="2" fill="#1a0f08" />
        <ellipse cx="38" cy="52" rx="4" ry="2" fill="#4b5563" opacity="0.6" />
        <ellipse cx="62" cy="52" rx="4" ry="2" fill="#4b5563" opacity="0.6" />
        <path d="M 42 68 Q 50 74 58 68" stroke="#7c2d12" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M 22 90 L 24 110 L 76 110 L 78 90 Q 62 82 50 82 Q 38 82 22 90 Z" fill="#ec4899" />
        <path d="M 66 82 Q 82 90 78 110 L 70 110 Q 64 94 62 86 Z" fill="#dc2626" />
        <circle cx="72" cy="92" r="0.8" fill="#fef08a" />
        <circle cx="74" cy="98" r="0.8" fill="#fef08a" />
        <circle cx="70" cy="103" r="0.8" fill="#fef08a" />
        <circle cx="27" cy="60" r="2" fill="#fbbf24" />
      </svg>
    ),
    proxy: (
      <svg viewBox="0 0 100 110" width={size} height={size}>
        <path d="M 20 50 Q 15 38 22 30 L 28 20 L 34 28 L 40 16 L 46 26 L 52 14 L 58 26 L 64 18 L 70 28 L 76 22 L 82 36 Q 84 50 80 52 L 20 52 Z" fill="#1a0f08" />
        <ellipse cx="50" cy="58" rx="20" ry="23" fill="#c89070" />
        <circle cx="40" cy="57" r="8.5" fill="#1a0f08" stroke="#4a2a1a" strokeWidth="1.5" />
        <circle cx="60" cy="57" r="8.5" fill="#1a0f08" stroke="#4a2a1a" strokeWidth="1.5" />
        <line x1="48.5" y1="57" x2="51.5" y2="57" stroke="#4a2a1a" strokeWidth="2" />
        <circle cx="37" cy="54" r="2.5" fill="#6b7280" opacity="0.5" />
        <circle cx="57" cy="54" r="2.5" fill="#6b7280" opacity="0.5" />
        <ellipse cx="50" cy="73" rx="9" ry="1.8" fill="#2d1a0e" opacity="0.6" />
        <path d="M 43 70 Q 50 67 57 70" stroke="#2d1a0e" strokeWidth="2" fill="none" opacity="0.7" />
        <path d="M 46 76 L 54 76" stroke="#4a2a1a" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M 22 90 L 24 110 L 76 110 L 78 90 Q 62 82 50 82 Q 38 82 22 90 Z" fill="#7f1d1d" />
        <path d="M 42 83 L 40 92 L 50 88 L 60 92 L 58 83 Z" fill="#5f0f0f" />
        <line x1="50" y1="88" x2="50" y2="110" stroke="#9ca3af" strokeWidth="1.2" />
        <circle cx="50" cy="95" r="1.2" fill="#d1d5db" />
        <path d="M 50 83 Q 44 92 47 100 Q 49 105 46 110" stroke="#ea580c" strokeWidth="2" fill="none" />
      </svg>
    )
  };
  return <div style={{ display: "inline-block" }}>{avatars[who]}</div>;
}

// ====== CHARACTER DATA ======
const CHARACTERS = {
  shubhi: {
    name: "Shubhi",
    color: "#ec4899",
    bg: "#fce7f3",
    power: "PERFECTIONIST",
    ability: "2× coins on every order!",
    intro: "Bhhaaii! Main aa gayi!",
    servedQuips: ["Bhhaaii easy tha!", "Abe jaa naa, next!", "Bhhaaii mast!"],
    leftQuips: ["Abe jaa naa!", "Bhhaaii tension!"],
    comboQuips: ["BHHAAII YAAR! 🔥", "ABE JAA NAA, on fire!"],
    gameOverQuip: "Bhhaaii thak gayi. Phir khelte hain.",
  },
  aish: {
    name: "Aish",
    color: "#dc2626",
    bg: "#fee2e2",
    power: "CHARMER",
    ability: "Customers wait 50% longer 🗣️",
    intro: "Sun na! Tere ko pta hai?",
    servedQuips: ["Sun na, mast tha!", "Tere ko pta hai? Best hoon!", "Sun na, ek aur!"],
    leftQuips: ["Sun na, ruk jaa!", "Tere ko pta hai bura laga?"],
    comboQuips: ["SUN NA, COMBO!", "TERE KO PTA HAI? LEGEND!"],
    gameOverQuip: "Sun na, phir khelenge!",
  },
  appu: {
    name: "Appu",
    color: "#f59e0b",
    bg: "#fef3c7",
    power: "FOODIE",
    ability: "+2 seconds on every order 🕶️",
    intro: "Oye! Achha ji, menu dikhao!",
    servedQuips: ["Oye mast!", "Achha ji, easy!", "Oye, next plate!"],
    leftQuips: ["Oye ruk!", "Achha ji, aise kaise?"],
    comboQuips: ["OYE! FIRE ON!", "ACHHA JI, UNSTOPPABLE!"],
    gameOverQuip: "Oye bas? Achha ji, phir se!",
  },
  proxy: {
    name: "Proxy",
    color: "#7f1d1d",
    bg: "#e7e5e4",
    power: "HACKER",
    ability: "Every 5th order auto-serves 🤖",
    intro: "Thik hai. Dekhte hain.",
    servedQuips: ["Thik hai.", "Dekhte hain.", "Hmm."],
    leftQuips: ["Thik hai.", "..."],
    comboQuips: ["Dekhte hain... chal raha hai.", "Thik hai. Locked."],
    gameOverQuip: "Thik hai. Dekhte hain phir.",
  }
};

// ====== MENU ======
const MENU = [
  { id: "chai", emoji: "☕", name: "Chai", price: 15 },
  { id: "maggi", emoji: "🍜", name: "Maggi", price: 30 },
  { id: "samosa", emoji: "🥟", name: "Samosa", price: 20 },
  { id: "lassi", emoji: "🥛", name: "Lassi", price: 25 },
  { id: "pakora", emoji: "🧆", name: "Pakora", price: 35 },
  { id: "momo", emoji: "🥠", name: "Momos", price: 40 }
];

const FACES = ["🧑‍🎓", "👨‍💻", "👩‍🎓", "🧕", "👨‍🦱", "👩‍🦰", "🧑‍🦱", "👨‍🎓", "👩"];

const LEVELS = [
  { id: 1, name: "Monday Morning", subtitle: "Easy start. Everyone's sleepy.", emoji: "☀️", duration: 45, target: 150, spawnRate: 2800, bgGradient: "linear-gradient(180deg, #fef3c7 0%, #fde68a 100%)" },
  { id: 2, name: "Maggi Rush Hour", subtitle: "EVERYONE wants Maggi.", emoji: "🍜", duration: 50, target: 300, spawnRate: 2200, bgGradient: "linear-gradient(180deg, #fed7aa 0%, #fb923c 100%)" },
  { id: 3, name: "Power Cut Madness", subtitle: "Bijli gayi. Candles only.", emoji: "🕯️", duration: 55, target: 500, spawnRate: 1800, bgGradient: "linear-gradient(180deg, #1e293b 0%, #334155 100%)" }
];

const POWERUPS = [
  { id: "freeze", emoji: "❄️", name: "FREEZE", desc: "Pause timers 4s", color: "#60a5fa" },
  { id: "coins", emoji: "💰", name: "MONEY RAIN", desc: "+₹100", color: "#fbbf24" },
  { id: "party", emoji: "🎉", name: "PARTY", desc: "2× coins 6s", color: "#ec4899" }
];

const COMBO_TIERS = [
  { min: 3, label: "NICE! 🎯", color: "#10b981" },
  { min: 5, label: "ON FIRE! 🔥", color: "#f59e0b" },
  { min: 10, label: "SAMOSA STAR! ⭐", color: "#ec4899" },
  { min: 15, label: "CHAI CHAMPION! 👑", color: "#8b5cf6" }
];

function getTier(combo) {
  let t = null;
  for (const x of COMBO_TIERS) if (combo >= x.min) t = x;
  return t;
}

const STICKERS = [
  { id: "first-serve", emoji: "🎉", name: "First Customer" },
  { id: "combo-5", emoji: "🔥", name: "5-Combo" },
  { id: "combo-10", emoji: "⭐", name: "10-Combo" },
  { id: "level1-clear", emoji: "☀️", name: "Monday Master" },
  { id: "level2-clear", emoji: "🍜", name: "Maggi Survivor" },
  { id: "level3-clear", emoji: "🕯️", name: "Blackout Hero" },
  { id: "all-chars", emoji: "💎", name: "Played All 4" },
  { id: "power-up", emoji: "⚡", name: "Power-up Grabber" }
];

// ==========================================
// MAIN APP
// ==========================================
export default function ChaiAndChaos() {
  const [scene, setScene] = useState("title");
  const [chef, setChef] = useState(null);
  const [level, setLevel] = useState(1);
  const [unlocked, setUnlocked] = useState(["shubhi"]);
  const [playedChars, setPlayedChars] = useState([]);
  const [stickers, setStickers] = useState([]);
  const [highScore, setHighScore] = useState(0);

  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [timeLeft, setTimeLeft] = useState(45);
  const [customers, setCustomers] = useState([]);
  const [selected, setSelected] = useState(null);
  const [combo, setCombo] = useState(0);
  const [served, setServed] = useState(0);
  const [floatingText, setFloatingText] = useState([]);
  const [powerup, setPowerup] = useState(null);
  const [frozen, setFrozen] = useState(false);
  const [partyMode, setPartyMode] = useState(false);
  const [speechBubble, setSpeechBubble] = useState(null);
  const [comboFlash, setComboFlash] = useState(null);

  const custIdRef = useRef(0);
  const floatIdRef = useRef(0);
  const pausedRef = useRef(false);

  useEffect(() => {
    if (scene !== "play") return;
    const lv = LEVELS[level - 1];
    const spawner = setInterval(() => {
      if (pausedRef.current) return;
      setCustomers((prev) => {
        if (prev.length >= 4) return prev;
        return [...prev, makeCustomer(custIdRef.current++, chef, level)];
      });
    }, lv.spawnRate);

    const ticker = setInterval(() => {
      if (pausedRef.current) return;
      setCustomers((prev) =>
        prev.map((c) => ({ ...c, ticksLeft: c.ticksLeft - 1 })).filter((c) => {
          if (c.ticksLeft <= 0) {
            setLives((l) => l - 1);
            setCombo(0);
            addFloat("💔", "#dc2626");
            triggerSpeech("left");
            return false;
          }
          return true;
        })
      );
      setTimeLeft((t) => t - 1);
    }, 1000);

    const puSpawner = setInterval(() => {
      if (pausedRef.current) return;
      if (Math.random() > 0.5) {
        const pu = POWERUPS[Math.floor(Math.random() * POWERUPS.length)];
        setPowerup({ ...pu, id: Date.now() });
        setTimeout(() => setPowerup((p) => (p && p.id === pu.id ? null : p)), 4000);
      }
    }, 8000);

    return () => {
      clearInterval(spawner);
      clearInterval(ticker);
      clearInterval(puSpawner);
    };
  }, [scene, chef, level]);

  useEffect(() => {
    if (scene === "play" && (lives <= 0 || timeLeft <= 0)) {
      pausedRef.current = true;
      setTimeout(() => setScene("levelEnd"), 400);
    }
  }, [lives, timeLeft, scene]);

  useEffect(() => {
    if (scene === "levelEnd") {
      const lv = LEVELS[level - 1];
      if (score >= lv.target) {
        const stickMap = { 1: "level1-clear", 2: "level2-clear", 3: "level3-clear" };
        const s = stickMap[level];
        if (s) setStickers((st) => st.includes(s) ? st : [...st, s]);
        const unlockMap = { 1: "aish", 2: "appu", 3: "proxy" };
        const next = unlockMap[level];
        if (next) setUnlocked((u) => u.includes(next) ? u : [...u, next]);
      }
      if (score > highScore) setHighScore(score);
    }
  }, [scene]);

  const makeCustomer = (id, chef, level) => {
    const item = MENU[Math.floor(Math.random() * MENU.length)];
    const face = FACES[Math.floor(Math.random() * FACES.length)];
    let base = 8 - Math.floor(level / 2);
    if (chef === "aish") base = Math.floor(base * 1.5);
    if (chef === "appu") base += 2;
    return { id, face, orderId: item.id, ticksLeft: base, maxTicks: base };
  };

  const addFloat = (text, color) => {
    const id = floatIdRef.current++;
    setFloatingText((prev) => [...prev, { id, text, color, x: Math.random() * 50 + 25 }]);
    setTimeout(() => setFloatingText((prev) => prev.filter((f) => f.id !== id)), 1400);
  };

  const triggerSpeech = (type) => {
    if (!chef) return;
    const c = CHARACTERS[chef];
    let text = "";
    if (type === "served") text = c.servedQuips[Math.floor(Math.random() * c.servedQuips.length)];
    else if (type === "left") text = c.leftQuips[Math.floor(Math.random() * c.leftQuips.length)];
    else if (type === "combo") text = c.comboQuips[Math.floor(Math.random() * c.comboQuips.length)];
    else if (type === "intro") text = c.intro;
    setSpeechBubble(text);
    setTimeout(() => setSpeechBubble(null), 1800);
  };

  const serveCustomer = (customerId) => {
    const customer = customers.find((c) => c.id === customerId);
    if (!customer || !selected) return;

    if (customer.orderId === selected) {
      const item = MENU.find((m) => m.id === selected);
      let earned = item.price;
      if (chef === "shubhi") earned *= 2;
      if (partyMode) earned *= 2;
      const comboBonus = Math.floor(combo * 3);
      const total = earned + comboBonus;

      setScore((s) => s + total);
      setCombo((c) => {
        const nc = c + 1;
        const tier = getTier(nc);
        if (tier && nc === tier.min) {
          setComboFlash(tier);
          setTimeout(() => setComboFlash(null), 1200);
          triggerSpeech("combo");
          if (nc === 5) setStickers((s) => s.includes("combo-5") ? s : [...s, "combo-5"]);
          if (nc === 10) setStickers((s) => s.includes("combo-10") ? s : [...s, "combo-10"]);
        }
        return nc;
      });
      setServed((s) => {
        const next = s + 1;
        if (next === 1) setStickers((st) => st.includes("first-serve") ? st : [...st, "first-serve"]);
        if (chef === "proxy" && next % 5 === 0) {
          setTimeout(() => {
            setCustomers((prev) => {
              if (prev.length === 0) return prev;
              const autoItem = MENU.find((m) => m.id === prev[0].orderId);
              setScore((sc) => sc + autoItem.price);
              addFloat("🤖 +₹" + autoItem.price, "#7f1d1d");
              return prev.slice(1);
            });
          }, 300);
        }
        return next;
      });
      addFloat(`+₹${total}`, "#16a34a");
      triggerSpeech("served");
      setCustomers((prev) => prev.filter((c) => c.id !== customerId));
    } else {
      setCombo(0);
      setLives((l) => l - 1);
      addFloat("✗", "#dc2626");
      triggerSpeech("left");
    }
    setSelected(null);
  };

  const grabPowerup = (pu) => {
    if (pu.name === "FREEZE") {
      setFrozen(true);
      pausedRef.current = true;
      setTimeout(() => {
        setFrozen(false);
        pausedRef.current = false;
      }, 4000);
    } else if (pu.name === "MONEY RAIN") {
      setScore((s) => s + 100);
      addFloat("+₹100 💰", "#fbbf24");
    } else if (pu.name === "PARTY") {
      setPartyMode(true);
      setTimeout(() => setPartyMode(false), 6000);
    }
    setStickers((s) => s.includes("power-up") ? s : [...s, "power-up"]);
    setPowerup(null);
  };

  const startLevel = (lvlNum) => {
    const lv = LEVELS[lvlNum - 1];
    setLevel(lvlNum);
    setScore(0);
    setLives(3);
    setTimeLeft(lv.duration);
    setCustomers([]);
    setCombo(0);
    setServed(0);
    setSelected(null);
    setFloatingText([]);
    setPowerup(null);
    setFrozen(false);
    setPartyMode(false);
    pausedRef.current = false;
    setScene("play");
    setTimeout(() => triggerSpeech("intro"), 300);
  };

  const pickChef = (key) => {
    if (!unlocked.includes(key)) return;
    setChef(key);
    const updated = [...new Set([...playedChars, key])];
    setPlayedChars(updated);
    if (updated.length === 4) setStickers((s) => s.includes("all-chars") ? s : [...s, "all-chars"]);
    setScene("levelSelect");
  };

  return (
    <div style={styles.app}>
      <style>{globalCSS}</style>
      {scene === "title" && <TitleScreen onStart={() => setScene("howto")} onStickers={() => setScene("stickers")} stickerCount={stickers.length} />}
      {scene === "howto" && <HowTo onNext={() => setScene("characterSelect")} />}
      {scene === "characterSelect" && <CharSelect unlocked={unlocked} onPick={pickChef} onBack={() => setScene("title")} />}
      {scene === "levelSelect" && <LevelSelect chef={chef} onStart={startLevel} onBack={() => setScene("characterSelect")} />}
      {scene === "play" && (
        <Play
          chef={chef} level={level} score={score} lives={lives} timeLeft={timeLeft}
          customers={customers} selected={selected} setSelected={setSelected}
          serveCustomer={serveCustomer} combo={combo} floatingText={floatingText}
          powerup={powerup} grabPowerup={grabPowerup} frozen={frozen}
          partyMode={partyMode} speechBubble={speechBubble} comboFlash={comboFlash}
        />
      )}
      {scene === "levelEnd" && (
        <LevelEnd
          chef={chef} level={level} score={score} served={served}
          onContinue={() => {
            const lv = LEVELS[level - 1];
            if (score >= lv.target && level < 3) {
              setLevel(level + 1);
              setScene("levelSelect");
            } else {
              setScene("levelSelect");
            }
          }}
          onMenu={() => setScene("title")}
        />
      )}
      {scene === "stickers" && <StickerBook stickers={stickers} onBack={() => setScene("title")} highScore={highScore} />}
    </div>
  );
}

// ====== SCREENS ======
function TitleScreen({ onStart, onStickers, stickerCount }) {
  return (
    <div style={styles.centerScreen}>
      <div style={{ textAlign: "center", padding: 20 }}>
        <div style={{ fontSize: 60, marginBottom: 6, animation: "wiggle 2s ease-in-out infinite" }}>☕🍜🥟</div>
        <h1 style={styles.titleLogo}>Chai & Chaos</h1>
        <div style={styles.titleTagline}>Hostel Food Fight!</div>
        <p style={styles.titleDesc}>
          Canteen Aunty is missing. Hungry students are screaming.<br />
          <strong>You have 45 seconds. Go!</strong>
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: 6, margin: "20px 0", flexWrap: "wrap" }}>
          <Avatar who="shubhi" size={74} />
          <Avatar who="aish" size={74} />
          <Avatar who="appu" size={74} />
          <Avatar who="proxy" size={74} />
        </div>
        <button style={styles.playBtn} onClick={onStart}>▶ PLAY</button>
        <div style={{ marginTop: 14 }}>
          <button style={styles.ghostBtn} onClick={onStickers}>🏆 Sticker Book ({stickerCount}/8)</button>
        </div>
      </div>
    </div>
  );
}

function HowTo({ onNext }) {
  return (
    <div style={styles.centerScreen}>
      <div style={styles.howCard}>
        <div style={styles.howLabel}>HOW TO PLAY</div>
        <h2 style={styles.howTitle}>Just 2 taps!</h2>
        <div style={styles.howStep}>
          <div style={styles.howNum}>1</div>
          <div>
            <div style={styles.howStepTitle}>See what they want 🧑‍🎓💭☕</div>
            <div style={styles.howStepDesc}>Customer appears with a food bubble. Serve fast!</div>
          </div>
        </div>
        <div style={styles.howStep}>
          <div style={styles.howNum}>2</div>
          <div>
            <div style={styles.howStepTitle}>Tap the food item 👇</div>
            <div style={styles.howStepDesc}>Pick from 6 menu items at the bottom.</div>
          </div>
        </div>
        <div style={styles.howStep}>
          <div style={styles.howNum}>3</div>
          <div>
            <div style={styles.howStepTitle}>Tap the customer ✅</div>
            <div style={styles.howStepDesc}>Right order = coins + combo. Wrong = lose a life.</div>
          </div>
        </div>
        <div style={styles.howBonus}>
          🎁 Catch power-ups, build combos, unlock all 4 characters!
        </div>
        <button style={styles.playBtn} onClick={onNext}>GOT IT! →</button>
      </div>
    </div>
  );
}

function CharSelect({ unlocked, onPick, onBack }) {
  return (
    <div style={{ padding: 16, maxWidth: 900, margin: "0 auto" }}>
      <div style={{ textAlign: "center", marginBottom: 20 }}>
        <div style={styles.howLabel}>PICK YOUR CHEF</div>
        <h1 style={styles.sectionHeading}>Who's on duty?</h1>
        <p style={{ color: "#78350f", fontSize: 13 }}>Beat levels to unlock all 4!</p>
      </div>
      <div style={styles.charGrid}>
        {Object.entries(CHARACTERS).map(([key, c]) => {
          const isUnlocked = unlocked.includes(key);
          return (
            <div
              key={key}
              onClick={() => isUnlocked && onPick(key)}
              style={{
                ...styles.charCard,
                background: c.bg,
                borderColor: c.color,
                opacity: isUnlocked ? 1 : 0.5,
                cursor: isUnlocked ? "pointer" : "not-allowed",
                position: "relative"
              }}
            >
              {!isUnlocked && (
                <div style={styles.lockOverlay}>
                  🔒
                  <div style={{ fontSize: 11, marginTop: 6, color: "#1a0f08", fontWeight: 700 }}>
                    Beat Level {key === "aish" ? 1 : key === "appu" ? 2 : 3}
                  </div>
                </div>
              )}
              <div style={{ textAlign: "center" }}>
                <Avatar who={key} size={100} />
              </div>
              <h3 style={{ ...styles.charName, color: c.color }}>{c.name}</h3>
              <div style={styles.powerBadgeWrap}>
                <div style={styles.powerBadge}>{c.power}</div>
              </div>
              <div style={styles.abilityText}>{c.ability}</div>
              <div style={styles.quipBubble}>"{c.intro}"</div>
              {isUnlocked && (
                <button style={{ ...styles.pickBtn, background: c.color }}>
                  PLAY AS {c.name.toUpperCase()}
                </button>
              )}
            </div>
          );
        })}
      </div>
      <div style={{ textAlign: "center", marginTop: 20 }}>
        <button style={styles.ghostBtn} onClick={onBack}>← back</button>
      </div>
    </div>
  );
}

function LevelSelect({ chef, onStart, onBack }) {
  const c = CHARACTERS[chef];
  return (
    <div style={{ padding: 16, maxWidth: 600, margin: "0 auto" }}>
      <div style={{ textAlign: "center", marginBottom: 16 }}>
        <Avatar who={chef} size={90} />
        <h2 style={{ color: c.color, fontFamily: "'Fredoka', sans-serif", fontSize: 28, marginTop: 6 }}>
          {c.name} is ready!
        </h2>
        <div style={{ ...styles.quipBubble, maxWidth: 260, margin: "8px auto" }}>"{c.intro}"</div>
      </div>
      <div style={styles.howLabel}>CHOOSE LEVEL</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 12 }}>
        {LEVELS.map((lv) => (
          <button key={lv.id} onClick={() => onStart(lv.id)} style={{ ...styles.levelCard, background: lv.bgGradient }}>
            <div style={{ fontSize: 42 }}>{lv.emoji}</div>
            <div style={{ flex: 1, textAlign: "left" }}>
              <div style={styles.levelName}>Level {lv.id}: {lv.name}</div>
              <div style={styles.levelSub}>{lv.subtitle}</div>
              <div style={styles.levelMeta}>🎯 ₹{lv.target} · ⏱ {lv.duration}s</div>
            </div>
            <div style={{ fontSize: 28 }}>▶</div>
          </button>
        ))}
      </div>
      <div style={{ textAlign: "center", marginTop: 16 }}>
        <button style={styles.ghostBtn} onClick={onBack}>← change character</button>
      </div>
    </div>
  );
}

function Play({ chef, level, score, lives, timeLeft, customers, selected, setSelected, serveCustomer, combo, floatingText, powerup, grabPowerup, frozen, partyMode, speechBubble, comboFlash }) {
  const c = CHARACTERS[chef];
  const lv = LEVELS[level - 1];
  const isDark = level === 3;
  return (
    <div style={{ ...styles.playArea, background: lv.bgGradient, color: isDark ? "#fef3c7" : "#1a0f08" }}>
      {frozen && <div style={styles.frozenOverlay}>❄️ FROZEN ❄️</div>}
      {partyMode && <div style={styles.partyOverlay}>🎉 PARTY! 2× COINS 🎉</div>}

      <div style={styles.hud}>
        <div style={styles.hudBox}>
          <div style={styles.hudLabel}>SCORE</div>
          <div style={styles.hudValue}>₹{score}</div>
          <div style={styles.targetText}>/ ₹{lv.target}</div>
        </div>
        <div style={styles.hudBox}>
          <div style={styles.hudLabel}>TIME</div>
          <div style={{ ...styles.hudValue, color: timeLeft < 10 ? "#dc2626" : "inherit" }}>{timeLeft}s</div>
        </div>
        <div style={styles.hudBox}>
          <div style={styles.hudLabel}>LIVES</div>
          <div style={{ ...styles.hudValue, fontSize: 16 }}>{"❤️".repeat(lives)}</div>
        </div>
      </div>

      <div style={styles.chefCorner}>
        <div style={{ position: "relative" }}>
          <Avatar who={chef} size={90} />
          {speechBubble && (
            <div style={{ ...styles.speechBubble, borderColor: c.color }}>
              {speechBubble}
            </div>
          )}
        </div>
        {combo > 0 && <div style={{ ...styles.comboCounter, color: c.color }}>{combo}× COMBO</div>}
      </div>

      {comboFlash && <div style={{ ...styles.comboFlash, color: comboFlash.color }}>{comboFlash.label}</div>}

      <div style={styles.customerArea}>
        {customers.length === 0 && (
          <div style={{ textAlign: "center", opacity: 0.6, marginTop: 40, fontSize: 13 }}>
            Waiting for customers...
          </div>
        )}
        {customers.map((cust) => {
          const item = MENU.find((m) => m.id === cust.orderId);
          const pct = (cust.ticksLeft / cust.maxTicks) * 100;
          const urgent = pct < 30;
          return (
            <button
              key={cust.id}
              onClick={() => serveCustomer(cust.id)}
              disabled={!selected}
              style={{
                ...styles.customer,
                opacity: selected ? 1 : 0.85,
                animation: urgent ? "shake 0.4s infinite" : "bob 1.5s infinite"
              }}
            >
              <div style={{ ...styles.timerBar, background: urgent ? "#dc2626" : "#10b981", width: `${pct}%` }} />
              <div style={styles.customerFace}>{cust.face}</div>
              <div style={{ ...styles.orderBubble, borderColor: isDark ? "#fef3c7" : "#1a0f08" }}>
                <div style={{ fontSize: 22 }}>{item.emoji}</div>
                <div style={{ fontSize: 9, fontWeight: 700 }}>{item.name}</div>
              </div>
            </button>
          );
        })}
      </div>

      {powerup && (
        <button onClick={() => grabPowerup(powerup)} style={{ ...styles.powerupBtn, background: powerup.color }}>
          <div style={{ fontSize: 26 }}>{powerup.emoji}</div>
          <div style={{ fontSize: 10, fontWeight: 800 }}>{powerup.name}</div>
          <div style={{ fontSize: 9 }}>{powerup.desc}</div>
        </button>
      )}

      {floatingText.map((f) => (
        <div key={f.id} style={{ ...styles.floatText, left: `${f.x}%`, color: f.color }}>{f.text}</div>
      ))}

      <div style={styles.menuBar}>
        <div style={{ ...styles.menuLabel, color: isDark ? "#fef3c7" : "#78350f" }}>TAP ORDER → TAP CUSTOMER</div>
        <div style={styles.menuGrid}>
          {MENU.map((m) => (
            <button
              key={m.id}
              onClick={() => setSelected(m.id)}
              style={{
                ...styles.menuItem,
                background: selected === m.id ? c.color : "#fef8ed",
                color: selected === m.id ? "white" : "#1a0f08",
                transform: selected === m.id ? "translateY(-6px)" : "translateY(0)",
                boxShadow: selected === m.id ? `0 8px 0 ${c.color}dd` : "0 4px 0 rgba(0,0,0,0.2)"
              }}
            >
              <div style={{ fontSize: 24 }}>{m.emoji}</div>
              <div style={{ fontSize: 9, fontWeight: 700 }}>{m.name}</div>
              <div style={{ fontSize: 9 }}>₹{m.price}</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function LevelEnd({ chef, level, score, served, onContinue, onMenu }) {
  const c = CHARACTERS[chef];
  const lv = LEVELS[level - 1];
  const won = score >= lv.target;
  return (
    <div style={styles.centerScreen}>
      <div style={{ ...styles.endCard, borderColor: won ? "#16a34a" : "#dc2626" }}>
        <div style={{ fontSize: 70, marginBottom: 6 }}>{won ? "🎉" : "😅"}</div>
        <div style={styles.howLabel}>{won ? "LEVEL CLEAR!" : "SO CLOSE..."}</div>
        <h2 style={{ ...styles.sectionHeading, color: won ? "#16a34a" : "#dc2626", fontSize: 30 }}>
          {won ? "You did it!" : "Try again!"}
        </h2>
        <div style={{ margin: "14px 0" }}>
          <Avatar who={chef} size={90} />
          <div style={{ ...styles.quipBubble, maxWidth: 260, margin: "8px auto", borderColor: c.color, border: `2px solid ${c.color}` }}>
            "{won ? c.comboQuips[0] : c.gameOverQuip}"
          </div>
        </div>
        <div style={styles.endStats}>
          <div style={styles.endStat}>
            <div style={styles.endStatLabel}>SCORE</div>
            <div style={styles.endStatValue}>₹{score}</div>
          </div>
          <div style={styles.endStat}>
            <div style={styles.endStatLabel}>SERVED</div>
            <div style={styles.endStatValue}>{served}</div>
          </div>
          <div style={styles.endStat}>
            <div style={styles.endStatLabel}>TARGET</div>
            <div style={styles.endStatValue}>₹{lv.target}</div>
          </div>
        </div>
        {won && level < 3 && (
          <div style={styles.unlockBadge}>
            🎁 UNLOCKED: {level === 1 ? "Aish ❤️" : level === 2 ? "Appu 🕶️" : "Proxy 🎧"}!
          </div>
        )}
        <div style={{ display: "flex", gap: 10, justifyContent: "center", marginTop: 14, flexWrap: "wrap" }}>
          <button style={styles.playBtn} onClick={onContinue}>
            {won && level < 3 ? "NEXT LEVEL →" : "PLAY AGAIN ↻"}
          </button>
          <button style={styles.ghostBtn} onClick={onMenu}>🏠 MENU</button>
        </div>
      </div>
    </div>
  );
}

function StickerBook({ stickers, onBack, highScore }) {
  return (
    <div style={{ padding: 16, maxWidth: 600, margin: "0 auto" }}>
      <div style={{ textAlign: "center", marginBottom: 18 }}>
        <div style={styles.howLabel}>YOUR COLLECTION</div>
        <h1 style={styles.sectionHeading}>🏆 Sticker Book</h1>
        <p style={{ color: "#78350f", fontSize: 14 }}>High Score: <strong>₹{highScore}</strong> · {stickers.length}/8</p>
      </div>
      <div style={styles.stickerGrid}>
        {STICKERS.map((s) => {
          const earned = stickers.includes(s.id);
          return (
            <div key={s.id} style={{
              ...styles.sticker,
              opacity: earned ? 1 : 0.25,
              filter: earned ? "none" : "grayscale(1)",
              background: earned ? "#fef3c7" : "#f3f4f6"
            }}>
              <div style={{ fontSize: 42 }}>{s.emoji}</div>
              <div style={styles.stickerName}>{s.name}</div>
              {!earned && <div style={{ fontSize: 9, color: "#6b7280", marginTop: 3 }}>LOCKED</div>}
            </div>
          );
        })}
      </div>
      <div style={{ textAlign: "center", marginTop: 20 }}>
        <button style={styles.playBtn} onClick={onBack}>← BACK</button>
      </div>
    </div>
  );
}

// ====== STYLES ======
const globalCSS = `
  @import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700&family=Baloo+2:wght@500;700;800&display=swap');
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: 'Baloo 2', sans-serif; -webkit-tap-highlight-color: transparent; }
  button { font-family: inherit; cursor: pointer; user-select: none; border: none; }
  button:active { transform: scale(0.96); }
  @keyframes wiggle { 0%, 100% { transform: rotate(-3deg); } 50% { transform: rotate(3deg); } }
  @keyframes bob { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-5px); } }
  @keyframes shake { 0%, 100% { transform: translateX(0); } 25% { transform: translateX(-3px); } 75% { transform: translateX(3px); } }
  @keyframes floatUp { 0% { opacity: 1; transform: translateY(0) scale(1); } 100% { opacity: 0; transform: translateY(-80px) scale(1.4); } }
  @keyframes popIn { 0% { transform: scale(0) rotate(-180deg); opacity: 0; } 100% { transform: scale(1) rotate(0); opacity: 1; } }
  @keyframes flash { 0%, 100% { opacity: 1; } 50% { opacity: 0.6; } }
`;

const styles = {
  app: { minHeight: "100vh", background: "linear-gradient(180deg, #fef3c7 0%, #fbbf24 50%, #f59e0b 100%)", position: "relative", overflow: "hidden" },
  centerScreen: { minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: 16 },
  titleLogo: { fontFamily: "'Fredoka', sans-serif", fontSize: "clamp(40px, 11vw, 72px)", fontWeight: 700, color: "#7c2d12", textShadow: "4px 4px 0 #fef3c7, 5px 5px 0 #1a0f08", letterSpacing: "-0.02em", lineHeight: 1 },
  titleTagline: { fontFamily: "'Fredoka', sans-serif", fontSize: "clamp(18px, 4vw, 24px)", color: "#dc2626", marginTop: 6, fontWeight: 600 },
  titleDesc: { fontSize: 14, color: "#3d2515", margin: "16px auto", maxWidth: 300, lineHeight: 1.5 },
  playBtn: { background: "#dc2626", color: "white", padding: "16px 32px", fontSize: 18, fontWeight: 800, borderRadius: 50, fontFamily: "'Fredoka', sans-serif", boxShadow: "0 6px 0 #7f1d1d, 0 10px 20px rgba(0,0,0,0.2)", letterSpacing: 1 },
  ghostBtn: { background: "rgba(255,255,255,0.8)", color: "#7c2d12", padding: "9px 18px", fontSize: 13, fontWeight: 600, borderRadius: 30, fontFamily: "'Fredoka', sans-serif" },
  howCard: { background: "white", borderRadius: 20, padding: 22, maxWidth: 420, width: "100%", boxShadow: "0 12px 30px rgba(0,0,0,0.15)", border: "4px solid #fbbf24" },
  howLabel: { fontFamily: "'Fredoka', sans-serif", fontSize: 11, letterSpacing: 3, color: "#dc2626", textAlign: "center", fontWeight: 600 },
  howTitle: { fontFamily: "'Fredoka', sans-serif", fontSize: 30, color: "#1a0f08", textAlign: "center", marginBottom: 18, fontWeight: 700 },
  howStep: { display: "flex", gap: 12, marginBottom: 14, alignItems: "flex-start" },
  howNum: { background: "#dc2626", color: "white", width: 32, height: 32, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: 16, flexShrink: 0, boxShadow: "0 3px 0 #7f1d1d" },
  howStepTitle: { fontWeight: 700, fontSize: 15, marginBottom: 2, color: "#1a0f08" },
  howStepDesc: { fontSize: 12, color: "#4b5563", lineHeight: 1.4 },
  howBonus: { background: "#fef3c7", padding: 11, borderRadius: 12, margin: "16px 0", fontSize: 12, border: "2px dashed #f59e0b", color: "#78350f", textAlign: "center", fontWeight: 600 },
  sectionHeading: { fontFamily: "'Fredoka', sans-serif", fontSize: 32, color: "#7c2d12", fontWeight: 700, margin: "4px 0" },
  charGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))", gap: 14 },
  charCard: { border: "4px solid", borderRadius: 18, padding: 16, transition: "transform 0.2s", boxShadow: "0 6px 0 rgba(0,0,0,0.15)", position: "relative" },
  lockOverlay: { position: "absolute", inset: 0, background: "rgba(255,255,255,0.88)", borderRadius: 14, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", fontSize: 36, zIndex: 2 },
  charName: { fontFamily: "'Fredoka', sans-serif", fontSize: 26, fontWeight: 700, textAlign: "center", marginTop: 4 },
  powerBadgeWrap: { display: "flex", justifyContent: "center", margin: "4px 0" },
  powerBadge: { background: "#1a0f08", color: "#fef3c7", padding: "4px 10px", borderRadius: 20, fontSize: 10, letterSpacing: 2, fontWeight: 700 },
  abilityText: { fontSize: 12, color: "#1a0f08", textAlign: "center", margin: "6px 0", fontWeight: 600 },
  quipBubble: { background: "white", padding: "8px 11px", borderRadius: 14, fontSize: 12, fontStyle: "italic", textAlign: "center", color: "#3d2515", fontWeight: 600, border: "2px solid rgba(0,0,0,0.1)" },
  pickBtn: { width: "100%", marginTop: 10, padding: "11px", color: "white", fontSize: 12, fontWeight: 800, borderRadius: 12, fontFamily: "'Fredoka', sans-serif", letterSpacing: 1, boxShadow: "0 4px 0 rgba(0,0,0,0.2)" },
  levelCard: { display: "flex", alignItems: "center", gap: 12, padding: 16, borderRadius: 16, border: "3px solid #1a0f08", boxShadow: "0 5px 0 rgba(0,0,0,0.2)", color: "#1a0f08", fontFamily: "'Fredoka', sans-serif" },
  levelName: { fontSize: 17, fontWeight: 700 },
  levelSub: { fontSize: 11, opacity: 0.8, fontStyle: "italic", marginTop: 2 },
  levelMeta: { fontSize: 10, marginTop: 3, fontWeight: 600 },

  playArea: { minHeight: "100vh", padding: 10, position: "relative", display: "flex", flexDirection: "column", overflow: "hidden" },
  hud: { display: "flex", gap: 6, marginBottom: 10 },
  hudBox: { flex: 1, background: "rgba(255,255,255,0.92)", padding: "7px 8px", borderRadius: 12, textAlign: "center", border: "3px solid #1a0f08", boxShadow: "0 3px 0 rgba(0,0,0,0.2)" },
  hudLabel: { fontSize: 9, letterSpacing: 2, color: "#7c2d12", fontWeight: 700 },
  hudValue: { fontSize: 20, fontWeight: 800, color: "#1a0f08", fontFamily: "'Fredoka', sans-serif" },
  targetText: { fontSize: 10, color: "#6b7280", fontWeight: 600 },
  chefCorner: { position: "fixed", bottom: 170, left: 8, zIndex: 10, textAlign: "center" },
  speechBubble: { position: "absolute", bottom: "100%", left: "50%", transform: "translateX(-50%)", background: "white", border: "3px solid", borderRadius: 14, padding: "6px 10px", fontSize: 12, fontWeight: 700, minWidth: 130, textAlign: "center", whiteSpace: "nowrap", boxShadow: "0 4px 10px rgba(0,0,0,0.15)", animation: "popIn 0.3s ease", marginBottom: 6 },
  comboCounter: { fontFamily: "'Fredoka', sans-serif", fontSize: 13, fontWeight: 800, marginTop: 3, textShadow: "2px 2px 0 white" },
  comboFlash: { position: "fixed", top: "40%", left: "50%", transform: "translate(-50%, -50%)", fontSize: 42, fontWeight: 900, fontFamily: "'Fredoka', sans-serif", textShadow: "3px 3px 0 #1a0f08", zIndex: 100, animation: "popIn 0.4s ease", pointerEvents: "none", whiteSpace: "nowrap" },
  customerArea: { flex: 1, display: "flex", gap: 8, flexWrap: "wrap", justifyContent: "center", alignItems: "flex-start", padding: "16px 8px", minHeight: 200 },
  customer: { position: "relative", width: 92, minHeight: 120, background: "rgba(255,255,255,0.95)", border: "3px solid #1a0f08", borderRadius: 14, padding: "26px 6px 6px", boxShadow: "0 4px 0 rgba(0,0,0,0.2)", cursor: "pointer" },
  timerBar: { position: "absolute", top: 6, left: 6, right: 6, height: 5, borderRadius: 3, transition: "width 1s linear" },
  customerFace: { fontSize: 38, textAlign: "center" },
  orderBubble: { background: "#fef8ed", border: "2px solid", borderRadius: 10, padding: "3px 4px", marginTop: 3, textAlign: "center" },
  powerupBtn: { position: "fixed", top: 130, right: 12, padding: 10, borderRadius: 16, color: "white", fontFamily: "'Fredoka', sans-serif", boxShadow: "0 5px 15px rgba(0,0,0,0.3)", animation: "bob 1s infinite", zIndex: 20, minWidth: 80, textAlign: "center", border: "3px solid white" },
  floatText: { position: "fixed", bottom: 190, fontSize: 28, fontWeight: 900, fontFamily: "'Fredoka', sans-serif", animation: "floatUp 1.4s ease-out forwards", textShadow: "2px 2px 0 white", zIndex: 50, pointerEvents: "none" },
  menuBar: { position: "sticky", bottom: 0, background: "rgba(255,255,255,0.96)", borderRadius: "20px 20px 0 0", padding: 8, marginTop: "auto", border: "3px solid #1a0f08", borderBottom: "none" },
  menuLabel: { textAlign: "center", fontSize: 10, letterSpacing: 2, fontWeight: 700, marginBottom: 6 },
  menuGrid: { display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 5 },
  menuItem: { padding: "8px 3px", borderRadius: 10, border: "2px solid #1a0f08", textAlign: "center", transition: "all 0.15s", fontFamily: "'Fredoka', sans-serif" },
  frozenOverlay: { position: "fixed", inset: 0, background: "rgba(96, 165, 250, 0.25)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 42, fontWeight: 900, color: "white", textShadow: "3px 3px 0 #1e40af", zIndex: 200, fontFamily: "'Fredoka', sans-serif", animation: "flash 0.6s infinite", pointerEvents: "none" },
  partyOverlay: { position: "fixed", top: 56, left: "50%", transform: "translateX(-50%)", background: "#ec4899", color: "white", padding: "7px 16px", borderRadius: 24, fontSize: 13, fontWeight: 800, zIndex: 150, fontFamily: "'Fredoka', sans-serif", animation: "bob 0.6s infinite", border: "3px solid white" },

  endCard: { background: "white", borderRadius: 22, padding: 22, maxWidth: 400, width: "100%", textAlign: "center", border: "4px solid", boxShadow: "0 12px 30px rgba(0,0,0,0.2)" },
  endStats: { display: "flex", gap: 8, justifyContent: "center", margin: "16px 0" },
  endStat: { background: "#fef3c7", padding: 9, borderRadius: 12, flex: 1, border: "2px solid #f59e0b" },
  endStatLabel: { fontSize: 9, letterSpacing: 2, color: "#78350f", fontWeight: 700 },
  endStatValue: { fontSize: 18, fontWeight: 800, fontFamily: "'Fredoka', sans-serif", color: "#1a0f08" },
  unlockBadge: { background: "linear-gradient(90deg, #fbbf24, #f59e0b)", color: "#7c2d12", padding: "9px 14px", borderRadius: 24, fontSize: 14, fontWeight: 800, margin: "12px 0", fontFamily: "'Fredoka', sans-serif", border: "3px solid #7c2d12", animation: "bob 1s infinite" },

  stickerGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))", gap: 10 },
  sticker: { padding: 14, borderRadius: 14, textAlign: "center", border: "3px solid #f59e0b", boxShadow: "0 4px 0 rgba(0,0,0,0.15)", transition: "all 0.2s" },
  stickerName: { fontSize: 11, fontWeight: 700, color: "#1a0f08", marginTop: 4, fontFamily: "'Fredoka', sans-serif" }
};
