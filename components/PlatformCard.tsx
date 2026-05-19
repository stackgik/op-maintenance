import { ExternalLink, LucideIcon } from "lucide-react";

interface PlatformCardProps {
  title: string;
  url: string;
  icon: LucideIcon;
  description: string;
}

export function PlatformCard({
  title,
  url,
  icon: Icon,
  description,
}: PlatformCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex flex-col p-6 bg-white rounded-xl border border-gray-200 hover:border-[#4096FF] transition-all duration-300"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="p-3 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors">
          <Icon className="w-6 h-6 text-[#4096FF]" />
        </div>
        <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-[#4096FF] transition-colors" />
      </div>
      <h3 className="mb-2 text-gray-900">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </a>
  );
}
