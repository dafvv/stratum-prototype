// Skenario: Opsi B (Cold Chain Chiller A Failure)
// T-48h to T-0h

const generateEnergyData = () => {
  const data = [];
  const now = new Date();
  
  // Generate 24 hours of data
  for (let i = 24; i >= 0; i--) {
    const time = new Date(now.getTime() - i * 60 * 60 * 1000);
    // Baseline power around 15kW
    let power = 15 + Math.random() * 2;
    let isAnomaly = false;

    // Introduce anomaly around T-12h to T-0h (power spike to ~22kW)
    if (i <= 12) {
      power = 22 + Math.random() * 3;
      isAnomaly = true;
    }

    data.push({
      timestamp: time.toISOString(),
      power_kw: power,
      is_anomaly: isAnomaly
    });
  }
  return data;
};

export const MOCK_DATA = {
  facility: {
    id: "f-1",
    name: "PT Demo FnB Bogor",
    location: "Kab. Bogor, Jawa Barat"
  },
  machines: [
    { id: "m-1", name: "Chiller A (Cold Chain)", type: "chiller", health: 45, status: "warning" },
    { id: "m-2", name: "Pasteurizer Line 1", type: "pasteurizer", health: 92, status: "healthy" },
    { id: "m-3", name: "Bottle Filler B", type: "filler", health: 88, status: "healthy" },
    { id: "m-4", name: "Conveyor Belt Main", type: "conveyor", health: 95, status: "healthy" },
    { id: "m-5", name: "Baking Oven 2", type: "oven", health: 80, status: "normal" },
  ],
  energy: {
    chillerA: generateEnergyData()
  },
  oee: {
    availability: 88,
    performance: 92,
    quality: 98,
    total: 79
  },
  compliance: [
    { id: "c-1", type: "HACCP Daily Log", date: new Date().toISOString(), status: "Warning", score: "Deviation Detected" },
    { id: "c-2", type: "ISO 22000 Monthly", date: new Date(Date.now() - 86400000).toISOString(), status: "Approved", score: "94%" },
    { id: "c-3", type: "ESG Quarterly", date: new Date(Date.now() - 86400000*5).toISOString(), status: "Draft", score: "Pending" }
  ]
};
