import { LineChart, Line, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis, Legend } from "recharts";

export const weeklySales = [
  { day: "Lun", branchA: 150000, branchB: 180000 },
  { day: "Mar", branchA: 220000, branchB: 190000 },
  { day: "Mié", branchA: 180000, branchB: 240000 },
  { day: "Jue", branchA: 310000, branchB: 280000 },
  { day: "Vie", branchA: 275000, branchB: 320000 },
  { day: "Sáb", branchA: 420000, branchB: 390000 },
  { day: "Dom", branchA: 190000, branchB: 230000 },
];

export function DosLineas() {
  return (
    <div className="w-full rounded-2xl border bg-white p-5">
      <h2 className="mb-6 text-lg font-semibold">
        Tendencia de ventas por sucursal
      </h2>

      <div className="h-80 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={weeklySales}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis width={75} />

            <Tooltip
              formatter={(value) =>
                new Intl.NumberFormat("es-CO", {
                  style: "currency",
                  currency: "COP",
                  maximumFractionDigits: 0,
                }).format(Number(value))
              }
            />

            <Legend />

            <Line
              type="monotone"
              dataKey="branchA"
              name="Branch A"
              stroke="#2563eb"
              strokeWidth={3}
              dot={{ r: 4 }}
            />

            <Line
              type="monotone"
              dataKey="branchB"
              name="Branch B"
              stroke="#10b981"
              strokeWidth={3}
              dot={{ r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}