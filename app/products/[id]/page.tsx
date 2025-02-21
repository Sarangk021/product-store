type Props = {
  params: { id: string };
};

export default function ProductDetail({ params }: Props) {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Product {params.id}</h1>
      <p>Details of product {params.id} go here...</p>
    </div>
  );
}
