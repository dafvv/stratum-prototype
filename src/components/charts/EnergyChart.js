'use client';

import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceDot
} from 'recharts';

const formatHour = (tickItem) => {
  return new Date(tickItem).toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });
};

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    const isAnomaly = payload[0].payload.is_anomaly;
    return (
      <div className="bg-white p-4 rounded-xl shadow-lg border border-gray-100 text-sm">
        <p className="font-bold text-stratum-main mb-1">{formatHour(label)}</p>
        <p className="text-gray-500 font-medium">Power: <span className="font-mono font-bold text-stratum-main">{payload[0].value.toFixed(1)} kW</span></p>
        {isAnomaly && (
          <div className="mt-2 text-xs text-status-critical font-bold bg-red-50 px-2 py-1 rounded inline-block">
            ⚠️ Anomali Terdeteksi (Isolation Forest)
          </div>
        )}
      </div>
    );
  }
  return null;
};

export function EnergyLineChart({ data, height = 300 }) {

  return (
    <div style={{ height, width: '100%' }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" vertical={false} />
          <XAxis 
            dataKey="timestamp" 
            tickFormatter={formatHour}
            stroke="#9ca3af"
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />
          <YAxis 
            stroke="#9ca3af"
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />
          <Tooltip content={<CustomTooltip />} />
          <Line 
            type="monotone" 
            dataKey="power_kw" 
            stroke="#10b981" 
            strokeWidth={3}
            dot={false}
            activeDot={{ r: 6, fill: '#10b981', stroke: '#fff', strokeWidth: 2 }}
          />
          {/* Anomaly markers */}
          {data.map((entry, index) => {
            if (entry.is_anomaly) {
              return (
                <ReferenceDot 
                  key={`anomaly-${index}`}
                  x={entry.timestamp} 
                  y={entry.power_kw} 
                  r={6} 
                  fill="var(--status-critical)" 
                  stroke="none"
                />
              );
            }
            return null;
          })}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
