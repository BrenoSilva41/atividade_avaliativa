'use client';
import { useState } from 'react';
import { createMagazine } from '../lib/api';
import { useRouter } from 'next/navigation';

export default function MagazineForm() {
  const [autor, setAutor] = useState('');
  const [titulo, setTitulo] = useState('');
  const [paginas, setPaginas] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await createMagazine({ autor, titulo, paginas: Number(paginas) });
    setAutor('');
    setTitulo('');
    setPaginas('');
    router.refresh();
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow mb-6 space-y-4">
      <div>
        <label className="block mb-1">Autor</label>
        <input
          type="text"
          value={autor}
          onChange={e => setAutor(e.target.value)}
          className="w-full border rounded px-3 py-2"
          required
        />
      </div>
      <div>
        <label className="block mb-1">Título</label>
        <input
          type="text"
          value={titulo}
          onChange={e => setTitulo(e.target.value)}
          className="w-full border rounded px-3 py-2"
          required
        />
      </div>
      <div>
        <label className="block mb-1">Número de páginas</label>
        <input
          type="number"
          value={paginas}
          onChange={e => setPaginas(e.target.value)}
          className="w-full border rounded px-3 py-2"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Cadastrar
      </button>
    </form>
  );
}
