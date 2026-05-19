import { DriverGuide } from "./DriverGuide";

export function DriverGuideSection() {
  return (
    <section
      id="driver-guide"
      className="py-20 bg-linear-to-br from-blue-50 via-white to-purple-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm mb-4">
            For Drivers
          </div>
          <h2 className="mb-4 text-gray-900">How to Use Lagride Driver App</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Start earning with Lagride. Follow these simple steps to begin your
            journey as a driver partner.
          </p>
        </div>
        <DriverGuide />
      </div>
    </section>
  );
}
