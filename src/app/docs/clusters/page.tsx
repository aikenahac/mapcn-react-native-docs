import {
  DocsLayout,
  DocsSection,
  DocsCode,
  DocsNote,
  DocsLink,
} from "../_components/docs";
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
        <strong>Wrapper limitation:</strong> The <DocsCode>MapClusterLayer</DocsCode>{" "}
        component from the web version is not part of mapcn-react-native.
        Clustering is still possible when you drop down to raw{" "}
        <DocsCode>GeoJSONSource</DocsCode>/<DocsCode>ShapeSource</DocsCode> and{" "}
        <DocsCode>Layer</DocsCode> from <DocsCode>@maplibre/maplibre-react-native</DocsCode>.
      </DocsNote>

      <DocsSection title="GeoJSON Clustering">
        <p>
          For clustered datasets, provide a point{" "}
          <DocsCode>FeatureCollection</DocsCode> through a GeoJSON source, turn
          on source clustering, then render clustered and unclustered features
          with separate native layers. Upstream MapLibre React Native exposes
          clustering controls like <DocsCode>cluster</DocsCode>,{" "}
          <DocsCode>clusterRadius</DocsCode>, <DocsCode>clusterMinPoints</DocsCode>,{" "}
          <DocsCode>clusterMaxZoomLevel</DocsCode>, and{" "}
          <DocsCode>clusterProperties</DocsCode>, plus helper methods like{" "}
          <DocsCode>getClusterExpansionZoom</DocsCode>,{" "}
          <DocsCode>getClusterLeaves</DocsCode>, and{" "}
          <DocsCode>getClusterChildren</DocsCode> for zooming into or inspecting
          a cluster after a press event.
        </p>
        <p>
          mapcn-react-native does not wrap that API today, but you can build it directly
          with the same low-level GeoJSON layering approach shown in the{" "}
          <DocsLink href="/docs/advanced-usage#example-markers-via-layers">
            Advanced Usage GeoJSON layers example
          </DocsLink>{" "}
          and the upstream{" "}
          <DocsLink
            href="https://maplibre.org/maplibre-react-native/docs/components/sources/shape-source/"
            external
          >
            ShapeSource documentation
          </DocsLink>
          .
        </p>

        <p className="font-medium text-foreground">Possible with GeoJSON datasets</p>
        <ul>
          <li>Cluster point features when they are provided through a GeoJSON or shape source.</li>
          <li>Style clustered and unclustered output with native layers such as circle and symbol layers.</li>
          <li>Aggregate cluster metadata with <DocsCode>clusterProperties</DocsCode>.</li>
          <li>Respond to taps with source <DocsCode>onPress</DocsCode> and inspect clusters with the cluster query methods above.</li>
          <li>Render large point datasets more efficiently than many individual <DocsCode>MapMarker</DocsCode> components.</li>
          <li>Use GeoJSON for lines and polygons too, as rendered layers rather than clustered markers.</li>
        </ul>

        <p className="font-medium text-foreground">Not possible or not provided here</p>
        <ul>
          <li>No first-class <DocsCode>MapClusterLayer</DocsCode> abstraction in mapcn&apos;s exported API.</li>
          <li>No automatic clustering for <DocsCode>MapMarker</DocsCode> components.</li>
          <li>No clustering for non-point GeoJSON geometries; clustering applies to point shapes.</li>
          <li>No <DocsCode>MarkerPopup</DocsCode>, <DocsCode>MarkerLabel</DocsCode>, or arbitrary React Native marker subtree inside layer-based clusters.</li>
          <li>No new screenshot, example file, or full tutorial on this page; this page stays as a minimal explanation.</li>
        </ul>
      </DocsSection>
    </DocsLayout>
  );
}
