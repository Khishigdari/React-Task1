import InputField from "@/components/easy_controlled_input_type";
import Counter from "@/components/easy_counter";
import ToDoList from "@/components/easy_todo_list";
import ToggleVisibility from "@/components/easy_toggle_visibility";
import CharacterCounter from "@/components/medium_character_counter";

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-4 mt-5">
      <Counter></Counter>
      <InputField></InputField>
      <ToggleVisibility></ToggleVisibility>
      <CharacterCounter></CharacterCounter>
      <ToDoList></ToDoList>
    </div>
  );
};
export default Home;
