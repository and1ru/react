import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { FilterDate } from "../../components/FilterDate/FilterDate";
import { Barras } from "./barras";
import { Lineas } from "./lineas";
import { AreaComponente } from "./area";
import { Pastel } from "./pastel";
import { Dona } from "./dona";
import { DosBarras } from "./dosbarras";
import { DosLineas } from "./doslineas";

type Entity = "product" | "cashier" | "branch" | "";


export const Statistics = () => {
  const [entity, setEntity] = useState<Entity>("");
  const [name, setName] = useState("")
  const [_searchParams, setSearchParams] = useSearchParams()

  const handleEntidad = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setEntity(e.target.value as Entity);
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setName(value)
  }

  useEffect(() => {
    setSearchParams({ entity, name })
  }, [entity, name])

  return (
    <main className="max-w-7xl mx-auto p-6">

      <h1 className="text-3xl font-bold text-gray-800 mb-8">
        Estadísticas
      </h1>

      {/* Filtros */}
      <section className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm mb-8">

        <h2 className="text-lg font-semibold text-gray-700 mb-6">
          Filtros
        </h2>

        <form className="grid grid-cols-1 md:grid-cols-3 gap-4">

          <input
            onChange={handleInput}
            value={name}
            type="text"
            placeholder="Buscar..."
            className="border border-gray-300 rounded-lg px-4 py-2.5 outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500"
          />

          <select
            value={entity}
            onChange={handleEntidad}
            className="border border-gray-300 rounded-lg px-4 py-2.5 outline-none focus:ring-2 focus:ring-blue-200"
          >
            <option value="">Seleccionar entidad</option>
            <option value="product">Productos</option>
            <option value="cashier">Cajeros</option>
            <option value="branch">Sucursales</option>
          </select>
          <FilterDate />
        </form>
      </section>
      
      <Barras></Barras>
      <Lineas />
      <AreaComponente />
      <Pastel />
      <Dona />
      <DosBarras />
      <DosLineas />
    </main>
  );
};