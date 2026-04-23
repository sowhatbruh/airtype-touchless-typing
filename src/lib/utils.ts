import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const windowsDownloadUrl =
  "https://github.com/sowhatbruh/airtype-touchless-typing/releases/download/v1.0/AirType.exe";

export const windowsDownloadFilename = "AirType.exe";

export async function downloadAsset(url: string, filename: string) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Download failed: ${response.status} ${response.statusText}`);
    }

    const blob = await response.blob();
    const objectUrl = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = objectUrl;
    anchor.download = filename;
    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();
    URL.revokeObjectURL(objectUrl);
  } catch (error) {
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.target = "_blank";
    anchor.rel = "noreferrer noopener";
    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();
  }
}
