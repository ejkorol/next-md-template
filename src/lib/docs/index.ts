import path from "path";
import fs from "fs";
import matter from "gray-matter";

const readMarkdownFile = (
  filePath: string,
): { metaData: Record<string, any>; content: string } => {
  let rawContent = fs.readFileSync(filePath, "utf8");
  const { data: metaData, content } = matter(rawContent);
  return { metaData, content };
};

const getMarkdownFilesRecursively = (dir: string): string[] => {
  let results: string[] = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results = results.concat(getMarkdownFilesRecursively(fullPath));
    } else if (entry.isFile() && path.extname(entry.name) === ".md") {
      results.push(fullPath);
    }
  }
  return results;
};

const getMarkdown = (dir: string) => {
  let files = getMarkdownFilesRecursively(dir);
  return files.map((file) => {
    let { metaData, content } = readMarkdownFile(file);

    let relativePath = path.relative(dir, file);
    let parentDir = path.dirname(relativePath);
    let slug =
      parentDir === "." ? path.basename(file, path.extname(file)) : parentDir;

    return {
      metaData,
      slug,
      content,
    };
  });
};

export const getDocs = () => {
  const md = getMarkdown(
    path.join(process.cwd(), "src", "app", "docs", "content"),
  );
  return md;
};
