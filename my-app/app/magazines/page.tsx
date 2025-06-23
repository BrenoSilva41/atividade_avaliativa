import { listMagazines } from '../../lib/api';
import MagazineForm from '../../components/MagazineForm';
import MagazineList from '../../components/MagazineList';

export default async function MagazinesPage() {
  const magazines = await listMagazines();

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Revistas</h1>
      <MagazineForm />
      <MagazineList magazines={magazines} />
    </div>
  );
}
