import { axioData, files, jsonResp } from "./types";
import axios from "axios";
import { linguist } from "@sourcebin/linguist";

export const BinCreate = async (
  title: string | undefined,
  description: string | undefined,
  language: string | undefined,
  files: files[],
) => {
  if (files.length < 1) throw new Error("No files provided");
  if (files.length > 1) throw new Error("Too many files provided, consider using srcShare instead");
  if (!language) language = "javascript";
  if (!title) title = "Untitled";
  if (!description) description = "No description provided";
  const data: axioData = {
    title: title,
    description: description,
    files: [],
  };
  for (const file of files) {
    const languageID = retrieveLanguageID(file.languageId || language);
    data.files.push({
      name: file.name,
      content: file.content,
      languageId: languageID,
    });
  }
  const response = await axios("https://sourceb.in/api/bins", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  });
  if (response.status !== 200) throw new Error("Error creating sourcebin");
  const json = <jsonResp>response.data;
  return json.key;
};

export const BinGet = async (id: string) => {
  const response = await axios(`https://sourceb.in/api/bins/${id}`);
  const json = response.data;
  for (let x = 0; x < json.files.length; x++) {
    const content = await axios(`https://cdn.sourceb.in/bins/${json.key}/${x}`);
    if (content.status !== 200) throw new Error("Error getting src-share content");
    json.files[x].content = content.data;
  }
  if (response.status !== 200) throw new Error("Error getting src-share data");
  return response.data;
};

const retrieveLanguageID = (language: string) => {
  for (const [key, value] of Object.entries(linguist)) {
    if (
      value.name.toLowerCase() == language.toLowerCase() ||
      value.aliases?.map((alias) => alias.toLowerCase()).includes(language.toLowerCase())
    )
      return key;
  }
  throw new Error(`Language ${language} is not supported.`);
};
