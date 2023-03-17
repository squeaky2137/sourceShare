interface createOptions {
  title?: string;
  description?: string;
  language?: string;
  files: files[];
}

interface files {
  name: string;
  content: string;
  languageId?: string;
}

interface jsonResp {
  id?: string;
  key?: string;
}

interface language {
  name: string;
  color: string;
  extension: string;
  aliases?: string[];
  aceMode: string;
}

interface axioData {
  title: string;
  description: string;
  files: files[];
}

export { files, jsonResp, createOptions, language, axioData };
