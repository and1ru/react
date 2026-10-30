
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";

const sales = [
  { day: "Lun", total: 150000 },
  { day: "Mar", total: 220000 },
  { day: "Mié", total: 180000 },
  { day: "Jue", total: 310000 },
  { day: "Vie", total: 275000 },
  { day: "Sáb", total: 420000 },
  { day: "Dom", total: 190000 },
];

const COLORS = [
  "#2563eb",
  "#06b6d4",
  "#10b981",
  "#f59e0b",
  "#8b5cf6",
  "#ec4899",
  "#64748b",
];

export function Pastel() {
  return (
    <div className="h-80 w-full rounded-2xl border bg-white p-5">
      <ResponsiveContainer width="100%" height="90%">
        <PieChart>
          <Pie
            data={sales}
            dataKey="total"
            nameKey="day"
            cx="50%"
            cy="45%"
            outerRadius={90}
            paddingAngle={2}
          >
            {sales.map((entry, index) => (
              <Cell
                key={entry.day}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>

          <Tooltip formatter={(value) =>
            `$${Number(value).toLocaleString("es-CO")}`
          } />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}