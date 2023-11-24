import { Dispatch, SetStateAction } from "react";

export default function Hamburger({isActive,setIsActive }: { isActive: boolean, setIsActive:Dispatch<SetStateAction<boolean>>}) {
    return (
        <button onClick={() => setIsActive(prev => !prev)} className={isActive ? "hamburger active" : "hamburger"}>
            <div />
            <div />
            <div />
        </button>
    );
}
