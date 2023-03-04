import fs from 'fs';
import path from 'path';
import matter, { GrayMatterFile } from 'gray-matter';

export type PostMetaData = {
  title: string;
  date: string;
  summary: string;
  slug: string;
  draft: boolean;
  keywords: string;
  description: string;
};

const folder = path.join(process.cwd(), 'src', 'posts');

const getPostsMetadata = (): PostMetaData[] => {
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter(file => file.endsWith('.md'));

  // Get gray-matter data from each file.
  const posts = markdownPosts.map(fileName => {
    const fileContents = fs.readFileSync(path.join(folder, fileName), 'utf8');
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      summary: matterResult.data.summary,
      slug: fileName.replace('.md', ''),
      draft: matterResult.data.draft || true,
      keywords: matterResult.data.summary || '',
      description: matterResult.data.description || '',
    };
  });

  return posts;
};

const getPostContent = (slug: string): GrayMatterFile<string> => {
  const file = path.join(folder, slug) + '.md';
  const content = fs.readFileSync(file, 'utf8');
  const matterResult = matter(content);
  return matterResult;
};

export { getPostsMetadata, getPostContent };
