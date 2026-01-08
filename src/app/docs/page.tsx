import { Zap, Moon, Puzzle, Code } from "lucide-react";
import { DocsLayout, DocsSection, DocsLink } from "./_components/docs";
import { Metadata } from "next";

const features = [
  {
    icon: Zap,
    title: "Zero Config",
    description:
      "Works out of the box with free map tiles. No API keys required.",
  },
  {
    icon: Moon,
    title: "Theme Aware",
    description: "Automatically adapts to light and dark mode.",
  },
  {
    icon: Puzzle,
    title: "Composable",
    description: "Build complex UIs with simple, composable components.",
  },
  {
    icon: Code,
    title: "TypeScript",
    description: "Full type safety with comprehensive TypeScript support.",
  },
];

export const metadata: Metadata = {
  title: "Introduction",
};

export default function IntroductionPage() {
  return (
    <DocsLayout
      title="Introduction"
      description="Beautiful, accessible map components."
      next={{ title: "Installation", href: "/docs/installation" }}
    >
      <DocsSection>
        <p>
          <strong className="text-foreground">mapcn-react-native</strong> provides
          beautifully designed, accessible, and customizable map components.
          Built on{" "}
          <DocsLink href="https://maplibre.org/maplibre-react-native/" external>
            MapLibre React Native v11
          </DocsLink>
          , styled with{" "}
          <DocsLink href="https://www.nativewind.dev/" external>
            Nativewind
          </DocsLink>
          , and designed to work with{" "}
          <DocsLink href="https://reactnativereusables.com/" external>
            React Native Reusables (shadcn/ui for React Native)
          </DocsLink>
          .
        </p>
      </DocsSection>

      <DocsSection>
        <div className="rounded-lg border border-amber-500/30 bg-amber-500/10 p-4 mt-4">
          <div className="flex items-start gap-3">
            <div className="flex size-5 items-center justify-center rounded-full bg-amber-500/20 shrink-0 mt-0.5">
              <span className="text-xs font-bold text-amber-600">!</span>
            </div>
            <div className="space-y-1">
              <p className="text-sm font-medium text-amber-900 dark:text-amber-100">
                Alpha Version Notice
              </p>
              <p className="text-sm text-amber-800 dark:text-amber-200">
                This library requires{" "}
                <code className="px-1.5 py-0.5 rounded bg-amber-100 dark:bg-amber-900/50 text-xs font-mono">
                  @maplibre/maplibre-react-native@11.0.0-alpha.28
                </code>
                , which is currently in alpha. Version 11 is used due to its support for the new architecture.
                Breaking changes may arise.
              </p>
            </div>
          </div>
        </div>
      </DocsSection>

      <DocsSection title="Why mapcn-react-native?">
        <p>
          There&apos;s no proper copy-paste, easy-to-use map integration for
          React Native. Most solutions require complex configurations, API keys, or
          heavy wrapper libraries. mapcn-react-native gives you beautiful maps with a single
          command.
        </p>
      </DocsSection>

      <DocsSection title="Features">
        <div className="grid gap-4 sm:grid-cols-2 mt-4 not-prose">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-lg border bg-card p-4 space-y-2"
            >
              <div className="flex items-center gap-2">
                <div className="flex size-8 items-center justify-center rounded-md bg-primary/10">
                  <feature.icon className="size-4 text-primary" />
                </div>
                <h3 className="font-medium text-foreground">{feature.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </DocsSection>
    </DocsLayout>
  );
}
