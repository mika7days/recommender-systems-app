import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { FaCopy } from "react-icons/fa";

const CodeSnippetWithCopy = ({ code }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="lg:w-[80%]">
      <div className="relative">
        {copied ? (
          <FaCheck className="text-4xl mr-4 absolute top-2 right-0 py-2 text-black dark:text-white" />
        ) : (
          <FaCopy
            onClick={handleCopy}
            className="text-4xl mr-4 absolute cursor-copy top-2 right-0 py-2  text-black hover:text-gray-700 dark:text-white focus:outline-none"
          />
        )}
      </div>

      <div className="border border-[#656464] rounded-xl px-7 bg-[#edecec] dark:bg-[#374151] lg:mt-6 mt-6 text-sm font-mono">
        <pre className="overflow-auto mr-7">{code}</pre>
      </div>
    </div>
  );
};

export default CodeSnippetWithCopy;
