interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Example Project 1',
    description: `This is a sample project description. You can replace this with information about
    your actual projects, including details about the technologies used and what problems
    they solve.`,
    imgSrc: '/static/images/logo.png',
    href: 'https://github.com/yourusername/project1',
  },
  {
    title: 'Example Project 2',
    description: `Another sample project description. Add your own projects here with links to their
    repositories, live demos, or detailed blog posts about the development process.`,
    imgSrc: '/static/images/logo.png',
    href: 'https://github.com/yourusername/project2',
  },
]

export default projectsData
