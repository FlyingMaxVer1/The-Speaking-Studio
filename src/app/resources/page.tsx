import type { Metadata } from 'next';
import ResourcesPageClient from './ResourcesPageClient';

export const metadata: Metadata = {
  title: 'Resources',
  description: 'Free guides, templates, workbooks, and reading lists from The Speaking Studio to support your learning journey.',
};

export default function ResourcesPage() {
  return <ResourcesPageClient />;
}
