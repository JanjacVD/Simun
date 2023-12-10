import { MenuAllergen } from "../types/types";

export default function AllergenUnit({x}:{x:MenuAllergen}){
    return (
        <div className="allergen">
        <img width={50} height={50} src={"/storage/allergen-images/"+x.image+'.svg'} alt={x.name + " Image"} />
        {x.name}
    </div>
    )
}