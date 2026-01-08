import { DocsLayout, DocsSection, DocsCode, DocsNote, DocsLink } from "../_components/docs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Popups",
};

export default function PopupsPage() {
  return (
    <DocsLayout
      title="Popups"
      description="Display information popups when markers are pressed."
      prev={{ title: "Markers", href: "/docs/markers" }}
      next={{ title: "Routes", href: "/docs/routes" }}
    >
      <DocsSection>
        <p>
          Use <DocsCode>MarkerPopup</DocsCode> inside a{" "}
          <DocsCode>MapMarker</DocsCode> to display callouts when the marker is
          pressed. Popups are implemented using MapLibre&apos;s native Callout
          component and can contain custom React Native components.
        </p>
      </DocsSection>

      <DocsNote>
        <strong>React Native Note:</strong> Unlike the web version, standalone{" "}
        <DocsCode>MapPopup</DocsCode> components are not available in React
        Native. All popups must be attached to markers via{" "}
        <DocsCode>MarkerPopup</DocsCode>.
      </DocsNote>

      <DocsSection title="Basic Popup">
        <p>A simple popup with text content:</p>
        <pre className="mt-4 p-4 rounded-lg bg-muted text-sm overflow-x-auto">
          <code>{`<MapMarker coordinate={[-122.4194, 37.7749]}>
  <MarkerContent>
    <View style={styles.marker} />
  </MarkerContent>
  <MarkerPopup title="San Francisco">
    <Text>The cultural and commercial center</Text>
    <Text>of Northern California</Text>
  </MarkerPopup>
</MapMarker>`}</code>
        </pre>
      </DocsSection>

      <DocsSection title="Rich Popups">
        <p>
          Build complex popups with images, buttons, and styled components:
        </p>
        <pre className="mt-4 p-4 rounded-lg bg-muted text-sm overflow-x-auto">
          <code>{`<MapMarker coordinate={[-122.4194, 37.7749]}>
  <MarkerContent>
    <View style={styles.marker} />
  </MarkerContent>
  <MarkerPopup style={styles.popup}>
    <Image
      source={{ uri: 'https://example.com/image.jpg' }}
      style={styles.image}
    />
    <Text style={styles.title}>Golden Gate Bridge</Text>
    <Text style={styles.description}>
      Iconic suspension bridge and landmark
    </Text>
    <Pressable
      style={styles.button}
      onPress={() => console.log('Get directions')}
    >
      <Text style={styles.buttonText}>Get Directions</Text>
    </Pressable>
  </MarkerPopup>
</MapMarker>`}</code>
        </pre>
      </DocsSection>

      <DocsSection title="Example">
        <p>
          For a complete example with styled popups, see the{" "}
          <DocsLink href="/docs/markers#rich-popups">
            Markers documentation
          </DocsLink>
          .
        </p>
      </DocsSection>
    </DocsLayout>
  );
}
