import "./styles.css";
import { initialData } from "./initial-data";
import { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { Column } from "./column";

export default function App() {
  const [data, setData] = useState(initialData);

  const onDragEnd = (result) => {
    console.log(result);
    const { destination, source, draggableId } = result;

    if (!destination) return;
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;

    const columns = data.columns[source.droppableId];
    const newTaskIds = Array.from(columns.taskIds);
    newTaskIds.splice(source.index, 1);
    newTaskIds.splice(destination.index, 0, draggableId);
    console.log(newTaskIds);
    const newColumn = {
      ...columns,
      taskIds: newTaskIds
    };

    const newData = {
      ...data,
      columns: {
        ...data.columns,
        [newColumn.id]: newColumn
      }
    };
    console.log(newData);
    setData(newData);
  };

  return (
    <div className="App">
      <DragDropContext onDragEnd={onDragEnd}>
        {data.columnOrder.map((columnId) => {
          const column = data.columns[columnId];
          const tasks = column.taskIds.map((taskId) => data.tasks[taskId]);

          return <Column key={column.id} column={column} tasks={tasks} />;
        })}
      </DragDropContext>
    </div>
  );
}
