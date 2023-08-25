import AccordionAny from "@/components/AccordionAny";
import AccordionOne from "@/components/AccordionOne";
import HorizontalCard from "@/components/HorizontalCard";
import ModalButton from "@/components/ModalButton";
import SliderTabs from "@/components/SliderTabs";
import Tabs from "@/components/Tabs";
import VerticalCard from "@/components/VerticalCard";
import { ReactElement } from "react";

interface Example {
  title: string;
  description: string;
  example: ReactElement;
  TSX: string;
  CSS: string;
}
interface ExampleCollection {
  [key: string]: Example;
}
const cardProducts = [
  {
      title: `Nikes`,
      image: `/images/StockImages/jay-nuetey-EIYUYEu68Uk-unsplash.jpg`,
      description: `For the sneaker heads out there`
  },
  {
      title: `Jeans & Sunnies`,
      image: `/images/StockImages/ankita-bhattacharya-8jknGKPENCY-unsplash.jpg`,
      description: `Sunshine and denim FTW`
  },
  {
      title: `More Nikes`,
      image: `/images/StockImages/jay-nuetey-uOufXd_8boE-unsplash.jpg`,
      description: `For the sneaker heads out there`
  },
  {
      title: `Coat`,
      image: `images/StockImages/tamara-schipchinskaya-YDxW47w8ANg-unsplash.jpg`,
      description: `Stay cozy my friends`
  },

]
const tabsContent = [
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
const accorionItems = [
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
export const examples = {
  accordionAny: {
    title: "accordion",
    description: `This is an accordion that allows any number of sections to be open at once.`,
    example: <AccordionAny items={accorionItems}/>,
    TSX: `
    "use client";
    import { ReactNode, useState } from "react";
    import { motion } from "framer-motion";
    import styles from "./AccordionAny.module.css";
    
    export interface Props {
      items: AccItem[];
    }
    export interface AccItem {
      title: string;
      body: ReactNode;
    }
    export default function AccordionAny({ items }: Props) {
      const itemList = items.map((item, index) => {
        return (
          <AccordionItem
            title={item.title}
            body={item.body}
            key={\`\${item.title}-\${index}\`}
          />
        );
      });
      return <div className={styles.accordionContainer}>{itemList}</div>;
    }
    
    function AccordionItem({ title, body }: AccItem) {
      const [expanded, setExpanded] = useState(false);
      const handleClick = () => setExpanded(!expanded);
    
      return (
        <div className={styles.accordionItemContainer}>
          <button
            className={styles.accordionButton}
            onClick={() => handleClick()}
            style={{
              backgroundColor: expanded ? "#f1787e" : "#fff",
              color: expanded ? "white" : "black",
            }}
          >
            <div>{title}</div>
            <div>
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth=".5"
                stroke="currentColor"
                width="1.8rem"
                height="1.8rem"
                animate={{
                  rotate: expanded ? 180 : 0,
                }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </motion.svg>
            </div>
          </button>
          <motion.div
            className={styles.accordionBody}
            initial={{
              height: expanded ? "auto" : "0px",
            }}
            animate={{
              height: expanded ? "auto" : "0px",
            }}
            transition={{ type: "linear"}}
          >
            {body}
          </motion.div>
        </div>
      );
    }
    `,
    CSS: `
    .accordionContainer {
      display: flex;
      flex-direction: column;
      width: 100%;
      background-color: white;
      border-radius: 10px;
      padding: 2rem;
      box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    }
    .accordionItemContainer{
      display: flex;
      flex-direction: column;
      width: 100%;
      align-items: center;
      padding: 0.5rem;
      background-color: inherit;
      border: 1px #ccc solid;
      border-radius: 5px;
    }
    .accordionButton {
      display: flex;
      width: 100%;
      font: inherit;
      height: fit-content;
      justify-content: space-between;
      align-items: center;
      padding: 0.5rem;
      background-color: inherit;
      border: none;
      border-radius: 5px;
    }
    .accordionBody {
      display: flex;
      flex-direction: column;
      overflow: hidden;
      width: 100%;
    }
    .svg-button-icon {
      width: 1rem;
      height: 1rem;
      display: inline;
      vertical-align: middle;
    }
    
    @media (min-width: 768px) {
      /* Adjust the breakpoint as needed */
      .accordionContainer{
        width: 50%;
      }
      }
    `,
  },
  accordionOne: {
    title: "accordion",
    description: `This is an accordion that allows only one section to be open at once.`,
    example: <AccordionOne items={accorionItems}/>,
    TSX: `
    "use client";
    import { ReactNode, useState } from "react";
    import { motion } from "framer-motion";
    import styles from "./AccordionOne.module.css";
    
    export interface Props {
      items: AccItemOuter[];
    }
    export interface AccItemOuter {
      title: string;
      body: ReactNode;
    }
    export interface AccItem {
      title: string;
      body: ReactNode;
      index: number;
      expanded: boolean;
      expandFunc: Function;
    }
    export default function AccordionOne({ items }: Props) {
      const [activeIndex, setActiveIndex] = useState(-1);
      function expandFunc (index: number) {
        if (index === activeIndex) return setActiveIndex(-1)
        return setActiveIndex(index)
      }
      const itemList = items.map((item, index) => {
        return (
          <AccordionItem
            title={item.title}
            body={item.body}
            key={\`\${item.title}-\${index}\`}
            index={index}
            expanded={index === activeIndex}
            expandFunc={expandFunc}
          />
        );
      });
      return <div className={styles.accordionContainer}>{itemList}</div>;
    }
    
    function AccordionItem({ title, body, index, expanded, expandFunc }: AccItem) {
      
    
      return (
        <div className={styles.accordionItemContainer}>
          <button
            className={styles.accordionButton}
            onClick={() => expandFunc(index)}
            style={{
              backgroundColor: expanded ? "#f1787e" : "#fff",
              color: expanded ? "white" : "black",
            }}
          >
            <div>{title}</div>
            <div>
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth=".5"
                stroke="currentColor"
                width="1.8rem"
                height="1.8rem"
                animate={{
                  rotate: expanded ? 180 : 0,
                }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </motion.svg>
            </div>
          </button>
          <motion.div
            className={styles.accordionBody}
            initial={{
              height: expanded ? "auto" : "0px",
            }}
            animate={{
              height: expanded ? "auto" : "0px",
            }}
            transition={{ type: "linear"}}
          >
            {body}
          </motion.div>
        </div>
      );
    }
    `,
    CSS: `
    .accordionContainer {
      display: flex;
      flex-direction: column;
      width: 100%;
      background-color: white;
      border-radius: 10px;
      padding: 2rem;
      box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    }
    .accordionItemContainer{
      display: flex;
      flex-direction: column;
      width: 100%;
      align-items: center;
      padding: 0.5rem;
      background-color: inherit;
      border: 1px #ccc solid;
      border-radius: 5px;
    }
    .accordionButton {
      display: flex;
      width: 100%;
      font: inherit;
      height: fit-content;
      justify-content: space-between;
      align-items: center;
      padding: 0.5rem;
      background-color: inherit;
      border: none;
      border-radius: 5px;
    }
    .accordionBody {
      display: flex;
      flex-direction: column;
      overflow: hidden;
      width: 100%;
    }
    .svg-button-icon {
      width: 1rem;
      height: 1rem;
      display: inline;
      vertical-align: middle;
    }
    
    @media (min-width: 768px) {
      /* Adjust the breakpoint as needed */
      .accordionContainer{
        width: 50%;
      }
      }
    `,
  },
  paperTabs: {
    title: "Paper Tabs",
    description: `This is a tab component made to look like real tabs`,
    example: <Tabs content={tabsContent}/>,
    TSX: `
    "use client";
    import { ReactNode, useState } from "react";
    import styles from "./Tabs.module.css";
    
    interface Props {
      content: Tab[];
    }
    interface Tab {
      title: string;
      content: ReactNode;
    }
    export default function Tabs({ content }: Props) {
      const [activeIndex, setActiveIndex] = useState(0);
      function chooseTab(index: number) {
        return setActiveIndex(index);
      }
      const tabSize = 100 / content.length;
      
      return (
        <div className={styles.tabsContainer}>
          <div className={styles.tabTopsContainer}>
            {content.map((item, index) => {
              return (
                <div
                  key={\`tab-\${index}\`}
                  className={
                    index === activeIndex ? styles.tabTopActive : styles.tabTop
                  }
                  onClick={() => chooseTab(index)}
                  style={{
                    width: \`\${tabSize}%\`
                  }}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className={styles.tabsContentContainer}>
            {content[activeIndex].content}
          </div>
        </div>
      );
    }
    `,
    CSS: `
    .tabsContainer {
      display: flex;
      flex-direction: column;
      height: 100%;
      width: 100%;
      background-color: white;
      border-radius: 20px;
    }
    .tabTopsContainer {
      display: flex;
      flex-direction: row;
      height: 10%;
      background-color: #f4f4f4;
    }
    .tabTop {
      display: flex;
      height: 100%;
      justify-content: center;
      padding: 1rem;
      align-items: center;
      border-radius: 20px 20px 0 0;
      background-color: #fff;
      box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px, inset 0px -2px 3px rgba(0, 0, 0, 0.1); /* Adjusted inset shadow */
    }
    
    
    .tabTopActive {
        display: flex;
        height: 100%;
        justify-content: center;
        padding: 1rem;
        align-items: center;
        border-radius: 20px 20px 0 0;
        background-color: #fff;
        box-shadow:
          -6px -6px 8px -6px rgba(149, 157, 165, 0.2), /* Top-left shadow */
          6px -6px 8px -6px rgba(149, 157, 165, 0.2), /* Top-right shadow */
          -6px 0px 8px -6px rgba(149, 157, 165, 0.2), /* Left side shadow */
          6px 0px 8px -6px rgba(149, 157, 165, 0.2); /* Right side shadow */
        z-index: 1;
      }
      
      
    
    .tabsContentContainer {
      display: flex;
      height: 90%;
      width: 100%;
      border-radius: 0 0 20px 20px;
      background-color: #fff;
      padding: 1rem;
    }
    `,
  },
  sliderTabs: {
    title: "Slider Tabs",
    description: `This is a tab component with an animated slider to indicate navigation`,
    example: <SliderTabs content={tabsContent}/>,
    TSX: `
    "use client";
    import { ReactNode, useState } from "react";
    import styles from "./SliderTabs.module.css";
    import { motion } from "framer-motion";
    
    interface Props {
      content: Tab[];
    }
    interface Tab {
      title: string;
      content: ReactNode;
    }
    export default function SliderTabs({ content }: Props) {
      const [activeIndex, setActiveIndex] = useState(0);
      function chooseTab(index: number) {
        return setActiveIndex(index);
      }
      const tabSize = 100 / content.length;
      return (
        <div className={styles.tabsContainer}>
          <div className={styles.tabTopsContainer}>
            {content.map((item, index) => {
              return (
                <div
                  key={\`tab-\${index}\`}
                  className={
                    index === activeIndex ? styles.tabTopActive : styles.tabTop
                  }
                  onClick={() => chooseTab(index)}
                  style={{width: \`\${tabSize}%\`}}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <motion.div
            className={styles.slider}
            style={{
              width: \`\${tabSize}%\`,
            }}
            animate={{ x: \`\${activeIndex * 100}%\` }}
          />
    
          <div className={styles.tabsContentContainer}>
            {content[activeIndex].content}
          </div>
        </div>
      );
    }
    `,
    CSS: `
    .tabsContainer {
      display: flex;
      flex-direction: column;
      height: 100%;
      width: 100%;
      background-color: white;
      border-radius: 20px;
      padding: 1rem;
    }
    .tabTopsContainer {
      display: flex;
      flex-direction: row;
      height: 10%;
      border-radius: 20px;
      width: 100%;
      overflow-x: scroll;
    }
    .tabTopsContainer:last-child{
        border-radius: 20px 20px 0 0 ;
    }
    .tabTop {
      display: flex;
      height: 100%;
      justify-content: center;
      padding: 1rem;
      width: 150px;
      align-items: center;
      background-color: #fff; 
    }
    .tabTopsContainer:last-child{
        border-radius: 20px 20px 0 0 ;
    }
    .tabTopActive {
      display: flex;
      height: 100%;
      justify-content: center;
      padding: 1rem;
      width: 150px;
      align-items: center;
      border-radius: 20px 20px 0 0;
      background-color: #fff;
      
    }
    .tabsContentContainer {
      display: flex;
      height: 90%;
      width: 100%;
      border-radius: 0 0 20px 20px;
      background-color: #fff;
      padding: 1rem;
    }
    .slider{
        height: 10px;
        background-color: #f1787e;
        border-radius: 10px;
        opacity: .5;
    }
    `,
  },
  verticalCard: {
    title: "Vertical Card",
    description: `This is a vertical product card`,
    example: <VerticalCard image={cardProducts[0].image} title={cardProducts[0].title} description={cardProducts[0].description}/>,
    TSX: `
    /* eslint-disable @next/next/no-img-element */
    "use client"
    import styles from "./VerticalCard.module.css";
    
    interface Props {
      image: string;
      title: string;
      description: string;
    }
    export default function VerticalCard({ image, title, description }: Props) {
      function handleClick(){
        //put your logic here to handle button click
      }
      return (
        <div className={styles.cardContainer}>
          <div className={styles.cardImageContainer}>
            <img src={image} alt={\`oops\`} className={styles.cardImage} />
          </div>
    
          <div className={styles.cardBody}>
            <h2 className={styles.cardTitle}>{title}</h2>
            <p>{description}</p>
            <div className={styles.cardButtonContainer}>
              <button className={styles.addButton} onClick={() => handleClick()}>Buy</button>
            </div>
          </div>
        </div>
      );
    }`,
    CSS: `
    .cardContainer {
      display: flex;
      flex-direction: column;
      border-radius: 20px;
      background-color: white;
      width: 100%;
      height: 568px;
      box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    }
    .cardBody {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      height: 33%;
      width: 100%;
      padding-left: 2rem;
      padding-right: 2rem;
      padding-top: 0.5rem;
      padding-bottom: 1rem;
    }
    .cardImageContainer {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      overflow: hidden;
      padding: 1rem;
      border-radius: 10px 10px 0 0;
      z-index: 1;
      background-color: white
    }
    .cardImage {
      border-radius: 10px;
      object-fit: contain;
    }
    .cardButtonContainer {
      width: 100%;
      display: flex;
      justify-content: flex-end;
    }
    .addButton {
      display: flex;
      justify-content: center;
      padding: 0.5rem;
      background-color: #7387a0;
      color: white;
      border: none;
      border-radius: 5px;
    }
    .addButton:hover {
      background-color: #56667a;
    }
    .addButton:active {
      transform: scale(0.9);
    }
    @media (min-width: 768px) {
      .cardContainer {
        width: 343px;
      }
    }
    `,
  },
  horizontalCard: {
    title: "Horizontal Card",
    description: `This is a horizontal product card`,
    example: <HorizontalCard image={cardProducts[0].image} title={cardProducts[0].title} description={cardProducts[0].description}/>,
    TSX: `
    "use client";
    import styles from "./HorizontalCard.module.css";
    
    interface Props {
      image: string;
      title: string;
      description: string;
    }
    
    export default function HorizontalCard({ image, title, description }: Props) {
      function handleClick() {
        //put your logic here to handle button click
      }
      return (
        <div className={styles.cardContainer}>
          <div className={styles.cardImageContainer}>
            <img src={image} alt={\`oops\`} className={styles.cardImage} />
          </div>
    
          <div className={styles.cardBody}>
            <h2 className={styles.cardTitle}>{title}</h2>
            <p>{description}</p>
            <div className={styles.cardButtonContainer}>
              <button className={styles.addButton} onClick={() => handleClick()}>
                Buy
              </button>
            </div>
          </div>
        </div>
      );
    }
    `
    ,
    CSS: `
    .cardContainer {
      display: flex;
      flex-direction: row;
      border-radius: 20px;
      background-color: white;
      width: 343px;
      height: 343px;
      box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    }
    .cardBody {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      height: 100%;
      width: 50%;
      padding-left: 1rem;
      padding-right: 1rem;
      padding-top: 1rem;
      padding-bottom: 1rem;
    }
    .cardImageContainer {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50%;
      overflow: hidden;
      padding: 1rem;
      border-radius: 10px 0 0 10px;
      z-index: 1;
      background-color: white
    }
    .cardImage {
      border-radius: 10px;
      object-fit: scale-down;
    }
    .cardButtonContainer {
      width: 100%;
      display: flex;
      justify-content: flex-end;
    }
    .addButton {
      display: flex;
      justify-content: center;
      padding: 0.5rem;
      background-color: #7387a0;
      color: white;
      border: none;
      border-radius: 5px;
      width: 100%;
    }
    .addButton:hover {
      background-color: #56667a;
    }
    .addButton:active {
      transform: scale(0.9);
    }
    @media (min-width: 768px) {
      .cardContainer {
        width: 343px;
      }
    }
    `,
  },
  modal: {
    title: "Modal",
    description: `This is a modal that will appear on top of the page when the modal button is clicked. Wrap whatever you want displayed with the modal button component. In this example we wrapped our slider tabs component in our modal button.`,
    example: <ModalButton isDefault={true} text={"click me"}><SliderTabs content={tabsContent}/></ModalButton>,
    TSX: `
    "use client"
    import { ReactElement, ReactNode, useState } from "react";
    import styles from "./Modal.module.css";
    import React from "react";
    import { AnimatePresence, motion } from "framer-motion";
    
    export default function ModalButton(props: {
      children: ReactElement;
      isDefault: boolean;
      text: string;
      cssClass?: string;
    }) {
      const [showModal, setShowModal] = useState(false);
      const { isDefault, cssClass, text } = props;
    
      return (
        <>
          <button
            className={isDefault ? styles.modalButton : cssClass}
            onClick={() => setShowModal(true)}
          >
            {text}
          </button>
          <Modal isVisible={showModal} onClose={() => setShowModal(false)}>
            {props.children}
          </Modal>
        </>
      );
    }
    
    interface props {
      isVisible: boolean;
      onClose: Function;
      children: ReactElement;
    }
    
    export function Modal({ isVisible, onClose, children }: props) {
      
      function handleClose(e: any) {
        if (e.target.id === "modal-wrapper") {
          onClose();
        }
      }
    
      const childWithProps = React.cloneElement(children, { onClose: onClose });
    
      return (
        <AnimatePresence>
          {isVisible && (
            <motion.div
            className={styles.modalWrapper}
            id={styles.modalWrapper}
            onClick={(e) => handleClose(e)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{duration: .2}}
          >
            <motion.div
              className={styles.modalContent}
            >
              <div className={styles.modalCloseContainer}>
                <button
                  className={styles.closeButton}
                  onClick={() => {
                    onClose();
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1"
                    stroke="#ccc"
                    className={styles.closeButtonIcon}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              {childWithProps}
            </motion.div>
          </motion.div>
          )}
        </AnimatePresence>
      );
    }
    `
    ,
    CSS: `
    .modalButton {
      display: flex;
      justify-content: center;
      padding: 0.5rem;
      background-color: #f1787e;
      color: white;
      border: none;
      border-radius: 5px;
    }
    .modalButton:hover {
      background-color: #ef3740;
    }
    .modalButton:active {
      transform: scale(0.9);
    }
    .modalWrapper {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #7695b740;
      backdrop-filter: blur(4px);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 9999;
    }
    
    .modalContent {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      overflow-y: scroll;
      overflow-x: hidden;
      width: 90%;
      height: 90%;
      padding: 2rem;
      border-radius: 10px;
      background-color: #ffffff;
      z-index: 10000;
    }
    .modalCloseContainer {
      display: flex;
      justify-content: flex-end;
      width: 100%;
    }
    .closeButton {
      background-color: white;
      border: none;
      width: fit-content;
      height: fit-content;
    }
    .closeButtonIcon {
      width: 2rem;
      height: 2rem;
      display: inline;
      vertical-align: middle;
    }
    @media (min-width: 1024px) {
      .modalContent {
        width: 60%;
        height: 80%;
      }
    }
    `,
  },
};
