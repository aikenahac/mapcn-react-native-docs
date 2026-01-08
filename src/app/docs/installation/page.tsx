import {
  DocsCode,
  DocsLayout,
  DocsLink,
  DocsNote,
  DocsSection,
} from "../_components/docs";
import { CodeBlock } from "../_components/code-block";
import { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "site-url-here";

const installMapCode = `npx shadcn@latest add ${siteUrl}/maps/map.json`;

const installDepsCode = `npx expo install @maplibre/maplibre-react-native@11.0.0-alpha.28 expo-location`;

const setupPermissionsExpo = `<!-- app.json -->
{
  "expo": {
    ...
    "newArchEnabled": true,
    "ios": {
      ...
      "infoPlist": {
        "ITSAppUsesNonExemptEncryption": false,
        "NSAppTransportSecurity": {
          "NSAllowsArbitraryLoads": true
        },
        "NSLocationWhenInUseUsageDescription": "This app needs access to your location to show you on the map.",
        "NSLocationAlwaysAndWhenInUseUsageDescription": "This app needs access to your location to show you on the map."
      }
    },
    "android": {
      ...
      "permissions": [
        "ACCESS_FINE_LOCATION",
        "ACCESS_COARSE_LOCATION"
      ]
    },
    "plugins": [
      ...
      // this will show a warning for no valid plugin, but it is required
      "@maplibre/maplibre-react-native"
    ],
    ...
  }
}
`;

const setupPermissionsIOS = `<!-- ios/YourApp/Info.plist -->
<key>NSLocationWhenInUseUsageDescription</key>
<string>We need your location to show it on the map</string>`;

const setupPermissionsAndroid = `<!-- android/app/src/main/AndroidManifest.xml -->
<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
<uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />`;

const usageCode = `import { Map, MapControls } from "@/components/ui/map";
import { View, StyleSheet } from "react-native";

export function MyMapScreen() {
  return (
    <View style={styles.container}>
      <Map center={[-74.006, 40.7128]} zoom={11}>
        <MapControls />
      </Map>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});`;

export const metadata: Metadata = {
  title: "Installation",
};

export default function InstallationPage() {
  return (
    <DocsLayout
      title="Installation"
      description="How to install and set up mapcn in your React Native project."
      prev={{ title: "Introduction", href: "/docs" }}
      next={{ title: "API Reference", href: "/docs/api-reference" }}
    >
      <DocsNote>
        <strong>Alpha Version:</strong> This library requires{" "}
        <DocsCode>@maplibre/maplibre-react-native@11.0.0-alpha.28</DocsCode>,
        which is currently in alpha. Version 11 includes significant improvements
        and bug fixes. The API is stable but the package is not yet officially
        released.
      </DocsNote>

      <DocsSection title="Prerequisites">
        <p>
          A React Native project with{" "}
          <DocsLink href="https://expo.dev" external>
            Expo
          </DocsLink>{" "}
          or bare React Native. This component library works best with Expo and
          optionally{" "}
          <DocsLink href="https://www.nativewind.dev/" external>
            NativeWind
          </DocsLink>{" "}
          for styling.
        </p>
      </DocsSection>

      <DocsSection title="Install Dependencies">
        <p>First, install the required packages:</p>
        <CodeBlock code={installDepsCode} language="bash" />
        <p>
          This installs <DocsCode>@maplibre/maplibre-react-native</DocsCode> (the
          map library) and <DocsCode>expo-location</DocsCode> (for location
          services).
        </p>
      </DocsSection>

      <DocsSection title="Install Map Component">
        <p>Run the following command to add the map component:</p>
        <CodeBlock code={installMapCode} language="bash" />
        <p>
          This will add the map component to{" "}
          <DocsCode>components/ui/map.tsx</DocsCode> in your project.
        </p>
      </DocsSection>

      <DocsSection title="Configure Permissions">
        <p>
          If you plan to use location features, configure permissions for iOS and
          Android:
        </p>

        <h4 className="font-semibold mt-6 mb-3 text-sm">Expo (app.json)</h4>
        <CodeBlock code={setupPermissionsExpo} language="json" />

        <h3 className="font-semibold mt-6 mb-3">Using Bare React Native</h3>

        <h4 className="font-semibold mt-6 mb-3 text-sm">iOS (Info.plist)</h4>
        <CodeBlock code={setupPermissionsIOS} language="xml" />

        <h4 className="font-semibold mt-6 mb-3 text-sm">Android (AndroidManifest.xml)</h4>
        <CodeBlock code={setupPermissionsAndroid} language="xml" />
      </DocsSection>

      <DocsSection title="Usage">
        <p>Import and use the map component in your screens:</p>
        <CodeBlock code={usageCode} />
      </DocsSection>

      <DocsNote>
        <strong>Note:</strong> The map uses free CARTO basemap tiles by default.
        No API key required. Tiles automatically switch between light and dark
        themes based on your app&apos;s color scheme.
      </DocsNote>

      <DocsNote>
        <strong>Expo Development Client:</strong> MapLibre React Native requires
        a{" "}
        <DocsLink
          href="https://docs.expo.dev/develop/development-builds/introduction/"
          external
        >
          development build
        </DocsLink>
        . It will not work with Expo Go. Run{" "}
        <DocsCode>npx expo run:ios</DocsCode> or{" "}
        <DocsCode>npx expo run:android</DocsCode> to build and run on a simulator
        or device.
      </DocsNote>
    </DocsLayout>
  );
}
