import { useEffect, useState } from "react";

interface LeaderboardEntry {
  playerId?: string;
  name?: string;
  value?: number;
  [key: string]: any;
}

const statOptions = [
  { value: "dailyHunts", label: "Daily Hunts" },
  { value: "dailyCrafts", label: "Daily Crafts" },
  { value: "dailyBossFights", label: "Daily Boss Fights" },
  { value: "level", label: "Seasonal Level" },
];

const periodOptions = [
  { value: "current", label: "Current" },
  { value: "previous", label: "Previous" },
];

export default function Leaderboard() {
  const [entries, setEntries] = useState<LeaderboardEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [statName, setStatName] = useState(statOptions[0].value);
  const [period, setPeriod] = useState(periodOptions[0].value);

  useEffect(() => {
    async function fetchLeaderboard() {
      setLoading(true);
      try {
        const url = `https://api.blockchainrpg.io/leaderboard/${encodeURIComponent(statName)}?period=${encodeURIComponent(period)}`;

        const response = await fetch(url);
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const data = await response.json();
        setEntries(data.entries || []);
      } catch (err) {
        console.error("Failed to fetch leaderboard:", err);
        setEntries([]);
      } finally {
        setLoading(false);
      }
    }
    fetchLeaderboard();
  }, [statName, period]);

  return (
    <div className="container margin-vert--lg">
      <h1>Leaderboard</h1>

      <div
        style={{
          marginBottom: "1rem",
          display: "flex",
          gap: "1rem",
          flexWrap: "wrap",
        }}
      >
        <label>
          Stat:&nbsp;
          <select
            value={statName}
            onChange={(e) => setStatName(e.target.value)}
          >
            {statOptions.map(({ value, label }) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </label>

        <label>
          Period:&nbsp;
          <select value={period} onChange={(e) => setPeriod(e.target.value)}>
            {periodOptions.map(({ value, label }) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </label>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : entries.length === 0 ? (
        <p>No leaderboard data available.</p>
      ) : (
        <table
          className="leaderboard-table"
          style={{ width: "100%", borderCollapse: "collapse" }}
        >
          <thead>
            <tr>
              <th style={{ textAlign: "left", borderBottom: "1px solid #ccc" }}>
                Rank
              </th>
              <th style={{ textAlign: "left", borderBottom: "1px solid #ccc" }}>
                Player
              </th>
              <th style={{ textAlign: "left", borderBottom: "1px solid #ccc" }}>
                {statOptions.find((s) => s.value === statName)?.label ||
                  statName}
              </th>
            </tr>
          </thead>
          <tbody>
            {entries.map((entry, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{entry.displayName || "Unknown"}</td>
                <td>{entry.value ?? 0}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
