import { notFound } from "next/navigation";
import { DetailPage } from "@/components/detail-page";
import { PageFrame } from "@/components/site-shell";
import { getItemBySlug, portfolioItems } from "@/content/portfolio";

export function generateStaticParams() {
  return portfolioItems
    .filter((item) => item.route.startsWith("/projects/"))
    .map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getItemBySlug(slug);

  return {
    title: item?.title ?? "Project",
    description: item?.oneLiner,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getItemBySlug(slug);

  if (!item || !item.route.startsWith("/projects/")) {
    notFound();
  }

  return (
    <PageFrame>
      <DetailPage item={item} />
    </PageFrame>
  );
}
