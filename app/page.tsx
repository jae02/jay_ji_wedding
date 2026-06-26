import { MainCover } from "@/components/MainCover";
import { Greeting } from "@/components/Greeting";
import { Gallery } from "@/components/Gallery";
import { Calendar } from "@/components/Calendar";
import { Location } from "@/components/Location";
import { AccountInfo } from "@/components/AccountInfo";
import { FadeIn } from "@/components/ui/FadeIn";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between overflow-hidden">
      <MainCover />
      <Greeting />
      <Gallery />
      <Calendar />
      <Location />
      <AccountInfo />
      
      {/* Footer */}
      <footer className="w-full py-12 bg-wedding-bg text-center">
        <FadeIn>
          <p className="text-sm text-wedding-text/40 font-serif mb-2">
            임재영 & 유지영
          </p>
          <p className="text-xs text-wedding-text/30">
            © 2026. All rights reserved.
          </p>
        </FadeIn>
      </footer>
    </main>
  );
}
