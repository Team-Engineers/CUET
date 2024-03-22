import React from "react";
import { MathComponent } from "mathjax-react";

export const MathText = ({ text, textTag = "p" }) => {
  const TextTag = textTag || "p";

  if (typeof text !== "string") {
    text = text.toString();
  }
  text = text.trim();

  const parts = text.split(/\n/);

  const jsxElements = parts.flatMap((part, index) => {
    const hasMathExpression = /\$.+?\$/.test(part);

    const hasHTMLTags = /<.*?>/.test(part);

    if (hasMathExpression) {
      const subparts = part.split(/\$(.*?)\$/);

      return subparts
        .map((subpart, subIndex) => {
          if (subIndex % 2 !== 0) {
            return (
              <MathComponent
                key={`${index}_${subIndex}`}
                tex={subpart}
                display={false}
                className="math-expression"
              />
            );
          } else {
            return <span key={`${index}_${subIndex}`}>{subpart}</span>;
          }
        })
        .concat(<div key={`br_${index}`}  />);
    } else if (hasHTMLTags) {
      return [
        <TextTag
          key={`html_${index}`}
          className="text-spacing"
          dangerouslySetInnerHTML={{ __html: part }}
        />,
        <div key={`br_${index}`}  />,
      ];
    } else {
      return [
        <span key={index}>{part}</span>,
        <div key={`br_${index}`}  />,
      ];
    }
  });

  return <TextTag className="text-spacing">{jsxElements}</TextTag>;
};
