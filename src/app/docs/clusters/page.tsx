import { DocsLayout, DocsSection, DocsCode, DocsNote } from "../_components/docs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clusters",
};

export default function ClustersPage() {
  return (
    <DocsLayout
      title="Clusters"
      description="Clustering large datasets on React Native maps."
      prev={{ title: "Routes", href: "/docs/routes" }}
      next={{ title: "Advanced Usage", href: "/docs/advanced-usage" }}
    >
      <DocsNote>
        <strong>React Native Limitation:</strong> The{" "}
        <DocsCode>MapClusterLayer</DocsCode> component from the web version is
        not available in the React Native version of mapcn. MapLibre React Native
        does not currently support automatic clustering.
      </DocsNote>

      <DocsSection title="Alternative Approaches">
        <p>
          Coming soon.
        </p>
      </DocsSection>
    </DocsLayout>
  );
}
