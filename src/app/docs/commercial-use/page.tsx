import {
  DocsCode,
  DocsLayout,
  DocsLink,
  DocsSection,
} from "../_components/docs";
import { CodeBlock } from "../_components/code-block";
import { Metadata } from "next";

const installMaptilerMapCode = `npx @react-native-reusables/cli@latest add https://mapcn-rn.aiken.si/maps/map-maptiler.json`;

const maptilerApiKeyCode = `# .env
EXPO_PUBLIC_MAPTILER_API_KEY=your_maptiler_api_key_here
`;

export const metadata: Metadata = {
  title: "Installation",
};

export default function InstallationPage() {
  return (
    <DocsLayout
      title="Commercial use"
      description="How to setup your project for commercial use."
      prev={{ title: "Installation", href: "/docs/installation" }}
      next={{ title: "API Reference", href: "/docs/api-reference" }}
    >
      <DocsSection title="CARTO Basemaps">
        <p>If you have a commercial license for CARTO basemaps, you can disregard this.</p>
      </DocsSection>

      <DocsSection title="Install Maptiler based Map Component for cheaper commercial use">
        <p>Run the following command to add the map component:</p>
        <CodeBlock code={installMaptilerMapCode} language="bash" />

        <p>Get a Maptiler API key from the <DocsLink href="https://cloud.maptiler.com/account/keys" external>Maptiler</DocsLink> website.</p>

        <p>Maptiler pricing:</p>
        <ul className="list-disc list-inside mb-4">
          <li>Free tier: 100,000 requests/month</li>
          <li>Additional pricing info is available at: <DocsLink href="https://www.maptiler.com/cloud/pricing" external>Maptiler Pricing</DocsLink></li>
        </ul>

        <p>Add the API key to your environment variables:</p>
        <CodeBlock code={maptilerApiKeyCode} language="bash" />

        <p>
          This will add the maptiler-based map component to{" "}
          <DocsCode>components/ui/map.tsx</DocsCode> in your project.
        </p>
      </DocsSection>
    </DocsLayout>
  );
}
