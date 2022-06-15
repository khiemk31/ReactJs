import { useEffect, useState } from "react";

const lessons = [
  {
    id: 1,
    name: "Lesson 1",
  },
  {
    id: 2,
    name: "Lesson 2",
  },
  {
    id: 3,
    name: "Lesson 3",
  },
  {
    id: 4,
    name: "Lesson 4",
  },
];
function FakeChat() {
  const [lessonID, setLessonID] = useState(1);
  useEffect(() => {
    const handleCommnment = (e) => {
      console.log(e);
    };
    window.addEventListener(`lesson-${lessonID}`, handleCommnment);
    return () => {
      window.removeEventListener(`lesson-${lessonID}`, handleCommnment);
    };
  }, [lessonID]);
  return (
    <div>
      <ul>
        {lessons.map((lesson) => (
          <li
            key={lesson.id}
            style={{ color: lessonID == lesson.id ? "red" : "green" }}
            onClick={() => setLessonID(lesson.id)}
          >
            {lesson.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FakeChat;
