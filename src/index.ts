import { ShareGet, ShareCreate } from "./SRCshare";
import { BinGet, BinCreate } from "./SourceBin";
import { createOptions } from "./types";

const SRCreate = async (method: "srcShare" | "sourceBin", options: createOptions) => {
  switch (method) {
    case "srcShare":
      return await ShareCreate(options.title, options.description, options.language, options.files);
    case "sourceBin":
      return await BinCreate(options.title, options.description, options.language, options.files);
    default:
      throw new Error("Invalid method");
  }
};

const SRGet = async (method: "srcShare" | "sourceBin", id: string) => {
  switch (method) {
    case "srcShare":
      return await ShareGet(id);
    case "sourceBin":
      return await BinGet(id);
    default:
      throw new Error("Invalid method");
  }
};

export { SRCreate, SRGet };
