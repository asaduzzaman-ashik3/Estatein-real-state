interface StatCardProps {
  value: string;
  label: string;
}

function StatCard({ value, label }: StatCardProps) {
  return (
    <div className="flex-1 bg-[#1A1A1A] border-2 border-[#262626] rounded-lg px-6 py-4">
      <h1 className="text-[40px]">{value}</h1>
      <p className="text-gray-600 text-md">{label}</p>
    </div>
  );
}

export default function HeroStatsCardSection() {
  const stats: StatCardProps[] = [
    { value: "200+", label: "Happy Customers" },
    { value: "150+", label: "Projects Completed" },
    { value: "300+", label: "Clients Served" },
  ];

  return (
    <div className="flex items-center gap-4">
      {stats.map((stat) => (
        <StatCard key={stat.label} {...stat} />
      ))}
    </div>
  );
}
