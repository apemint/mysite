import { FaNode, FaReact, FaCss3Alt, FaJs, FaBootstrap } from 'react-icons/fa'
import { TiHtml5 } from 'react-icons/ti'
import { DiMongodb } from 'react-icons/di'

const iconSize = 100;

const skillsList = [
    {
        name: "Node.js",
        icon: <FaNode size={iconSize} />,
    },
    {
        name: "Express",
        icon: <p className="express">express</p>
    },
    {
        name: "MongoDB",
        icon: <DiMongodb size={iconSize} />
    },
    {
        name: "React.js",
        icon: <FaReact size={iconSize} />
    },
    {
        name: "JavaScript",
        icon: <FaJs size={iconSize} />
    },
    {
        name: "BootStrap",
        icon: <FaBootstrap size={iconSize} />
    },
    {
        name: "CSS3",
        icon: <FaCss3Alt size={iconSize} />
    },
    {
        name: "HTML5",
        icon: <TiHtml5 size={iconSize} />
    },


];

export default skillsList;