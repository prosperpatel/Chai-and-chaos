<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Chai & Chaos</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

  <!-- React -->
  <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
  <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>

  <!-- Babel -->
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
</head>

<body>
  <div id="root"></div>

  <script type="text/babel">

// Replace import
const { useState, useEffect, useRef } = React;
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
        <div style={{ display: "flex", justifyContent: "center", gap: 6, margin: "20px 0", flexWrap: "wrap"
