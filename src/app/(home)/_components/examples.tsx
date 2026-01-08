import Image from "next/image";
import { cn } from "@/lib/utils";

function ExampleCard({
  label,
  className,
  delay = "delay-500",
  screenshot,
}: {
  label: string;
  className?: string;
  delay?: string;
  screenshot: string;
}) {
  return (
    <div
      className={cn(
        "rounded-xl overflow-hidden border border-border/50 shadow bg-card relative animate-scale-in",
        delay,
        className
      )}
    >
      {label && (
        <div className="uppercase absolute top-2 left-2 z-10 tracking-wider text-[10px] text-muted-foreground bg-background/90 backdrop-blur-sm rounded px-2 py-1">
          {label}
        </div>
      )}
      <Image
        src={`/screenshots/home/${screenshot}`}
        alt={label}
        width={800}
        height={600}
        className="w-full h-full object-cover"
        priority
      />
    </div>
  );
}

export function Examples() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 animate-fade-in delay-400">
      {/* Widget 1: Analytics */}
      <ExampleCard
        label="Analytics"
        className=""
        delay="delay-400"
        screenshot="analytics.png"
      />

      {/* Widget 2: Delivery */}
      <ExampleCard
        label="Delivery"
        className=""
        delay="delay-500"
        screenshot="delivery.png"
      />

      {/* Widget 3: Trending */}
      <ExampleCard
        label="Trending"
        className=""
        delay="delay-600"
        screenshot="trending.png"
      />

      {/* Widget 4: EV Charging */}
      <ExampleCard
        label="EV Charging"
        className=""
        delay="delay-700"
        screenshot="ev-charging.png"
      />

      {/* Widget 5: Locate Me */}
      <ExampleCard
        label="Locate Me"
        className=""
        delay="delay-800"
        screenshot="locate-me.png"
      />
    </div>
  );
}
