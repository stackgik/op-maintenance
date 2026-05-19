import { TrendingUp, Users, MapPin, Star } from "lucide-react";

const stats = [
  {
    icon: TrendingUp,
    value: "2.5M+",
    label: "Total Rides",
    gradient: "from-[#4096FF] to-[#2575e8]",
  },
  {
    icon: Users,
    value: "50K+",
    label: "Active Drivers",
    gradient: "from-blue-500 to-blue-600",
  },
  {
    icon: MapPin,
    value: "25+",
    label: "Cities",
    gradient: "from-purple-500 to-purple-600",
  },
  {
    icon: Star,
    value: "4.8",
    label: "Average Rating",
    gradient: "from-amber-500 to-amber-600",
  },
];

export const StatsSection = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {stats.map((stat) => (
        <div key={stat.label} className="text-center group">
          <div className="flex justify-center mb-4">
            <div
              className={`p-4 rounded-2xl bg-linear-to-br ${stat.gradient} transform group-hover:scale-110 transition-transform duration-300`}
            >
              <stat.icon className="w-5 h-5 text-white" />
            </div>
          </div>
          <div className="text-3xl md:text-4xl mb-2 text-gray-900">
            {stat.value}
          </div>
          <div className="text-gray-600">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};
