import { ListingPage } from "@/components/listing-page";
import { PageFrame } from "@/components/site-shell";

export default function HobbiesPage() {
  return (
    <PageFrame>
      <ListingPage
        cluster="hobbies"
        eyebrow="Hobbies / Certifications"
        title="The practical, physical, and slightly unexpected corners."
        intro="Lightweight pages for tennis, Lagree, AI certification, and notary certification. These are meant to feel personal and concise."
      />
    </PageFrame>
  );
}
