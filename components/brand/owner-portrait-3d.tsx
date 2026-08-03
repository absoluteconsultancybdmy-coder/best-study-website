import Image from "next/image";

type OwnerPortrait3DProps = {
  priority?: boolean;
  size?: "compact" | "large";
  showCaption?: boolean;
};

export function OwnerPortrait3D({
  priority = false,
  size = "compact",
  showCaption = true,
}: OwnerPortrait3DProps) {
  return (
    <figure className={`owner-portrait-3d owner-portrait-${size}`}>
      <div className="owner-portrait-stage">
        <div aria-hidden="true" className="owner-portrait-ambient owner-portrait-ambient-green" />
        <div aria-hidden="true" className="owner-portrait-ambient owner-portrait-ambient-gold" />
        <div aria-hidden="true" className="owner-portrait-glow" />
        <div aria-hidden="true" className="owner-portrait-depth owner-portrait-depth-rear" />
        <div aria-hidden="true" className="owner-portrait-depth owner-portrait-depth-mid" />
        <div aria-hidden="true" className="owner-portrait-backplate" />
        <div className="owner-portrait-frame">
          <Image
            src="/images/brand/best-study-owner-primary.png"
            alt="Best Study owner portrait"
            fill
            priority={priority}
            sizes={
              size === "large"
                ? "(min-width: 768px) 380px, 88vw"
                : "(min-width: 1024px) 430px, (min-width: 640px) 48vw, 88vw"
            }
            className="owner-portrait-image"
          />
          <div aria-hidden="true" className="owner-portrait-rim-light" />
          <div aria-hidden="true" className="owner-portrait-sheen" />
        </div>
        <span className="owner-role-chip" lang="en">Best Study Owner</span>
        <span aria-hidden="true" className="owner-brand-chip" lang="en">
          BEST · OWNER
        </span>
      </div>

      {showCaption ? (
        <figcaption className="owner-portrait-caption">
          <strong>Best Study-এর Owner</strong>
          <span className="content-placeholder">[শিক্ষকের নাম] PLACEHOLDER</span>
          <p>বিস্তারিত পরিচিতি প্রতিষ্ঠাতার অনুমোদনের পর যোগ হবে।</p>
        </figcaption>
      ) : null}
    </figure>
  );
}
