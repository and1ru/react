
import {
  BarChart,
  Bar,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  Legend,
} from "recharts";

export const weeklySales = [
  { day: "Lun", branchA: 150000, branchB: 180000 },
  { day: "Mar", branchA: 220000, branchB: 190000 },
  { day: "Mié", branchA: 180000, branchB: 240000 },
  { day: "Jue", branchA: 310000, branchB: 280000 },
  { day: "Vie", branchA: 275000, branchB: 320000 },
  { day: "Sáb", branchA: 420000, branchB: 390000 },
  { day: "Dom", branchA: 190000, branchB: 230000 },
];

const currency = (value: number) =>
  new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  }).format(value);

export function DosBarras() {
  return (
    <div className="w-full rounded-2xl border border-gray-200 bg-white p-5">
      <h2 className="text-lg font-semibold text-gray-900">
        Comparación de ventas
      </h2>

      <p className="mb-6 text-sm text-gray-500">
        Ventas diarias por sucursal
      </p>

      <div className="h-80 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={weeklySales}>
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
            />

            <XAxis dataKey="day" />

            <YAxis
              width={85}
              tickFormatter={(value) =>
                `$${Number(value) / 1000}k`
              }
            />

            <Tooltip
              formatter={(value) => currency(Number(value))}
            />

            <Legend />

            <Bar
              dataKey="branchA"
              name="Branch A"
              fill="#2563eb"
              radius={[4, 4, 0, 0]}
            />

            <Bar
              dataKey="branchB"
              name="Branch B"
              fill="#10b981"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}