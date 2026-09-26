import { useMediaQuery } from '../hooks/useMediaQuery';
import { decorForViewport } from '../utils/mobileDecors';
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

function DecorItem({ item }) {
  const style = {
    top: item.top,
    right: item.right,
    left: item.left,
    bottom: item.bottom,
    '--deco-rotate': `${item.rotate ?? 0}deg`,
  };

  const classes = [
    'deco-item',
    `deco-item--${item.type}`,
    item.edge === 'left' ? 'deco-item--edge-left' : '',
    item.edge === 'right' ? 'deco-item--edge-right' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classes} style={style}>
      {item.type === 'star' && <Star variant={item.variant} size={item.size} />}
      {item.type === 'pin' && <PaperPin color={item.color} />}
    </div>
  );
}

export default function NotebookDecor({ items = [] }) {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const viewportItems = decorForViewport(items, { isMobile });

  if (!viewportItems.length) return null;

  return (
    <div className="notebook-decor" aria-hidden="true">
      {viewportItems.map((item, i) => (
        <DecorItem key={`${item.type}-${item.variant ?? item.color}-${item.top}-${i}`} item={item} />
      ))}
    </div>
  );
}
