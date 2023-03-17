# srcbin
![](https://img.shields.io/npm/l/srcbin)

![](https://img.shields.io/static/v1?label=Developer&message=Squeaky2137&color=blue&style=for-the-badge)



# Install

```
npm install srcbin
```


# Setup

```js
// Import methods
import { SRCreate, SRget } from 'srcbin';


// Use required
const { SRCreate, SRget } = require('srcbin');
```

# Creating a bin

`SRCreate(method, options)`

*srcShare*
```js
const key = await SRCreate("srcShare", {
  title: "srcShare",
  description: "srcShare Bin",
  language: "javascript",
  files: [
    { name: "file1", content: "content" },
    { name: "file2", content: "content2" },
  ],
});
```

*sourceBin*
```js
const key = await SRCreate("sourceBin", {
  title: "sourceBin",
  description: "sourceBin Bin",
  files: [{ name: "file", content: "content", languageId: "javascript" }],
});
```

## Options

| Option        | Description                            | Default      | Required | srcShare | sourceBin | 
|---------------|----------------------------------------|--------------|----------|----------|-----------|
| `title`       | The title of the Bin                   | `undefined`  | ❌        | ✅        | ✅         |
| `description` | The description of the Bin             | `undefined`  | ❌        | ✅        | ✅         |
| `language`    | The language of the entire bin         | `javascript` | ❌        | ✅        | ❌         |
| `file`        | The files in the bin - *options below* | n/a          | ✅        | ✅        | ✅         |

### File Options

| Option     | Description                      | Default   | Required | srcShare | sourceBin |
|------------|----------------------------------|-----------|----------|----------|-----------|
| `name`     | Name of the file                 | undefined | ❌        | ✅        | ✅         |
| `content`  | Contents of the file             | n/a       | ✅        | ✅        | ✅         |
| `language` | What language should the file be | `text`    | ❌        | ❌        | ✅         |


# Getting a bin

`SRget(method, options)`

*srcShare*
```js
const bin = await SRget("srcShare", { key: "6413e41aff7ba5ec61153e4c" });
```
```json
{
  "_id": "6413e41aff7ba5ec61153e4c",
  "tabs": [
    { "name": "file1", "content": "context1", "_id": "6413e41aff7ba5ec61153e4d" },
    {
      "name": "file2",
      "content": "context2",
      "_id": "6413e41aff7ba5ec61153e4e"
    }
  ],
  "language": "javascript",
  "title": "srcShare",
  "description": "srcShare Bin",
  "expires": "2023-03-24T03:52:58.665Z",
  "__v": 0
}
```
*sourceBin*
```js
const bin = await SRget("sourceBin", { key: "2wVSfa7tuF"})
```
```json
{
  "hits": 1,
  "_id": "6413e417980ab20018e4b069",
  "key": "2wVSfa7tuF",
  "title": "sourceBin",
  "description": "sourceBin Bin",
  "files": [ { "name": "file", "languageId": 183, "content": "context" } ],
  "created": "2023-03-17T03:52:55.690Z"
}
```



# FAQ

-   ## Multiple files in one bin

    To use multiple files in one bin you need to use srcShare as the method


# Support

-   Join the [discord](https://discord.gg/QBaqEZD3t3)
-   Create an issue on the [GitHub](https://github.com/squeaky2137/srcbin/issues)