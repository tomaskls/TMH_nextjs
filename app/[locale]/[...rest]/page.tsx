import { notFound } from 'next/navigation';

// Nežinomi adresai (pvz. /lt/kazkas) rodo lokalizuotą 404 puslapį
export default function CatchAllPage() {
  notFound();
}
