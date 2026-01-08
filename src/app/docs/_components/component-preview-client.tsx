"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { CopyButton } from "./copy-button";
import Image from "next/image";

interface ComponentPreviewClientProps {
  children?: React.ReactNode; // Unused but kept for compatibility
  code: string;
  highlightedCode: string;
  className?: string;
  screenshotName?: string; // Name of screenshot file in /public/screenshots/
}

export function ComponentPreviewClient({
  code,
  highlightedCode,
  className,
  screenshotName,
}: ComponentPreviewClientProps) {
  const [activeTab, setActiveTab] = useState<"preview" | "code">("preview");

  return (
    <div className="w-full rounded-lg border overflow-hidden">
      <div className="flex items-center justify-between border-b bg-muted/30 px-2 h-12">
        <div className="flex gap-2">
          <button
            onClick={() => setActiveTab("preview")}
            className={cn(
              "px-3 py-1 text-xs font-medium rounded transition-colors",
              activeTab === "preview"
                ? "text-foreground bg-muted dark:bg-muted/80"
                : "text-muted-foreground hover:text-foreground hover:bg-muted dark:hover:bg-muted/80"
            )}
          >
            Preview
          </button>
          <button
            onClick={() => setActiveTab("code")}
            className={cn(
              "px-3 py-1 text-xs font-medium rounded transition-colors",
              activeTab === "code"
                ? "text-foreground bg-muted dark:bg-muted/80"
                : "text-muted-foreground hover:text-foreground hover:bg-muted dark:hover:bg-muted/80"
            )}
          >
            Code
          </button>
        </div>

        <CopyButton text={code} />
      </div>

      <div className={cn("h-150 overflow-hidden", className)}>
        {activeTab === "preview" ? (
          <div className="h-full bg-muted/10 flex items-center justify-center">
            {screenshotName ? (
              <Image
                src={`/screenshots/${screenshotName}`}
                alt="Map example screenshot"
                width={800}
                height={400}
                className="w-full h-full object-contain"
                priority
              />
            ) : (
              <p className="text-muted-foreground text-sm">
                Screenshot not available
              </p>
            )}
          </div>
        ) : (
          <div
            className="h-full p-4 overflow-auto text-sm bg-muted/20 [&_pre]:bg-transparent! [&_code]:bg-transparent!"
            dangerouslySetInnerHTML={{ __html: highlightedCode }}
          />
        )}
      </div>
    </div>
  );
}
