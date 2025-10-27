export default function Footer() {
  return (
    <footer className="mt-20 border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} GCFX Pro. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm">
            <a href="#security" className="text-gray-600 hover:text-gray-900">Security</a>
            <a href="#features" className="text-gray-600 hover:text-gray-900">Features</a>
            <a href="#pricing" className="text-gray-600 hover:text-gray-900">Pricing</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
