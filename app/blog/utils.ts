import fs from 'node:fs';
import path from 'node:path';

type Metadata = {
  title: string;
  publishedAt: string;
  summary: string;
  tags: string[];
  image?: string;
};

function parseFrontmatter(fileContent: string) {
  const frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
  const match = frontmatterRegex.exec(fileContent);
  const frontMatterBlock = match?.[1];
  const content = fileContent.replace(frontmatterRegex, '').trim();
  const frontMatterLines = frontMatterBlock.trim().split('\n');
  const metadata: Partial<Metadata> = {};

  for (const line of frontMatterLines) {
    const [key, ...valueArr] = line.split(': ');
    let value: string | string[] = valueArr.join(': ').trim();
    value = value.replace(/^['"](.*)['"]$/, '$1');
    if (key.trim() === 'tags') {
      value = value
        .replace(/^\[(.*)\]$/, '$1')
        .split(',')
        .map((tag) => tag.trim().replace(/^['"](.*)['"]$/, '$1'))
        .filter((tag) => tag.length > 0);
      if (value.length === 1 && value[0] === '') {
        value = [];
      }
      metadata[key.trim()] = value as string[];
    } else {
      metadata[key.trim()] = value as string;
    }
  }

  return { metadata: metadata as Metadata, content };
}

function getMDXFiles(dir: string) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === '.mdx');
}

function readMDXFile(filePath: string) {
  const rawContent = fs.readFileSync(filePath, 'utf-8');
  return parseFrontmatter(rawContent);
}

function getMDXData(dir: string) {
  const mdxFiles = getMDXFiles(dir);
  return mdxFiles.map((file) => {
    const { metadata, content } = readMDXFile(path.join(dir, file));
    const slug = path.basename(file, path.extname(file));

    return {
      metadata,
      slug,
      content,
    };
  });
}

export function getBlogPosts() {
  return getMDXData(path.join(process.cwd(), 'app', 'blog', 'posts'));
}

export function formatDate(date: string, includeRelative = false) {
  const currentDate = new Date();
  let formattedDateStr = date;
  if (!formattedDateStr.includes('T')) {
    formattedDateStr = `${formattedDateStr}T00:00:00`;
  }
  const targetDate = new Date(formattedDateStr);

  const yearsAgo = currentDate.getFullYear() - targetDate.getFullYear();
  const monthsAgo = currentDate.getMonth() - targetDate.getMonth();
  const daysAgo = currentDate.getDate() - targetDate.getDate();

  let formattedDate = '';

  if (yearsAgo > 0) {
    formattedDate = `${yearsAgo}y ago`;
  } else if (monthsAgo > 0) {
    formattedDate = `${monthsAgo}mo ago`;
  } else if (daysAgo > 0) {
    formattedDate = `${daysAgo}d ago`;
  } else {
    formattedDate = 'Today';
  }

  const fullDate = targetDate.toLocaleString('en-us', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  if (!includeRelative) {
    return fullDate;
  }

  return `${fullDate} (${formattedDate})`;
}
