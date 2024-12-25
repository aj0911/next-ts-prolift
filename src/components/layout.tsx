import Link from 'next/link';
import { GithubIcon, TwitterIcon, LinkedinIcon } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
        <div className="flex min-h-screen">
          {/* Sidebar */}
          <aside className="w-64 bg-white border-r p-6 space-y-6">
            <div className="text-indigo-600 text-2xl font-bold">
              LOGO
            </div>
            
            <nav className="space-y-4">
              <Link href="/job-feed" className="block text-gray-600 hover:text-gray-900">
                Job Feed
              </Link>
              <Link href="/projects" className="block text-gray-900 font-medium border-b-2 border-gray-900">
                Projects
              </Link>
              <Link href="/communities" className="block text-gray-600 hover:text-gray-900">
                Communities
              </Link>
              <Link href="/assessments" className="block text-gray-600 hover:text-gray-900">
                Assessments
              </Link>
              <Link href="/profile" className="block text-gray-600 hover:text-gray-900">
                Profile
              </Link>
            </nav>
          </aside>

          {/* Main content */}
          <main className="flex-1 bg-gray-50">
            {children}
            
            {/* Footer */}
            <footer className="border-t bg-white p-6">
              <div className="container mx-auto flex justify-between items-center">
                <div className="space-x-6">
                  <Link href="/about" className="text-gray-600 hover:text-gray-900">
                    About
                  </Link>
                  <Link href="/contact" className="text-gray-600 hover:text-gray-900">
                    Contact
                  </Link>
                  <Link href="/privacy" className="text-gray-600 hover:text-gray-900">
                    Privacy
                  </Link>
                  <Link href="/terms" className="text-gray-600 hover:text-gray-900">
                    Terms
                  </Link>
                </div>
                <div className="flex space-x-4">
                  <Link href="https://github.com" className="text-gray-600 hover:text-gray-900">
                    <GithubIcon className="h-5 w-5" />
                  </Link>
                  <Link href="https://twitter.com" className="text-gray-600 hover:text-gray-900">
                    <TwitterIcon className="h-5 w-5" />
                  </Link>
                  <Link href="https://linkedin.com" className="text-gray-600 hover:text-gray-900">
                    <LinkedinIcon className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            </footer>
          </main>
        </div>
  );
}

