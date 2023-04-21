import React, { useState } from "react";
import { FaqsContaier } from "./Faqs.styles";
import FaqItem from "./FaqItem";

const faqData: { title: string; description: string[] }[] = [
  {
    title: "What services does your company offer?",
    description: [
      "Our company specializes in website development and digital product sales. We offer a range of services including custom website design and development, e-commerce website development, digital product sales, and ongoing website maintenance and support.",
    ],
  },
  {
    title: "What is the process for developing a website with your company?",
    description: [
      "Our website development process typically involves the following steps: ",
      "1. Initial consultation to understand your requirements and expectations",
      "2. Development of a detailed project plan and timeline ",
      "3. Design and development of the website, with regular check-ins and progress updates ",
      "4. Final review and testing of the website ",
      "5. Launch of the website",
      "6. Ongoing maintenance and support as needed.",
    ],
  },
  {
    title: "What is included in your website development packages?",
    description: [
      "Our website development packages typically include custom website design, development of the website, and ongoing maintenance and support. Additional services such as e-commerce functionality, search engine optimization (SEO), and website hosting can also be included as part of the package.",
    ],
  },
  {
    title: "What is your process for selling digital products?",
    description: [
      "Our process for selling digital products involves offering a range of high-quality products for sale on our website. Customers can easily browse and purchase products online, and receive the product quickly and securely through electronic delivery.",
    ],
  },
  {
    title:
      "What is your pricing for website development and digital product sales services?",
    description: [
      "Our pricing for website development and digital product sales services varies depending on the specific requirements and needs of each project. We offer competitive pricing and are happy to provide a personalized quote for your project.",
    ],
  },
  {
    title: "How do I get started with your services?",
    description: [
      "To get started with our services, simply get in touch with us to schedule an initial consultation. During this consultation, we'll discuss your specific needs and requirements, and provide a personalized quote for your project.",
    ],
  },
  {
    title: "Can you build a product from an idea stage?",
    description: [
      "Yes, we can build a product from an idea stage. Our team of experts can help bring your vision to life, starting with a consultation to understand your idea and requirements, followed by research and development, design, and finally the launch of the product. We offer a full suite of services to bring your product from concept to reality",
    ],
  },
];

const Faqs = () => {
  const [selected, setSelected] = useState<number | null>(null);

  const toggle = (i: number) => {
    if (selected === i) {
      return setSelected(null);
    }

    setSelected(i);
  };

  console.log(selected);
  return (
    <FaqsContaier>
      {faqData.map((item, index) => (
        <FaqItem
          key={index}
          clickfn={() => toggle(index)}
          title={item.title}
          indexNo={index}
          description={item.description}
          selected={selected}
        />
      ))}
    </FaqsContaier>
  );
};

export default Faqs;
