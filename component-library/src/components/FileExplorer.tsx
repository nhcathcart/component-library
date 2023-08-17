import styles from "./FileExplorer.module.css"

interface FileSystem {
    name: string;
    isDirectory: boolean;
    children?: FileSystem[];
}

export default function FileExplorer(){

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
        <div>This is the File Explorer</div>
    )
}