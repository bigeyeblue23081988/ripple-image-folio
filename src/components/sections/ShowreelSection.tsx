import { useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { useLang } from "@/i18n/LanguageProvider";

import showreelAsset from "@/assets/showreel.mp4.asset.json";
import rainbowNation from "@/assets/rainbow-nation.jpg";

/**
 * The showreel: starts playing silently as soon as it scrolls into view,
 * loops, and offers a quiet sound toggle. Framed like the other plates.
 */
export function ShowreelSection() {
  const { t } = useLang();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  const toggleSound = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setMuted(video.muted);
  };

  return (
    <section className="container-wide pb-28 md:pb-44">
      <figure className="group reveal">
        <div className="relative overflow-hidden bg-foreground">
          <video
            ref={videoRef}
            src={showreelAsset.url}
            poster={rainbowNation}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="w-full h-auto aspect-video"
            aria-label={t.showreel.ariaLabel}
          />
          <button
            type="button"
            onClick={toggleSound}
            className="absolute bottom-4 right-4 md:bottom-6 md:right-6 inline-flex items-center gap-2 bg-foreground/80 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.14em] text-background backdrop-blur-sm transition-colors duration-300 hover:bg-accent hover:text-accent-foreground"
          >
            {muted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
            {muted ? t.showreel.soundOn : t.showreel.soundOff}
          </button>
        </div>

        <figcaption className="mt-4 md:mt-5 flex items-start justify-between gap-4">
          <div className="flex items-start gap-2 md:gap-3">
            <span
              aria-hidden
              className="mt-0.5 hidden md:block h-9 w-px shrink-0 bg-foreground"
            />
            <span
              aria-hidden
              className="mt-1.5 block md:hidden h-1.5 w-1.5 rounded-full bg-accent shrink-0"
            />
            <div>
              <p className="text-[11px] md:text-xs font-semibold uppercase tracking-wider">
                {t.showreel.caption}
              </p>
              <p className="mt-1 text-[10px] font-light uppercase tracking-[0.18em] text-foreground/50">
                {t.showreel.sub}
              </p>
            </div>
          </div>
        </figcaption>
      </figure>
    </section>
  );
}
