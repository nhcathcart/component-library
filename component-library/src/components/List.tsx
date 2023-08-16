import { ReactNode, useState } from "react";


export default function List () {
    const [list, setList] = useState<ReactNode[]>([])

    function addToList (item: ReactNode){
        const newList = Object.assign({}, list);
        newList.push(item);
        return setList(newList);
    }
    function removeFromList (indexToRemove: number){
        const newList = Object.assign({}, list);
        newList.splice(indexToRemove, 1)
        return setList(newList)
    }
}