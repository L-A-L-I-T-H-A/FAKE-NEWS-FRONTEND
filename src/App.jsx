import React, { useState } from "react";
import {
  Mic,
  Search,
  ShieldCheck,
  ShieldAlert,
  Moon,
  Sun,
  BrainCircuit,
  Globe,
  FolderKanban,
} from "lucide-react";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

import { motion } from "framer-motion";

function FuturisticFakeNewsUI() {

  const [darkMode, setDarkMode] = useState(true);

  const [text, setText] = useState("");

  const [loading, setLoading] = useState(false);

  const [language, setLanguage] = useState("English");

  const [result, setResult] = useState({
    reasons: []
  });

  const detectNews = async () => {

  if (!text) return;

  setLoading(true);

  try {

    const response = await fetch(
      "https://fake-news-backend-q5hq.onrender.com/predict",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          text: text,
        }),
      }
    );

    const data = await response.json();

    setResult(data);

  } catch (error) {

    console.log(error);

  } finally {

    setLoading(false);

  }
};

  // PIE CHART

  const pieData = [
    { name: "Real", value: 72 },
    { name: "Fake", value: 28 },
  ];

  // CATEGORY CHART

  const categoryData = [
    { category: "Politics", count: 28 },
    { category: "Technology", count: 35 },
    { category: "Health", count: 18 },
    { category: "Sports", count: 15 },
    { category: "Entertainment", count: 12 },
  ];

  return (

    <div
      className={`min-h-screen overflow-hidden transition-all duration-500 ${
        darkMode
          ? "bg-[#020617] text-white"
          : "bg-slate-100 text-slate-900"
      }`}
    >

      {/* BACKGROUND BLOBS */}

      <div className="fixed inset-0 -z-10 overflow-hidden">

        <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>

        <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>

      </div>

      {/* NAVBAR */}

      <div className="flex justify-between items-center px-6 py-5">

        <div className="flex items-center gap-3">

          <BrainCircuit
            className="text-cyan-400"
            size={34}
          />

          <h1
            className="text-3xl font-black tracking-wide"
            style={{
              fontFamily: "'Orbitron', sans-serif",
            }}
          >
            AI News Detector
          </h1>
        </div>

        <div className="flex items-center gap-4">

          {/* LANGUAGE */}

          <div className="flex items-center gap-2 px-5 py-3 rounded-full border border-white/20 bg-white/5 backdrop-blur-xl">

            <Globe size={18} />

            <select
              value={language}
              onChange={(e) =>
                setLanguage(e.target.value)
              }
              className="bg-transparent outline-none"
            >
              <option className="text-black">
                English
              </option>

              <option className="text-black">
                Telugu
              </option>

              <option className="text-black">
                Hindi
              </option>
            </select>
          </div>

          {/* DARK MODE */}

          <button
            onClick={() =>
              setDarkMode(!darkMode)
            }
            className="p-3 rounded-full bg-white/10 border border-white/20 backdrop-blur-xl"
          >
            {darkMode ? <Sun /> : <Moon />}
          </button>
        </div>
      </div>

      {/* HERO SECTION */}

      <section className="max-w-7xl mx-auto px-5">

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative overflow-hidden rounded-[35px] border border-cyan-400/30 bg-white/5 backdrop-blur-2xl p-10 shadow-[0_0_40px_rgba(0,255,255,0.15)]"
        >

          {/* SCANNING LIGHT */}

          <motion.div
            animate={{
              x: ["-20%", "120%"],
            }}
            transition={{
              repeat: Infinity,
              duration: 5,
            }}
            className="absolute top-0 left-0 w-40 h-full bg-cyan-400/10 blur-3xl"
          ></motion.div>

          <div className="grid lg:grid-cols-2 gap-10 items-center">

            {/* LEFT */}

            <div>

              <h1
                className="text-5xl md:text-7xl font-black leading-tight bg-gradient-to-r from-cyan-400 via-blue-500 to-pink-500 text-transparent bg-clip-text"
                style={{
                  fontFamily:
                    "'Orbitron', sans-serif",
                }}
              >
                AI POWERED
                <br />
                FAKE NEWS
                <br />
                DETECTION
              </h1>

              <p className="mt-8 text-lg text-slate-300 leading-8 max-w-xl">
                Detect misinformation using Advanced
                AI, NLP, Machine Learning and
                Naive Bayes algorithms with
                futuristic data visualization.
              </p>

              {/* FEATURE CARDS */}

              <div className="grid grid-cols-3 gap-4 mt-10">

                <div className="p-5 rounded-2xl bg-black/20 border border-cyan-400/20">
                  <h3 className="font-bold text-cyan-300">
                    AI
                  </h3>

                  <p className="text-sm text-slate-300 mt-2">
                    Analysis
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-black/20 border border-cyan-400/20">
                  <h3 className="font-bold text-cyan-300">
                    NLP
                  </h3>

                  <p className="text-sm text-slate-300 mt-2">
                    Processing
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-black/20 border border-cyan-400/20">
                  <h3 className="font-bold text-cyan-300">
                    Trusted
                  </h3>

                  <p className="text-sm text-slate-300 mt-2">
                    Results
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT AI VISUAL */}

            <div className="relative flex justify-center">

              <div className="w-[330px] h-[330px] rounded-full border border-cyan-400/30 flex items-center justify-center relative">

                <div className="absolute w-full h-full rounded-full border border-cyan-400/20 animate-ping"></div>

                <div className="absolute w-[250px] h-[250px] rounded-full border border-cyan-400/30"></div>

                <div className="text-center">

                  <h2
                    className="text-3xl font-black text-cyan-400"
                    style={{
                      fontFamily:
                        "'Orbitron', sans-serif",
                    }}
                  >
                    SCANNING...
                  </h2>

                  <div className="mt-6 w-52 h-2 bg-white/10 rounded-full overflow-hidden">

                    <motion.div
                      animate={{
                        x: ["-100%", "100%"],
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 1.5,
                      }}
                      className="w-20 h-full bg-cyan-400"
                    ></motion.div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* INPUT SECTION */}

      <section className="max-w-7xl mx-auto px-5 mt-8">

        <div className="rounded-[35px] border border-cyan-400/20 bg-white/5 backdrop-blur-2xl p-8">

          <h2
            className="text-3xl font-bold text-cyan-300"
            style={{
              fontFamily:
                "'Orbitron', sans-serif",
            }}
          >
            ENTER NEWS CONTENT
          </h2>

          {/* TEXTAREA */}

          <div className="mt-8 grid lg:grid-cols-[1fr_180px] gap-6">

            <textarea
              value={text}
              onChange={(e) =>
                setText(e.target.value)
              }
              placeholder="Type or paste your news article here..."
              className="w-full h-[220px] rounded-3xl bg-[#101935] border border-cyan-400/20 p-6 outline-none resize-none text-lg"
            ></textarea>

            {/* VOICE BUTTON */}

            <div className="flex flex-col items-center justify-center gap-4">

              <button className="w-32 h-32 rounded-full border-4 border-cyan-400 bg-cyan-400/10 shadow-[0_0_30px_#06b6d4] flex items-center justify-center hover:scale-105 transition-all">

                <Mic size={45} />
              </button>

              <p className="text-lg text-slate-300">
                Voice Input
              </p>
            </div>
          </div>

          {/* BUTTONS */}

          <div className="grid md:grid-cols-[1fr_220px] gap-5 mt-8">

            <button
              onClick={detectNews}
              className="h-20 rounded-2xl bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 text-3xl font-black shadow-[0_0_40px_rgba(255,0,255,0.4)] hover:scale-[1.01] transition-all"
              style={{
                fontFamily:
                  "'Orbitron', sans-serif",
              }}
            >
              DETECT NEWS
            </button>

            <select
              className="rounded-2xl bg-black/20 border border-white/20 px-5 text-lg"
            >
              <option>English</option>
              <option>Telugu</option>
              <option>Hindi</option>
            </select>
          </div>

          {/* LOADING */}

          {loading && (

            <div className="mt-8">

              <div className="w-full h-5 rounded-full bg-white/10 overflow-hidden">

                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 2 }}
                  className="h-full bg-gradient-to-r from-cyan-400 to-blue-500"
                ></motion.div>
              </div>

              <p className="mt-4 text-cyan-300">
                AI analyzing article...
              </p>
            </div>
          )}
        </div>
      </section>

      {/* RESULT SECTION */}

      {result && (

        <section className="max-w-7xl mx-auto px-5 mt-8">

          <div className="rounded-[35px] border border-green-400/20 bg-black/30 backdrop-blur-2xl p-8">

            <h2
              className="text-3xl font-black text-cyan-300 mb-8"
              style={{
                fontFamily:
                  "'Orbitron', sans-serif",
              }}
            >
              PREDICTION RESULT
            </h2>

            <div className="grid lg:grid-cols-2 gap-10">

              {/* LEFT */}

              <div>

                <div className="flex items-center gap-5">

                  {result.status ===
                  "REAL NEWS" ? (
                    <ShieldCheck
                      size={70}
                      className="text-green-400"
                    />
                  ) : (
                    <ShieldAlert
                      size={70}
                      className="text-red-400"
                    />
                  )}

                  <div>

                    <h1
                      className={`text-5xl font-black ${
                        result.status ===
                        "REAL NEWS"
                          ? "text-green-400"
                          : "text-red-400"
                      }`}
                      style={{
                        fontFamily:
                          "'Orbitron', sans-serif",
                      }}
                    >
                      {result.status}
                    </h1>

                    <p className="mt-3 text-slate-300">
                      AI prediction completed
                    </p>
                  </div>
                </div>

                {/* CATEGORY */}

                <div className="mt-10 p-6 rounded-3xl bg-[#101935] border border-cyan-400/20">

                  <div className="flex items-center gap-3">

                    <FolderKanban className="text-purple-400" />

                    <h3 className="text-xl font-bold">
                      NEWS CATEGORY
                    </h3>
                  </div>

                  <p className="mt-4 text-3xl text-purple-300">
                    {result.category}
                  </p>
                </div>
              </div>

              {/* RIGHT */}

              <div>

                {/* CONFIDENCE */}

                <div>

                  <div className="flex justify-between mb-4">

                    <h3 className="text-2xl font-bold">
                      CONFIDENCE SCORE
                    </h3>
                    <span
                    className={`text-4xl font-black ${
                      result.status === "REAL NEWS"
                      ? "text-green-400"
                      : "text-red-400"
                      }`}
                      >
                      {result.confidence}%
                    </span>
                  </div>

                  <div className="w-full h-5 rounded-full bg-white/10 overflow-hidden">

                    <motion.div
                    initial={{ width: 0 }}
                    animate={{
                      width: `${result.confidence}%`,
                    }}
                    transition={{ duration: 1.5 }}
                    className={`h-full ${
                      result.status === "REAL NEWS"
                      ? "bg-green-400"
                      : "bg-red-400"
                      }`}
                      ></motion.div>
                  </div>
                </div>

                {/* PROBABILITY */}

                <div className="mt-10 p-6 rounded-3xl bg-[#101935] border border-cyan-400/20">

                  <h3 className="text-2xl font-bold mb-6">
                    PROBABILITY METER
                  </h3>

                  {/* REAL */}

                  <div className="mb-6">

                    <div className="flex justify-between mb-2">
                      <span>Real News</span>

                      <span>
                        {result.realPercent}%
                      </span>
                    </div>

                    <div className="w-full h-4 bg-white/10 rounded-full overflow-hidden">

                      <div
                        style={{
                          width:
                            result.realPercent + "%",
                        }}
                        className="h-full bg-green-400"
                      ></div>
                    </div>
                  </div>

                  {/* FAKE */}

                  <div>

                    <div className="flex justify-between mb-2">
                      <span>Fake News</span>

                      <span>
                        {result.fakePercent}%
                      </span>
                    </div>

                    <div className="w-full h-4 bg-white/10 rounded-full overflow-hidden">

                      <div
                        style={{
                          width:
                            result.fakePercent + "%",
                        }}
                        className="h-full bg-red-400"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* EXPLAINABLE AI */}

            <div className="mt-10 p-8 rounded-3xl bg-gradient-to-r from-green-500/10 to-cyan-500/10 border border-green-400/20">

              <h3
                className="text-3xl font-black text-green-300 mb-6"
                style={{
                  fontFamily:
                    "'Orbitron', sans-serif",
                }}
              >
                EXPLAINABLE AI REASON
              </h3>

              <ul className="space-y-4">
                  {result?.reasons?.map( 
                    (reason, index) => (
                    <li
                    key={index}
                    className="text-lg text-slate-200"
                    >
                      • {reason}
                      </li>
                      )
                       )}

              </ul>
            </div>
          </div>
        </section>
      )}

      {/* ANALYTICS */}

      <section className="max-w-7xl mx-auto px-5 mt-8 pb-16">

        <div className="rounded-[35px] border border-cyan-400/20 bg-white/5 backdrop-blur-2xl p-8">

          <h2
            className="text-4xl font-black text-cyan-300 mb-10"
            style={{
              fontFamily:
                "'Orbitron', sans-serif",
            }}
          >
            ANALYTICS DASHBOARD
          </h2>

          <div className="grid lg:grid-cols-2 gap-8">

            {/* PIE CHART */}

            <div className="rounded-3xl bg-[#081124] border border-cyan-400/20 p-6">

              <h3 className="text-2xl font-bold mb-5">
                FAKE VS REAL DISTRIBUTION
              </h3>

              <ResponsiveContainer
                width="100%"
                height={320}
              >
                <PieChart>

                  <Pie
                    data={pieData}
                    dataKey="value"
                    outerRadius={100}
                    label
                  >

                    <Cell fill="#4ade80" />

                    <Cell fill="#f43f5e" />
                  </Pie>

                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>

            {/* CATEGORY CHART */}

            <div className="rounded-3xl bg-[#081124] border border-cyan-400/20 p-6">

              <h3 className="text-2xl font-bold mb-5">
                NEWS CATEGORY DISTRIBUTION
              </h3>

              <ResponsiveContainer
                width="100%"
                height={320}
              >
                <BarChart data={categoryData}>

                  <CartesianGrid strokeDasharray="3 3" />

                  <XAxis dataKey="category" />

                  <YAxis />

                  <Tooltip />

                  <Bar
                    dataKey="count"
                    fill="#06b6d4"
                    radius={[8, 8, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default FuturisticFakeNewsUI;