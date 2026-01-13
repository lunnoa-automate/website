import fs from 'fs';
import path from 'path';

const releasesDirectory = path.join(process.cwd(), 'public', 'releases');

export function getReleasesList() {
  const filePath = path.join(releasesDirectory, 'releases.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const data = JSON.parse(fileContents);
  return data.releases;
}

export function getReleaseContent(version) {
  const releases = getReleasesList();
  const release = releases.find(r => r.version === version);
  
  if (!release) {
    return null;
  }

  const filePath = path.join(releasesDirectory, release.file);
  const content = fs.readFileSync(filePath, 'utf8');
  
  return {
    ...release,
    content,
  };
}

export function getAllReleaseVersions() {
  const releases = getReleasesList();
  return releases.map(release => ({
    version: release.version,
  }));
}
