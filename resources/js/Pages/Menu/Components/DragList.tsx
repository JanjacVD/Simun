import {
    DragDropContext,
    Droppable,
    Draggable,
    DropResult,
} from "react-beautiful-dnd";
import { Orderable, Translatable } from "../types/types";
import { router } from "@inertiajs/react";
import { useLaravelReactI18n } from "laravel-react-i18n";
import { Dispatch, SetStateAction } from "react";
export default function DragList({
    data,
    setList,
    model,
}: {
    setList: Dispatch<
        SetStateAction<{ hasChanged: boolean; data: Orderable[] }>
    >;
    data: Orderable[];
    model: string;
}) {
    const { t, currentLocale } = useLaravelReactI18n();
    const locale = currentLocale() as keyof Translatable;
    const handleDragEnd = (result: DropResult) => {
        if (!result.destination) return; // Drop outside the droppable area
        const startIndex = result.source.index;
        const endIndex = result.destination.index;

        // Create a deep copy of the list to avoid potential issues
        const updatedList = [...data];

        // Reorder the list
        const [removed] = updatedList.splice(startIndex, 1);
        updatedList.splice(endIndex, 0, removed);

        // Update the order property in the reordered list
        updatedList.forEach((item, index) => {
            item.order = index + 1;
        });

        // Update the state with the reordered list
        setList({ hasChanged: true, data: updatedList });
    };
    return (
        <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId="sectionList">
                {(provided) => (
                    <tbody
                        {...provided.droppableProps}
                        className="w-full"
                        ref={provided.innerRef}
                    >
                        {data
                            .sort((x, y) => x.order - y.order)
                            .map((x, i) => (
                                <Draggable
                                    key={x.id}
                                    draggableId={x.id.toString()}
                                    index={i}
                                >
                                    {(provided) => (
                                        <tr
                                            className="bg-white border-b dark:bg-gray-800 dark:border-gray-600 w-full"
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                            onClick={() => {
                                                router.get(
                                                    route(model + ".show", {id:x.id})
                                                );
                                            }}
                                        >
                                            <td className="px-6 py-4">{i}</td>
                                            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                {x.name[locale]}
                                            </td>
                                        </tr>
                                    )}
                                </Draggable>
                            ))}
                        {provided.placeholder}
                    </tbody>
                )}
            </Droppable>
        </DragDropContext>
    );
}
