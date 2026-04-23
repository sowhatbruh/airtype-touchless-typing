export const DOWNLOAD_URL =
  "https://github.com/sowhatbruh/airtype-touchless-typing/releases/download/v1.0/AirType.exe";

export const triggerDownload = (e?: { preventDefault: () => void }) => {
  e?.preventDefault();
  // Direct navigation — browser follows GitHub's redirect to the asset CDN
  // which serves it with Content-Disposition: attachment, so it downloads
  // without leaving the page.
  window.location.href = DOWNLOAD_URL;
};