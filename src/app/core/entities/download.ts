export interface Download {
  availableFormats: Array<{
    url: string;
    mimeType: string;
    width: number;
    height: number;
    quality: string;
  }>;
  info: {
    description: string;
    flashUrl: string;
    lengthSeconds: string;
    title: string;
    thumbnails: Array<{
      height: number;
      url: string;
      width: number;
    }>;
  };
}

export class GenerateUrlForDownload {
  host: string;
  path: string;
  url: string;

  constructor({
    host,
    path,
    url,
  }: {
    host: string;
    path: string;
    url: string;
  }) {
    this.host = host;
    this.path = path;
    this.url = url;
  }
}
