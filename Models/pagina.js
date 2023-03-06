var app = new Vue({
  el: "#app",
  data: {
    name: '',
    description:'',
    task: [],
  },

methods: {
  addTask() {
    this.task.push({
      name: this.name,
      description: this.description,
    });

    localStorage.setItem('tareas', JSON.stringify(this.task));  
    this.name = '';
    this.description= '';
  },


},
mounted() {
 
  const listTask = JSON.parse(localStorage.getItem("tareas"))
  if (listTask!==null) {
    this.task = listTask;
  }
}
});