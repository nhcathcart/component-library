"use client"
import { ReactSnippet } from "@/components/ReactSnippet"
import ModalButton from "../../components/ModalButton"
import { examples } from "@/examples/text"
export default function ModalPage () {
    return (
        <>
        <ReactSnippet {...examples.modal}/>
        </>
    )
}