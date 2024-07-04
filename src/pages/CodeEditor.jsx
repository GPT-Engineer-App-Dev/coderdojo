import React, { useState } from "react";
import Editor from "@monaco-editor/react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const CodeEditor = () => {
  const [code, setCode] = useState("// Write your code here");
  const [output, setOutput] = useState("");

  const runCode = () => {
    try {
      // Basic code execution for JavaScript
      // For other languages, you would need a backend service or a library like Pyodide for Python
      const result = eval(code);
      setOutput(result.toString());
    } catch (error) {
      setOutput(error.toString());
    }
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Code Editor</h1>
      <Editor
        height="60vh"
        defaultLanguage="javascript"
        defaultValue="// Write your code here"
        onChange={(value) => setCode(value)}
      />
      <Button onClick={runCode}>Run Code</Button>
      <div className="mt-4">
        <h2 className="text-2xl font-semibold">Output</h2>
        <pre className="p-4 bg-gray-100 rounded">{output}</pre>
      </div>
    </div>
  );
};

export default CodeEditor;