import { ListingPage } from "@/components/listing-page";
import { PageFrame } from "@/components/site-shell";

export default function WorkPage() {
  return (
    <PageFrame>
      <ListingPage
        cluster="work"
        eyebrow="Work"
        title="Engineering, internships, internal tools, and lessons learned."
        intro="A public-safe work index with room for role context, reflection, technologies, and impact placeholders without over-sharing private details."
      />
    </PageFrame>
  );
}
