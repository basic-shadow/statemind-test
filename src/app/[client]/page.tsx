import { ClientCard } from "./_components/ClientCard";

export default function ClientPage({ params }: { params: { client: string } }) {
  const client = params.client;

  return (
    <main className="flex min-h-screen justify-center gap-4 py-4 px-4">
      <ClientCard client={decodeURIComponent(client)} />
    </main>
  );
}
