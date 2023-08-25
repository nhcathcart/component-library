import AccordionAny from "@/components/AccordionAny";
import { ReactSnippet } from "@/components/ReactSnippet";
import { examples } from "@/examples/text";

export default function AccordionPage({
    children,
  }: {
    children: React.ReactNode;
  }) {

    return (
      <>
      <ReactSnippet {...examples.accordionAny}/>
      
      </>
    )
  }