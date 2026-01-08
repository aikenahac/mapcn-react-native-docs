import { DocsLayout, DocsSection } from "../_components/docs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Companion App",
};

export default function CompanionAppPage() {
  return (
    <DocsLayout
      title="Companion App"
      description="Download the companion app for previewing map components."
      prev={{ title: "API Reference", href: "/docs/api-reference" }}
      next={{ title: "Basic Map", href: "/docs/basic-map" }}
    >
      <DocsSection title="iOS Download">
        <p>
          Pending Apple approval.
        </p>
      </DocsSection>

      <DocsSection title="Android Download">
        <p>
          Pending Google approval.
        </p>
      </DocsSection>
    </DocsLayout>
  );
}
