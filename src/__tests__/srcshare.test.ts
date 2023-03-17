import { SRCreate, SRGet } from "../index";
test("creator1", async () => {
  const resp = await SRCreate("srcShare", {
    title: "Test",
    description: "JEST TEST ONE",
    language: "javascript",
    files: [{ name: "code", content: "test" }],
  });
  expect(resp).toBeDefined();
});

test("creator2", async () => {
  const resp = <string> await SRCreate("srcShare", {
    title: "Test2",
    description: "JEST TEST TWO",
    language: "javascript",
    files: [
      { name: "code", content: "test" },
      { name: "code2", content: "test2" },
    ],
  });
  const getter = await SRGet("srcShare", resp);
  expect(getter.title).toBe("Test2");
  expect(resp).toBeDefined();
});

test("creator3", async () => {
  const resp = await SRCreate("srcShare", {
    files: [
      { name: "code", content: "test" },
      { name: "code2", content: "test2" },
    ],
  });
  expect(resp).toBeDefined();
});

test("creator4ERROR", async () => {
  try {
    await SRCreate("srcShare", {
      language: "notalanguage",
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
