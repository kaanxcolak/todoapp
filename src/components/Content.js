import React from 'react';
import TodoList from "./TodoList";


function Content() {
  return (
    <section className="main">
		<input className="toggle-all" type="checkbox" />
		<label htmlfor="toggle-all">
			Mark all as complete
		</label>
        <TodoList/>

		
	</section>
  )
}

export default Content;