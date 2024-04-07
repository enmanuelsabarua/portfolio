import ProjectCard from "./ProjectCard";

const projectData = [
    {
        id: 1,
        title: "Shopper: E-commerce",
        description: "An e-commerce platform for selling and buying products online.",
        imgUrl: "/images/projects/Shopper.png",
        tags: ["React", "Node.js", "MongoDB"],
        gitUrl: "https://github.com/enmanuelsabarua/shopper",
        previewUrl: "https://shopper-one-ashy.vercel.app/",
    },
    {
        id: 2,
        title: "Photo tagging game",
        description: "A game that allows users to find and tag objects in a photo.",
        imgUrl: "/images/projects/Photo-tagging-game.png",
        tags: ["React", "Firebase"],
        gitUrl: "https://github.com/enmanuelsabarua/Photo-Tagging-App",
        previewUrl: "https://enmanuelsabarua.github.io/Photo-Tagging-App/",
    },
    {
        id: 3,
        title: "TodoList",
        description: "A simple todo list application.",
        imgUrl: "/images/projects/TodoList.png",
        tags: ["JavaScript", "HTML", "CSS"],
        gitUrl: "https://github.com/enmanuelsabarua/todo-list",
        previewUrl: "https://enmanuelsabarua.github.io/todo-list/",
    }
]

const ProjectsSection = () => {
    return (
        <>
            <h2 className="text-center text-4xl font-bold text-white mt-4 mb-6">My Projects</h2>
            <div className="grid lg:grid-cols-3 gap-8 md:gap-12">{projectData.map(project => <ProjectCard key={project.id} title={project.title} description={project.description} imgUrl={project.imgUrl} gitUrl={project.gitUrl} previewUrl={project.previewUrl} />)}</div>
        </>
    )
}

export default ProjectsSection;