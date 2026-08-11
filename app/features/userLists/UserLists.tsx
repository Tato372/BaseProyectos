"use client";

import { useUserLists } from "./hooks/useUserLists";
import { Button } from "@/app/components";
import { INPUT_TYPES } from "@/app/constants";

const UserLists = () => {
  const {
    name,
    users,
    canAddUser,
    handleNameChange,
    handleAddUser,
    handleRemoveUser,
  } = useUserLists();

  const userCountLabel = users.length === 1 ? "usuario" : "usuarios";

  return (
    <section className="w-full max-w-3xl overflow-hidden rounded-[2rem] border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-slate-100 p-6 shadow-[0_35px_80px_-40px_rgba(15,23,42,0.45)]">
      <div className="mb-8 flex flex-col gap-6 rounded-[1.75rem] bg-white/90 p-6 shadow-sm sm:flex-row sm:items-end sm:justify-between">
        <div className="space-y-3">
          <p className="inline-flex rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">
            Gestión de usuarios
          </p>
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-950">
              Lista de usuarios
            </h2>
            <p className="max-w-xl text-sm leading-6 text-slate-600">
              Agrega nuevos nombres y administra tu lista con un diseño más limpio y moderno.
            </p>
          </div>
        </div>

        <div className="rounded-[1.75rem] bg-slate-950 px-5 py-4 text-center text-white shadow-sm ring-1 ring-slate-900/10">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Total</p>
          <p className="mt-2 text-3xl font-semibold">{users.length}</p>
          <p className="text-sm text-slate-300">{userCountLabel}</p>
        </div>
      </div>

      <div className="mb-6 rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-sm">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <label className="sr-only" htmlFor="user-name-input">
            Nombre de usuario
          </label>
          <input
            id="user-name-input"
            type={INPUT_TYPES.TEXT}
            value={name}
            onChange={handleNameChange}
            placeholder="Escribe un nombre de usuario"
            className="min-w-0 flex-1 rounded-[1.5rem] border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-950 shadow-sm outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
          />
          <Button
            type="button"
            disabled={!canAddUser}
            onClick={handleAddUser}
            className="inline-flex h-12 items-center justify-center rounded-[1.5rem] bg-gradient-to-r from-sky-500 to-indigo-500 px-6 text-sm font-semibold text-white shadow-lg shadow-sky-500/20 transition duration-200 hover:from-sky-600 hover:to-indigo-600 disabled:cursor-not-allowed disabled:from-slate-300 disabled:to-slate-300 disabled:text-slate-600"
          >
            Agregar
          </Button>
        </div>
      </div>

      <div className="space-y-4">
        {users.length === 0 ? (
          <div className="rounded-[1.75rem] border border-dashed border-slate-300 bg-slate-50 px-6 py-10 text-center text-slate-600 shadow-sm">
            <p className="text-base font-semibold text-slate-900">
              La lista está vacía
            </p>
            <p className="mt-2 text-sm text-slate-500">
              Añade usuarios para verlos aquí.
            </p>
          </div>
        ) : (
          <ul className="space-y-3">
            {users.map((user) => (
              <li
                key={user.id}
                className="group flex items-center justify-between gap-4 rounded-[1.75rem] border border-slate-200 bg-white px-5 py-4 shadow-sm transition hover:border-sky-200 hover:bg-sky-50/70"
              >
                <div className="space-y-1">
                  <p className="text-base font-semibold text-slate-950">
                    {user.name}
                  </p>
                  <p className="text-sm text-slate-500">Usuario agregado</p>
                </div>
                <Button
                  type="button"
                  onClick={() => handleRemoveUser(user.id)}
                  className="rounded-[1.5rem] bg-red-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-700"
                >
                  Eliminar
                </Button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};

export default UserLists;
