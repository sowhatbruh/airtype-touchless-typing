export const DOWNLOAD_URL =
  "https://github.com/sowhatbruh/airtype-touchless-typing/releases/download/v1.0/AirType.exe";

export const triggerDownload = async (e?: { preventDefault: () => void }) => {
  e?.preventDefault();
  try {
    const res = await fetch(DOWNLOAD_URL);
    if (!res.ok) throw new Error("fetch failed");
    const blob = await res.blob();
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "AirType.exe";
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  } catch {
    window.location.href = DOWNLOAD_URL;
  }
};