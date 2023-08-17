import FileExplorer, { FileSystem }from "../../components/FileExplorer"

export default function FileExplorerPage(){
    const exampleFiles: FileSystem = {
        name: "root",
        isDirectory: true,
        children: [
            {
                name: "src",
                isDirectory: true,
                children: [
                    {
                        name: "main.ts", isDirectory: false
                    },
                    {
                        name: ".gitignore", isDirectory: false
                    }
                ]
            },
            {
                name: "package.json",
                isDirectory: false,
            }
        ]
    }
    return (
        <FileExplorer files={exampleFiles}/>
    )
}