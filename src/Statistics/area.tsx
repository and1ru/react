import {
  AreaChart,
  Area,
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

export function AreaComponente() {
  return (
    <div className="h-80 w-full rounded-2xl border bg-white p-5">
      <ResponsiveContainer width="100%" height="90%">
        {/* dice que sera un grafico de area y se le pasa que datos va a utilizar */}
        <AreaChart data={sales}>

            {/* este bloque de codigo es para darle estilos a la grafica */}
          <defs>
            {/* este es un componente que provoca un grandiante, se le pasa un id para poder ser utilizado en otro lugar, las posiciones son x1, y1, x2, y2 */}
            <linearGradient id="salesFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#2563eb" stopOpacity={0.9} />
              <stop offset="95%" stopColor="#2563eb" stopOpacity={0.02} />
            </linearGradient>
          </defs>

          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis width={70} />

          <Tooltip formatter={(value) =>
            `$${Number(value).toLocaleString("es-CO")}`
          } />

            {/* este componente es el que dibuja el grafico, type es el tipo de linea (monotone, linear, step, stepBefore, stepAfter), datakey dice que dato utilizara para hacer el grafico, stroke es el color de la linea, strokeWidth es el grosor de la linea, fill es el color dentro de la grafica*/}
          <Area
            type="monotone"
            dataKey="total"
            stroke="#2563eb"
            strokeWidth={2}
            fill="url(#salesFill)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}