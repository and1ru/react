
import {
  LineChart,
  Line,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
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

export function Lineas() {
  return (
    <div className="h-80 w-full rounded-2xl border bg-white p-5">
      <ResponsiveContainer 
        width="100%" 
        height="90%"
        >

        <LineChart data={sales}>

          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis width={70} tickFormatter={(value) => `$ ${Number(value).toLocaleString("es")}`} />

          <Tooltip formatter={(value) =>
            `$${Number(value).toLocaleString("es-CO")}`
          } />

            {/* este componente dice que el grafico sera tipo linea, type dice la forma en la que se uniran las lineas (monotone, linear, step), datakey dice que valor tomara para dibujar la linea, stroke es el color, strokeWidth es el grosor de la linea, dot representa el punto en la linea y r es el radio o se puede oculatar diciendo que es false, activeDot dice como se vera el punto cuando un usuario pase el mause */}
          <Line
            type="monotone"
            dataKey="total"
            stroke="#2563eb"
            strokeWidth={3}
            dot={{ r: 5 }}
            activeDot={{ r: 7 }}
          />

        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}