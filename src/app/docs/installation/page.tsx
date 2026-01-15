import {
  DocsCode,
  DocsLayout,
  DocsLink,
  DocsNote,
  DocsSection,
} from "../_components/docs";
import { CodeBlock } from "../_components/code-block";
import { Metadata } from "next";
import { StructuredData } from "@/components/structured-data";
import {
  getTechArticleSchema,
  getBreadcrumbSchema,
  getHowToSchema,
} from "@/lib/structured-data";

const installMapCode = `npx @react-native-reusables/cli@latest add https://mapcn-rn.aiken.si/maps/map.json`;
const installMaptilerMapCode = `npx @react-native-reusables/cli@latest add https://mapcn-rn.aiken.si/maps/map-maptiler.json`;

const maptilerApiKeyCode = `# .env
EXPO_PUBLIC_MAPTILER_API_KEY=your_maptiler_api_key_here
`;

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

const usageCode = `import { Map } from "@/components/ui/map";
import { View } from "react-native";

export default function BasicMapExample() {
  return (
    <View className="h-[500px] rounded-xl overflow-hidden border border-border">
      <Map zoom={12} center={[-122.4194, 37.7749]} />
    </View>
  );
}`;

export const metadata: Metadata = {
  title: "Installation",
  description:
    "Complete installation guide for mapcn-react-native. Learn how to add beautiful map components to your React Native and Expo projects.",
  keywords: [
    "react native map installation",
    "maplibre react native setup",
    "expo maps",
    "react native reusables",
    "shadcn react native",
    "nativewind maps",
  ],
  openGraph: {
    title: "Installation - mapcn-react-native",
    description:
      "Complete installation guide for mapcn-react-native. Learn how to add beautiful map components to your React Native and Expo projects.",
    type: "article",
  },
};

export default function InstallationPage() {
  const breadcrumbs = getBreadcrumbSchema([
    { name: "Home", item: "/" },
    { name: "Documentation", item: "/docs" },
    { name: "Installation", item: "/docs/installation" },
  ]);

  const article = getTechArticleSchema(
    "Installation Guide - mapcn-react-native",
    "Complete installation guide for mapcn-react-native. Learn how to add beautiful map components to your React Native and Expo projects.",
    "/docs/installation"
  );

  const howTo = getHowToSchema(
    "How to Install mapcn-react-native",
    "Step-by-step guide to install and set up mapcn map components in your React Native or Expo project",
    [
      {
        name: "Install Dependencies",
        text: "Install MapLibre React Native and Expo Location packages using npx expo install",
      },
      {
        name: "Install Map Component",
        text: "Add the map component to your project using the React Native Reusables CLI",
      },
      {
        name: "Configure Permissions",
        text: "Set up location permissions for iOS and Android in your app configuration",
      },
      {
        name: "Use the Component",
        text: "Import and use the Map component in your React Native screens",
      },
    ]
  );

  return (
    <>
      <StructuredData data={[breadcrumbs, article, howTo]} />
      <DocsLayout
        title="Installation"
        description="How to install and set up mapcn in your React Native project."
        prev={{ title: "Introduction", href: "/docs" }}
        next={{ title: "Commercial use", href: "/docs/commercial-use" }}
      >
      <DocsNote>
        <strong>Alpha Version:</strong> This library requires{" "}
        <DocsCode>@maplibre/maplibre-react-native@11.0.0-alpha.28</DocsCode>,
        which is currently in alpha. Version 11 is used due to its support for the new architecture.
        Breaking changes may arise.
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

      <DocsSection title="Prerequisites">
        <p>
          A React Native project with{" "}
          <DocsLink href="https://expo.dev" external>
            Expo
          </DocsLink>{" "}
          or bare React Native. This component library works best with Expo and requires{" "}
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

      <DocsNote>
        <strong>Note:</strong> The map uses CARTO basemap tiles by default, which are only free for NON-COMMERCIAL use.
        For cheaper commercial use, check out the {" "}<DocsLink href="/docs/commercial-use">
            Maptiler based version of the component
          </DocsLink>.{" "}
        Tiles automatically switch between light and dark
        themes based on your app&apos;s color scheme.
      </DocsNote>

      <DocsSection title="Install Map Component">
        <p>Run the following command to add the map component:</p>
        <CodeBlock code={installMapCode} language="bash" />
        <p>
          This will add the map component to{" "}
          <DocsCode>components/ui/map.tsx</DocsCode> in your project.
        </p>
      </DocsSection>

      <DocsSection title="Install Maptiler based Map Component for cheaper commercial use">
        <p>Run the following command to add the map component:</p>
        <CodeBlock code={installMaptilerMapCode} language="bash" />

        <p>Get a Maptiler API key from the <DocsLink href="https://cloud.maptiler.com/account/keys" external>Maptiler</DocsLink> website.</p>

        <p>Maptiler pricing:</p>
        <ul className="list-disc list-inside mb-4">
          <li>Free tier: 100,000 requests/month</li>
          <li>Additional pricing info is available on <DocsLink href="https://www.maptiler.com/cloud/pricing" external>their pricing page</DocsLink></li>
        </ul>

        <p>Add the API key to your environment variables:</p>
        <CodeBlock code={maptilerApiKeyCode} language="bash" />

        <p>
          This will add the maptiler-based map component to{" "}
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
      </DocsLayout>
    </>
  );
}
