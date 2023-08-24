"use client";
import SliderTabs from "@/components/SliderTabs";
export default function SliderTabsPage() {
  const exampleContent = [
    {
      title: "London",
      content: <p>London is the capital of England.</p>,
    },
    {
      title: "Paris",
      content: <p>Paris is the capital of France.</p>,
    },
    {
      title: "Tokyo",
      content: <p>Tokyo is the capital of Japan.</p>,
    },
    {
      title: "New York",
      content: <p>New York is a major city in the United States.</p>,
    },
    {
      title: "Sydney",
      content: <p>Sydney is the largest city in Australia.</p>,
    },
  ];
  return <SliderTabs content={exampleContent}></SliderTabs>;
}
