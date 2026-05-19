import { AppTutorial } from "./AppTutorial";

export function RiderGuideSection() {
  return (
    <section id="rider-guide" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-blue-100 text-[#4096FF] rounded-full text-sm mb-4">
            For Riders
          </div>
          <h2 className="mb-4 text-gray-900">How to Use Lagride Rider App</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get where you need to go in just a few taps. Here's how to book your
            first ride.
          </p>
        </div>
        <AppTutorial />
      </div>
    </section>
  );
}
