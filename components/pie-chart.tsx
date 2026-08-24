interface Slice {
  label: string
  value: number
  color: string
}

interface PieChartProps {
  question: string
  responses: number
  data: Slice[]
}

function polarToCartesian(cx: number, cy: number, r: number, angleDeg: number) {
  const angleRad = ((angleDeg - 90) * Math.PI) / 180
  return {
    x: cx + r * Math.cos(angleRad),
    y: cy + r * Math.sin(angleRad),
  }
}

function arcPath(cx: number, cy: number, r: number, startAngle: number, endAngle: number) {
  // Full circle needs to be drawn as two arcs
  if (endAngle - startAngle >= 359.999) {
    return `M ${cx - r} ${cy} A ${r} ${r} 0 1 1 ${cx + r} ${cy} A ${r} ${r} 0 1 1 ${cx - r} ${cy} Z`
  }
  const start = polarToCartesian(cx, cy, r, endAngle)
  const end = polarToCartesian(cx, cy, r, startAngle)
  const largeArc = endAngle - startAngle <= 180 ? 0 : 1
  return `M ${cx} ${cy} L ${start.x} ${start.y} A ${r} ${r} 0 ${largeArc} 0 ${end.x} ${end.y} Z`
}

export function PieChart({ question, responses, data }: PieChartProps) {
  const total = data.reduce((sum, s) => sum + s.value, 0)
  const cx = 90
  const cy = 90
  const r = 88

  let cursor = 0
  const slices = data.map((slice) => {
    const startAngle = (cursor / total) * 360
    cursor += slice.value
    const endAngle = (cursor / total) * 360
    // Label position at slice midpoint
    const mid = polarToCartesian(cx, cy, r * 0.6, (startAngle + endAngle) / 2)
    return { ...slice, path: arcPath(cx, cy, r, startAngle, endAngle), mid, pct: (slice.value / total) * 100 }
  })

  return (
    <figure className="rounded-md border border-border bg-card p-4">
      <figcaption className="mb-3 text-sm font-semibold leading-snug text-foreground">
        {question}
        <span className="mt-0.5 block text-xs font-normal text-muted-foreground">{responses} respostas</span>
      </figcaption>

      <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-center sm:justify-center">
        <svg viewBox="0 0 180 180" className="h-40 w-40 shrink-0" role="img" aria-label={question}>
          {slices.map((slice) => (
            <path key={slice.label} d={slice.path} fill={slice.color} stroke="var(--card)" strokeWidth={1} />
          ))}
          {slices.map((slice) =>
            slice.pct >= 4 ? (
              <text
                key={`t-${slice.label}`}
                x={slice.mid.x}
                y={slice.mid.y}
                textAnchor="middle"
                dominantBaseline="middle"
                className="fill-white text-[11px] font-semibold"
              >
                {slice.pct.toFixed(1).replace(".", ",")}%
              </text>
            ) : null,
          )}
        </svg>

        <ul className="flex flex-col gap-1.5 text-[13px] leading-snug">
          {slices.map((slice) => (
            <li key={`l-${slice.label}`} className="flex items-start gap-2">
              <span
                className="mt-0.5 inline-block h-3 w-3 shrink-0 rounded-full"
                style={{ backgroundColor: slice.color }}
                aria-hidden="true"
              />
              <span className="text-foreground">{slice.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </figure>
  )
}
