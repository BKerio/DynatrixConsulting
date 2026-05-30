import { PieChart, Pie, Cell, ResponsiveContainer, LabelList } from 'recharts';
import { industryMarketShare } from '@/data/siteData';

const RADIAN = Math.PI / 180;

function renderOutsideLabel(props: {
  cx?: number;
  cy?: number;
  midAngle?: number;
  outerRadius?: number;
  name?: string;
}) {
  const { cx = 0, cy = 0, midAngle = 0, outerRadius = 0, name = '' } = props;
  const radius = outerRadius + 28;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="#18191c"
      textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline="central"
      className="text-[11px] sm:text-[12px] font-normal"
    >
      {name}
    </text>
  );
}

export default function IndustriesPieChart() {
  return (
    <div className="w-full">
      <h2 className="text-center text-xl sm:text-2xl font-semibold text-charcoal mb-8 tracking-tight">
        Company Market Share by Industry
      </h2>

      <div className="w-full h-[420px] sm:h-[520px] lg:h-[580px] mx-auto max-w-4xl">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart margin={{ top: 20, right: 80, bottom: 20, left: 80 }}>
            <Pie
              data={industryMarketShare}
              cx="50%"
              cy="50%"
              dataKey="value"
              nameKey="name"
              outerRadius="72%"
              paddingAngle={0}
              stroke="#ffffff"
              strokeWidth={1}
              label={renderOutsideLabel}
              labelLine={false}
            >
              {industryMarketShare.map((entry) => (
                <Cell key={entry.name} fill={entry.color} />
              ))}
              <LabelList
                dataKey="value"
                position="inside"
                formatter={(value: number) => `${value}%`}
                className="fill-charcoal text-[11px] sm:text-xs font-medium"
              />
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
