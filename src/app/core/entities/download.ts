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
