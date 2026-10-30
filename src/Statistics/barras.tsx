import {
    BarChart,
    Bar,
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

export const Barras = () => {
    return (
        <section className="h-90 w-full rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            {/* ResponsiveContainer es el que se encarga de adaptar el grafico al espacio del contenedor, una de sus propiedades son width height */}
            <ResponsiveContainer width="100%" height="100%">
                {/* brachart es el que dice que tipo de grafico sera, la propiedad mas importante es data y se le pasa los datos que se quiere graficar */}
                <BarChart data={sales}>
                    {/* este componente es el encargado de mostrar las lineas detras del grafico, sus propiedades son stroke que es el color de la linea, strokeWidth el grosor de la linea, strokeDasharray dice si seran continuas o discontinuas, horizontal muestra o ocuta las lineas horizontales, vertical muestra o oculta las lineas verticales, fill color de la cuadricula */}
                    <CartesianGrid
                        stroke="#48e"
                        strokeDasharray="5 5"
                        horizontal={true}
                        vertical={true}
                    />

                    {/* representa el eje horizontal, en este caso muestra los dias de la semana depende de la informacion que se pase como data, tiene que ser una de las propiedades que se le pase */}
                    <XAxis dataKey="day" />

                    {/* representa el eje vertical, en este caso muestra los precios en valor monetario, tickFormatter permite modificar la forma en la que se ve los valores sin el se veria algo como 100000 pero con el es 100.000, domain dice donde va a empezar y donde termina pero si el valor que dice donde termina es menor a uno de los valores entonces se modifica hasta que pueda mostrar el valor maximo, tickCount dice en cuantas lineas se dividira entre donde comienza y donde termina */}
                    <YAxis
                        tickFormatter={(value) =>
                            `$${Number(value).toLocaleString("es-CO")}`
                        }
                        width={100}
                        domain={[0, 300000]}
                        tickCount={10}
                    />

                    {/* este componente muestra informacion cuando el usuario pone el cursor por encima de una de las graficas */}
                    <Tooltip
                        formatter={(value) => [
                            `$${Number(value).toLocaleString("es-CO")}`,
                            "Ventas",
                        ]}
                        labelFormatter={(label) => `Día: ${label}`}
                    />
                    
                    {/* este componente es el que dibuja la barra, datakey dice que tiene que buscar la propiedad total y determinar la altura de la barra, fill dice el color, radius dice los bordes */}
                    <Bar
                        dataKey="total"
                        fill="#c4a"
                        radius={[30, 30, 50, 10]}
                    />
                </BarChart>
            </ResponsiveContainer>
        </section>
    );
};