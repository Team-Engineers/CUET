import React, { useState } from 'react';
import '../Packs/css/PackFaq.css';

const AccordionItem = ({ title, content, expanded, onClick }) => {
    return (
        <div className="pack-accordion-item-faq ">
            <button
                aria-expanded={expanded}
                onClick={onClick}
            >
                <span className="pack-accordion-title-faq ">{title}</span>
                <span className="pack-icon-faq " aria-hidden="true"></span>
            </button>
            <div
                className="pack-accordion-content-faq"
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
        <div className="pack-accordion-faq md:mx-6 mx-2" >
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

const PackFaq = () => {
    const faqItems = [
        {
            title: 'What are CUET Testknock Packs?',
            content: 'Testknock Packs offer exclusive membership plans that grant access to various features available on the CUET Testknock platform. These packs unlock prep modules, practice tests, and mock exams provided on the website.'
        },
        {
            title: 'When will my Pack expire?',
            content: 'Each pack has a validity period of one year, which you can conveniently verify through your profile dashboard.'
        },
        {
            title: 'Will I be able to access CUET Testknock prep modules, practice test and mock test after my Pack expires?',
            content: "No, You won't be able to access the prep modules, practice test and mock test after your Pack expires. To access the same, you will have to renew the respective Pack."
        },
        {
            title: 'What happens if I renew the Pack before the expiry date?',
            content: 'If you renew the Pack before the expiry date, the duration of Pack simply gets added to the remaining days in your currently active Pack.'
        },
        {
            title: 'How can I renew my Testknock Pack?',
            content: 'You have the flexibility to renew your Testknock Pack at any time, just as you initially purchased it. Simply navigate to the Pricing page to view available packs and complete the renewal process.'
        },
        {
            title: 'I do not have online payment activated, can I use any other mode for payment?',
            content: 'You can use your Debit card, ATM card, Credit card, Netbanking account or payment wallets like Paytm to pay for the package.'
        },
        {
            title: 'Will I get the refund if I want to stop using it before the Pack expiry?',
            content: 'Once payment is made for a pack purchase, it is considered final and refund regarding the same cannot be initiated.'
        },
        {
            title: 'How can I apply for the refund?',
            content: 'You cannot apply for refund once the payment is done as all transactions done on Testknock platform are non refundable.'
        },
        {
            title: 'Can I share my Testknock account with my friend/relative?',
            content: 'No, You can not share your account with anyone. If you do so, Our systems will detect it and block your account immediately.'
        },
    ];

    return (
        <div className="pack-container-faq max-w-full my-12 mx-auto">
            <h2 className='text-center gradient-text2 text-13xl font-bold '>Frequently Asked Questions (FAQs)</h2>
            <Accordion items={faqItems} />
        </div>
    );
};

export default PackFaq;
