
export default async function Docs({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;

  return (
    <div>
      {slug?.map((e, index) => (
        <h1 key={index}>Viewing docs for feature {e}</h1>
      ))}
    </div>
  );
}
