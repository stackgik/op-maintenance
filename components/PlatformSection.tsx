import { Mail, Globe, Shield, BarChart3, Server } from "lucide-react";
import { PlatformCard } from "./PlatformCard";

const platforms = [
  {
    title: "Exmail",
    url: "https://exmail.qq.com/login",
    icon: Mail,
    description: "Access enterprise email and communication tools",
  },
  {
    title: "Lagride Pro",
    url: "https://www.lagridepro.com",
    icon: BarChart3,
    description: "Professional driver and fleet management dashboard",
  },
  {
    title: "Lagride Admin",
    url: "https://admin.lagride.ng/index.html",
    icon: Shield,
    description: "Administrative control panel for operations",
  },
  {
    title: "Huawei Cloud",
    url: "https://www.huaweicloud.com/intl/zh-cn",
    icon: Globe,
    description: "Cloud infrastructure and hosting services",
  },
  {
    title: "Analytics",
    url: "https://159.138.169.233:5601/app/login",
    icon: Server,
    description: "Real-time analytics and monitoring dashboard",
  },
];

export function PlatformSection() {
  return (
    <section id="platforms" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="mb-4 text-gray-900">Internal Platforms</h2>
          <p className="text-xl text-gray-600">
            Quick access to essential tools and systems
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {platforms.map((platform) => (
            <PlatformCard
              key={platform.title}
              title={platform.title}
              url={platform.url}
              icon={platform.icon}
              description={platform.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
