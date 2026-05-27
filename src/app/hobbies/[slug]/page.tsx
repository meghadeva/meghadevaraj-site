import { notFound } from "next/navigation";
import { DetailPage } from "@/components/detail-page";
import { PageFrame } from "@/components/site-shell";
import { getItemBySlug, placeholderItems } from "@/content/portfolio";

export function generateStaticParams() {
  return placeholderItems
    .filter((item) => item.route.startsWith("/hobbies/"))
    .map((item) => ({ slug: item.slug }));
}

export default async function HobbyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getItemBySlug(slug);

  if (!item || !item.route.startsWith("/hobbies/")) {
    notFound();
  }

  return (
    <PageFrame>
      <DetailPage item={item} />
    </PageFrame>
  );
}
