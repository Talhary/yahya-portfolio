import {ProjectCard} from './project-card'
import {getItem} from "@/actions/getItem"
const ProjectDetails = async ({params:{id}}:{params:{id:string}})=>{
 const item = await getItem(id)
 return (
    <div className="min-h-screen flex items-center justify-center ">
        <ProjectCard data={item} />
    </div>
);
}
export default ProjectDetails