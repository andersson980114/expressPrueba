const app = Vue.createApp({
  setup() {
    const nombre = Vue.ref('');
    const descripcion = Vue.ref('');
    const tarea = Vue.ref([]);

    const agregarTareas = () => {
      tarea.value.push({
        nombre: nombre.value,
        descripcion: descripcion.value,
      });

      localStorage.setItem('tareas', JSON.stringify(tarea.value));  
      nombre.value = '';
      descripcion.value = '';
    };

    const listaTareas = JSON.parse(localStorage.getItem('tareas'));
    if (listaTareas !== null) {
      tarea.value = listaTareas;
    }

    return {
      nombre,
      descripcion,
      tarea,
      agregarTareas,
    };
  },
});

app.mount('#app');
