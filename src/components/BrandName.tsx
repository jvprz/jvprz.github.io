export default function BrandName({ compact = false }: { compact?: boolean }) {
  if (compact) return <span className="identity-name identity-short"><span className="identity-initial">J</span>P<span className="identity-dot">.</span></span>;
  return <span className="identity-name"><span className="identity-first"><span className="identity-initial">J</span>avier</span>{' '}<span className="identity-last">Pérez<span className="identity-dot">.</span></span></span>;
}
