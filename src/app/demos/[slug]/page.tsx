import { notFound } from "next/navigation";
import { DetailPage } from "@/components/detail-page";
import { PageFrame } from "@/components/site-shell";
import { getItemBySlug, portfolioItems } from "@/content/portfolio";

export function generateStaticParams() {
  return portfolioItems
    .filter((item) => item.route.startsWith("/demos/"))
    .map((item) => ({ slug: item.slug }));
}

export default async function DemoPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getItemBySlug(slug);

  if (!item || !item.route.startsWith("/demos/")) {
    notFound();
  }

  return (
    <PageFrame>
      <DetailPage item={item} />
    </PageFrame>
  );
}
