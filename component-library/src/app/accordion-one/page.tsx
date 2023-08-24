import AccordionOne from "@/components/AccordionOne";


export default function AccordionPage() {
    const exampleItemArr = [
      {
        title: 'Title',
        body: `The accordion, a captivating and multifaceted musical instrument, has woven its melodious charm across cultures and genres for centuries. With its distinct bellows-driven mechanism and unique timbre, the accordion has left an indelible mark on the world of music.

        Designed to harmonize the sounds of both wind and string instruments, the accordion's history dates back to the early 19th century. Its invention is often attributed to Sir Charles Wheatstone and Cyrill Demian, who independently devised mechanisms that harnessed the power of air pressure to produce mesmerizing notes. This innovation gave birth to the modern accordion, characterized by its flexible bellows, a series of buttons or keys, and a treasured soundboard.`
      },
      {
        title: 'Title',
        body: `The accordion, a captivating and multifaceted musical instrument, has woven its melodious charm across cultures and genres for centuries. With its distinct bellows-driven mechanism and unique timbre, the accordion has left an indelible mark on the world of music.

        Designed to harmonize the sounds of both wind and string instruments, the accordion's history dates back to the early 19th century. Its invention is often attributed to Sir Charles Wheatstone and Cyrill Demian, who independently devised mechanisms that harnessed the power of air pressure to produce mesmerizing notes. This innovation gave birth to the modern accordion, characterized by its flexible bellows, a series of buttons or keys, and a treasured soundboard.`
      },
      {
        title: 'Title',
        body: `The accordion, a captivating and multifaceted musical instrument, has woven its melodious charm across cultures and genres for centuries. With its distinct bellows-driven mechanism and unique timbre, the accordion has left an indelible mark on the world of music.

        Designed to harmonize the sounds of both wind and string instruments, the accordion's history dates back to the early 19th century. Its invention is often attributed to Sir Charles Wheatstone and Cyrill Demian, who independently devised mechanisms that harnessed the power of air pressure to produce mesmerizing notes. This innovation gave birth to the modern accordion, characterized by its flexible bellows, a series of buttons or keys, and a treasured soundboard.`
      },
      {
        title: 'Title',
        body: `The accordion, a captivating and multifaceted musical instrument, has woven its melodious charm across cultures and genres for centuries. With its distinct bellows-driven mechanism and unique timbre, the accordion has left an indelible mark on the world of music.

        Designed to harmonize the sounds of both wind and string instruments, the accordion's history dates back to the early 19th century. Its invention is often attributed to Sir Charles Wheatstone and Cyrill Demian, who independently devised mechanisms that harnessed the power of air pressure to produce mesmerizing notes. This innovation gave birth to the modern accordion, characterized by its flexible bellows, a series of buttons or keys, and a treasured soundboard.`
      },
    ]
    return (
      <>
      <AccordionOne items={exampleItemArr}/>
      </>
    )
  }