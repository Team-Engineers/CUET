import React, { useState } from 'react';
import './faq.css';

const AccordionItem = ({ title, content, expanded, onClick }) => {
    return (
        <div className="accordion-item-faq ">
            <button
                aria-expanded={expanded}
                onClick={onClick}
            >
                <span className="accordion-title-faq ">{title}</span>
                <span className="icon-faq " aria-hidden="true"></span>
            </button>
            <div
                className="accordion-content-faq"
                style={{
                    opacity: expanded ? 1 : 0,
                    maxHeight: expanded ? '15em' : 0,
                    transition: 'opacity 0.3s ease, max-height 0.3s ease',
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
        <div className="accordion-faq">
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

const FrequentlyAskedQuestions = () => {
    const faqItems = [
        {
            title: 'We have heard from past year students that filling forms along with preference sheet for CUET is very technical. Is it true ?',
            content: 'It is not true, however adequate inputs and knowledge shall ensure no error in filling of form. For any help / information, feel free to get in touch with the Team at TESTKNOCK'
        },
        {
            title: 'When is CUET in 2024?',
            content: 'The NTA has announced the exam dates for CUET 2024. The CUET 2024 is set to take place from May 15th to May 31st, 2024.'
        },
        {
            title: 'Can I make corrections to my CUET application after submission?',
            content: 'The correction window for CUET applications is typically limited. Please refer to the official CUET website for information on correction periods, if available.'
        },
        {
            title: 'When will CUET 2024 admit cards be released?',
            content: 'Admit cards for CUET 2024 will be available for download on the official website a few weeks before the exam date.Keep a check on the website for updates and notifications.'
        },
        {
            title: 'What is the exam pattern for CUET 2024?',
            content: 'The exam pattern for CUET 2024 includes sections on mathematics, physics, chemistry, and biology.Refer to the official CUET website or the exam brochure for detailed information on the exam pattern and syllabus.'
        }
    ];

    return (
        <div className="container-faq max-w-[1280px] mx-auto">
            <h2 className='text-center gradient-text2 text-13xl font-bold '>Frequently Asked Questions (FAQs)</h2>
            <Accordion items={faqItems} />
        </div>
    );
};

export default FrequentlyAskedQuestions;
