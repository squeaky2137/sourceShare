import { files, jsonResp } from "./types";
import axios from "axios";
const languages = ["javascript", "java", "python", "ruby", "mysql", "json", "html", "go", "c#", "typescript", "css"];
export const ShareCreate = async (
  title: string | undefined,
  description: string | undefined,
  language: string | undefined,
  tabs: files[],
) => {
  if (!language) language = "javascript";
  if (!languages.includes(language.toLowerCase())) {
    throw Error(`Language ${language} is not supported. Supported languages are: ${languages.join(", ")}`);
  }
  const response = await axios("https://api.wornoffkeys.com/v1/srcshare", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: {
      title: title,
      description: description,
      language: language,
      tabs: tabs,
    },
  });
  if (response.status !== 200) throw new Error("Error creating src-share");
  const json = <jsonResp>response.data;
  return json.id;
};

export const ShareGet = async (id: string) => {
  const response = await axios(`https://api.wornoffkeys.com/v1/srcshare?id=${id}`);
  if (response.status !== 200) throw new Error("Error getting src-share data");
  return response.data;
};
