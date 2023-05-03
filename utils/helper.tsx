import { config } from "@/lib/config";

export const frameImgUrl = (imgKey: string | undefined) => {
  if (imgKey) {
    let imageName = imgKey.replace(/-(?!.*-)/, ".").replace(/image-/g, "");
    return `https://cdn.sanity.io/images/${config.projectId}/${config.dataSet}/${imageName}`;
  }
};

export const frameVideoUrl = (imgKey: string | undefined) => {
  if (imgKey) {
    let imageName = imgKey.replace(/-(?!.*-)/, ".").replace(/file-/g, "");
    return `https://cdn.sanity.io/files/${config.projectId}/${config.dataSet}/${imageName}`;
  }
};
