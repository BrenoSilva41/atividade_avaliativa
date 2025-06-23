const BASE = 'https://crudcrud.com/api/2cb1d03ecba943199826aa93ce70ee17';
const RESOURCE = 'magazines';

export type Magazine = {
  _id?: string;
  autor: string;
  titulo: string;
  paginas: number;
};

export async function listMagazines(): Promise<Magazine[]> {
  const res = await fetch(`${BASE}/${RESOURCE}`);
  return res.json();
}

export async function createMagazine(data: Magazine): Promise<Magazine> {
  const res = await fetch(`${BASE}/${RESOURCE}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function deleteMagazine(id: string): Promise<void> {
  await fetch(`${BASE}/${RESOURCE}/${id}`, { method: 'DELETE' });
}
