export const Footer = () => {
  return (
    <footer className="py-12 bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className=" flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Lagride. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-sm hover:text-[#4096FF] transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-sm hover:text-[#4096FF] transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-sm hover:text-[#4096FF] transition-colors"
            >
              Support
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
