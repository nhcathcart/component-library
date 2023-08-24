import FileExplorerConatiner, { FileSystem }from "../../components/FileExplorer"

export default function FileExplorerPage(){
  const exampleFiles: FileSystem = {
    name: "example-project",
    isDirectory: true,
    children: [
      {
        name: "client",
        isDirectory: true,
        children: [
          {
            name: "src",
            isDirectory: true,
            children: [
              {
                name: "components",
                isDirectory: true,
                children: [
                  {
                    name: "Home.js",
                    isDirectory: false,
                  },
                  {
                    name: "About.js",
                    isDirectory: false,
                  },
                  {
                    name: "Dashboard.js",
                    isDirectory: false,
                  },
                ],
              },
              {
                name: "App.js",
                isDirectory: false,
              },
              {
                name: "index.js",
                isDirectory: false,
              },
            ],
          },
          {
            name: "public",
            isDirectory: true,
            children: [
              {
                name: "index.html",
                isDirectory: false,
              },
              {
                name: "favicon.ico",
                isDirectory: false,
              },
            ],
          },
          {
            name: "package.json",
            isDirectory: false,
          },
        ],
      },
      {
        name: "server",
        isDirectory: true,
        children: [
          {
            name: "src",
            isDirectory: true,
            children: [
              {
                name: "routes",
                isDirectory: true,
                children: [
                  {
                    name: "auth.js",
                    isDirectory: false,
                  },
                  {
                    name: "api.js",
                    isDirectory: false,
                  },
                ],
              },
              {
                name: "controllers",
                isDirectory: true,
                children: [
                  {
                    name: "authController.js",
                    isDirectory: false,
                  },
                  {
                    name: "apiController.js",
                    isDirectory: false,
                  },
                ],
              },
              {
                name: "server.js",
                isDirectory: false,
              },
            ],
          },
          {
            name: "package.json",
            isDirectory: false,
          },
        ],
      },
      {
        name: "README.md",
        isDirectory: false,
      },
    ],
  };
      
      
      
    return (
        <FileExplorerConatiner files={exampleFiles} expanded={true}/>
    )
}