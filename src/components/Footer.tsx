export function Footer() {
  return (
    <footer className="py-8 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-[#374151] dark:text-gray-300 text-sm font-medium">
          © {new Date().getFullYear()} Sahil Raja. All rights reserved.
        </p>
        <div className="flex items-center gap-6 text-sm font-medium text-[#374151] dark:text-gray-200">
          <a href="#" className="hover:text-[#166534] transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-[#166534] transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
