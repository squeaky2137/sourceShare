import { SRCreate, SRGet } from "../index";
test("creator1", async () => {
  const resp = await SRCreate("sourceBin", {
    title: "Test",
    description: "JEST TEST ONE",
    language: "javascript",
    files: [{ name: "code", content: "test" }],
  });
  expect(resp).toBeDefined();
});

test("creator2", async () => {
  const resp = <string> await SRCreate("sourceBin", {
    title: "Test2",
    description: "JEST TEST TWO",
    files: [{ name: "code", content: "trolololololol", languageId: "javascript" }],
  });
  const getter = await SRGet("sourceBin", resp);
  console.log(getter);
  expect(getter.title).toBe("Test2");
  expect(resp).toBeDefined();
});

test("creator3", async () => {
  const resp = await SRCreate("sourceBin", {
    files: [{ name: "code", content: "test" }],
  });
  expect(resp).toBeDefined();
});

test("creator4ERROR", async () => {
  try {
    await SRCreate("sourceBin", {
      language: "rust",
      files: [
        { name: "code", content: "test" },
        { name: "code2", content: "test2" },
      ],
    });
    expect(true).toBe(false);
  } catch (e) {
    expect(e).toBeDefined();
  }
});
