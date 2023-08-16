"use client"
import Select from "../../components/Select"
export default function SelectPage () {
    const choices = ["New York", "Boston", "Los Angeles", "Cleveland", "Buenos Aires", "Austin", "Rockport"]
    return (
        <Select choices={choices}/>
    )
}