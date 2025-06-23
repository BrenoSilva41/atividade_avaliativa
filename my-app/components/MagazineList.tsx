'use client';
import { Magazine, deleteMagazine } from '../lib/api';
import { useRouter } from 'next/navigation';

export default function MagazineList({ magazines }: { magazines: Magazine[] }) {
  const router = useRouter();
  return (
    <ul className="space-y-4">
      {magazines.map(m => (
        <li key={m._id} className="bg-white p-6 rounded shadow flex justify-between items-center">
          <div>
            <h3 className="text-lg font-medium">{m.titulo}</h3>
            <p className="text-gray-600">{m.autor} – {m.paginas} páginas</p>
          </div>
          <button
            className="text-red-600 hover:underline"
            onClick={async () => {
              if (m._id && confirm('Deseja excluir?')) {
                await deleteMagazine(m._id);
                router.refresh();
              }
            }}
          >
            Excluir
          </button>
        </li>
      ))}
    </ul>
  );
}
