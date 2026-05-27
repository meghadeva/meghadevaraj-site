import { ListingPage } from "@/components/listing-page";
import { PageFrame } from "@/components/site-shell";

export default function EducationPage() {
  return (
    <PageFrame>
      <ListingPage
        cluster="education"
        eyebrow="Education"
        title="Schools, chapters, and what each one made possible."
        intro="A V1 index for Notre Dame, Stanford, and Wharton. The detail pages are intentionally light placeholders for now, ready for photos, dates, reflections, and activities."
      />
    </PageFrame>
  );
}
