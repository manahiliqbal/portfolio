import { buildScatter } from '../utils/scatterDecor';
import '../styles/decorations.css';

const STAR_COLORS = {
  gold: '#e0b84a',
  coral: '#d97a8f',
  lavender: '#9b8ec4',
};

function Star({ variant = 'gold', size = 20, className = '' }) {
  const fill = STAR_COLORS[variant] || STAR_COLORS.gold;
  return (
    <svg
      className={`deco-star ${className}`}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        fill={fill}
        d="M12 2l2.4 7.4H22l-6 4.6 2.3 7-6.3-4.6L6 21l2.3-7-6-4.6h7.6L12 2z"
      />
    </svg>
  );
}

export function PaperPin({ color = 'red', className = '', size = 28 }) {
  const head = color === 'gold' ? '#e0b84a' : '#c45c7a';
  const needle = '#8a7a60';
  return (
    <svg
      className={`deco-pin ${className}`}
      width={size}
      height={Math.round(size * 1.28)}
      viewBox="0 0 28 36"
      aria-hidden="true"
    >
      <ellipse cx="14" cy="9" rx="9" ry="8" fill={head} opacity="0.95" />
      <ellipse cx="14" cy="10" rx="5" ry="4" fill="rgba(255,255,255,0.25)" />
      <path d="M14 16 L14 34" stroke={needle} strokeWidth="2" strokeLinecap="round" />
      <circle cx="14" cy="34" r="2" fill={needle} />
    </svg>
  );
}

function Sticker({ label, color = 'peach', className = '' }) {
  return (
    <span className={`deco-sticker deco-sticker--${color} ${className}`} aria-hidden="true">
      {label}
    </span>
  );
}

function Squiggle({ className = '' }) {
  return (
    <svg
      className={`deco-squiggle ${className}`}
      width="48"
      height="24"
      viewBox="0 0 48 24"
      aria-hidden="true"
    >
      <path
        d="M2 14 Q12 4 22 12 T42 10"
        fill="none"
        stroke="#c45c7a"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.55"
      />
    </svg>
  );
}

function DecorItem({ item }) {
  const style = {
    top: item.top,
    right: item.right,
    left: item.left,
    bottom: item.bottom,
    '--deco-delay': `${item.delay ?? 0}s`,
    '--deco-rotate': `${item.rotate ?? 0}deg`,
  };

  const animClass = item.anim
    ? `deco-anim-${item.anim}`
    : item.type === 'pin'
      ? 'deco-anim-wiggle'
      : item.type === 'squiggle'
        ? 'deco-anim-float'
        : 'deco-anim-twinkle';

  const classes = [
    'deco-item',
    `deco-item--${item.type}`,
    item.left != null && !item.edge && !item.gutter ? 'deco-item--side-left' : '',
    item.right != null && !item.edge && !item.gutter ? 'deco-item--side-right' : '',
    item.edge === 'left' ? 'deco-item--edge-left' : '',
    item.edge === 'right' ? 'deco-item--edge-right' : '',
    item.scatter ? 'deco-item--scatter' : '',
    item.gutter ? 'deco-item--gutter' : '',
    animClass,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classes} style={style}>
      {item.type === 'star' && <Star variant={item.variant} size={item.size} />}
      {item.type === 'pin' && <PaperPin color={item.color} />}
      {item.type === 'sticker' && <Sticker label={item.label} color={item.color} />}
      {item.type === 'squiggle' && <Squiggle />}
    </div>
  );
}

export default function NotebookDecor({ items = [], scatter = 'normal' }) {
  const scatterItems = scatter ? buildScatter(scatter) : [];
  const allItems = [...items, ...scatterItems];

  if (!allItems.length) return null;

  return (
    <div className="notebook-decor" aria-hidden="true">
      {allItems.map((item, i) => (
        <DecorItem
          key={`${item.type}-${item.label ?? item.variant ?? item.edge}-${item.top}-${i}`}
          item={item}
        />
      ))}
    </div>
  );
}
