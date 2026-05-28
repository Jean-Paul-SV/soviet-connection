const segment = 'NEW DROP — SS26 COLLECTION ★ FREE WORLDWIDE SHIPPING ★ LIMITED QUANTITIES ★ SOVIET CONNECTION ★ '
const items = Array(8).fill(segment)

export function AnnouncementBar() {
  return (
    <div className="bg-[#CC0000] py-2.5 overflow-hidden">
      <div
        className="flex animate-marquee whitespace-nowrap"
        style={{ width: 'max-content' }}
      >
        {items.map((text, i) => (
          <span
            key={i}
            className="font-mono text-[11px] text-white tracking-widest uppercase px-4"
          >
            {text}
          </span>
        ))}
      </div>
    </div>
  )
}
