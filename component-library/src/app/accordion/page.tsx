import Accordion from "@/components/AnimatedAccordion";
import Navbar from "../../components/Navbar"

export default function AccordionPage({
    children,
  }: {
    children: React.ReactNode;
  }) {
    const exampleItemArr = [
      {
        title: 'Title',
        body: 'body body body'
      },
      {
        title: 'Title',
        body: 'body body body'
      },
      {
        title: 'Title',
        body: 'body body body'
      },
      {
        title: 'Title',
        body: 'body body body'
      },
    ]
    return (
      <>
      <Accordion items={exampleItemArr}/>
      </>
    )
  }