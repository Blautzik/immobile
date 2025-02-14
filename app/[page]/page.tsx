import type { Metadata } from 'next';



import { notFound } from 'next/navigation';



export default async function Page(props: { params: Promise<{ page: string }> }) {
  const params = await props.params;
  const page = null;

  if (!page) return notFound();

  return (
    <>

    </>
  );
}
