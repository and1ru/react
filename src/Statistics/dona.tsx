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

export function Dona() {
  return (
    <div className="h-80 w-full rounded-2xl border bg-white p-5">
      <ResponsiveContainer width="100%" height="90%">
        {/* es el contenedor principal del grafico, dice que tipo de grafico sera */}
        <PieChart>
        {/* este componente se encarga de dibujar las porciones del grafico, data dice que datos tomara para hacer el grafico, datekey dice que dato tomara para hacer cada porcion, namekey dice que nombre tendra cada porcion, cx dice donde estara el componente en el eje x, cy dice donde estara el componente en el eje y, innerRadius dice el radio que habra desde el centro hacia afuera esto sera la diferencia entre un grafico dona y uno pie, outerRadius dice el tamaño del grafico, paddingAngle dice el espacio que habra entre porciones */}
          <Pie
            data={sales}
            dataKey="total"
            nameKey="day"
            cx="50%"
            cy="45%"
            innerRadius={30}
            outerRadius={70}
            paddingAngle={10}
          >
            {sales.map((entry, index) => (
                // este componente permite personalizar cada seccion del pie
              <Cell
                key={entry.day}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>

            {/* este componente muestra informacion cuando el usuario hace un hover */}
          <Tooltip formatter={(value) =>
            `$${Number(value).toLocaleString("es-CO")}`
          } />

            {/* este componente muestra una leyenda que permite identificar las porciones del pie, son las que estan abajo del grafico en forma de cuadros */}
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}