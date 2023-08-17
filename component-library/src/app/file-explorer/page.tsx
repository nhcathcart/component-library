import FileExplorerConatiner, { FileSystem }from "../../components/FileExplorer"

export default function FileExplorerPage(){
    const exampleFiles: FileSystem = {
        name: "root",
        isDirectory: true,
        children: [
          {
            name: "folder1",
            isDirectory: true,
            children: [
              {
                name: "file1-1.txt",
                isDirectory: false,
              },
              {
                name: "file1-2.txt",
                isDirectory: false,
              },
            ],
          },
          {
            name: "folder2",
            isDirectory: true,
            children: [
              {
                name: "file2-1.txt",
                isDirectory: false,
              },
              {
                name: "file2-2.txt",
                isDirectory: false,
              },
            ],
          },
          {
            name: "file3.txt",
            isDirectory: false,
          },
        ],
      };
      
      
      
    return (
        <FileExplorerConatiner files={exampleFiles} expanded={true}/>
    )
}