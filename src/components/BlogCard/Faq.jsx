import React, { useState } from "react";
import '../Packs/css/PackFaq.css'
import { useParams } from "react-router";
import { BlogData } from "./Data";

const AccordionItem = ({ title, content, expanded, onClick }) => {
  return (
    <div className="pack-accordion-item-faq ">
      <button aria-expanded={expanded} onClick={onClick}>
        <span className="pack-accordion-title-faq ">{title}</span>
        <span className="pack-icon-faq " aria-hidden="true"></span>
      </button>
      <div
        className="pack-accordion-content-faq"
        style={{
          opacity: expanded ? 1 : 0,
          maxHeight: expanded ? "15em" : 0,
          transition: "opacity 0.3s ease, max-height 0.3s ease",
        }}
      >
        <p>{content}</p>
      </div>
    </div>
  );
};

const Accordion = ({ items }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleAccordion = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="pack-accordion-faq md:mx-6 mx-2">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          expanded={expandedIndex === index}
          onClick={() => toggleAccordion(index)}
        />
      ))}
    </div>
  );
};

const BlogFaq = () => {
  const { topic } = useParams();

  const blogIndex = parseInt(topic?.split("_")[1]);

  const faqItems = BlogData[blogIndex - 1].faqItems;

  return (
    <div className="pack-container-faq my-12 mx-auto">
      <h2 className="text-center gradient-text2 text-13xl font-bold ">
        Frequently Asked Questions (FAQs)
      </h2>
      <Accordion items={faqItems} />
    </div>
  );
};

export default BlogFaq;
