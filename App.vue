<template>
  <div id="app" class="container mt-5">
    <div>
      <h2> TAREAS A REALIZAR</h2>
      <form @submit.prevent="agregarTareas">
        <div class="form-row">
          <div class="form-group col-md-4">
            <label for="nombre">Nombre</label>
            <input type="text" class="form-control" v-model="nombre" placeholder="Ingrese el nombre de la tarea">
          </div>
        </div>
        <div class="form-row">
          <div class="form-group">
            <label for="descripcion">Descripción</label>
            <textarea class="form-control" type="text" v-model="descripcion" placeholder="Debo hacer, me falta hacer, tengo que hacer"></textarea>
          </div>
        </div>
        <n-button type="submit" class="btn btn-primary">Guardar</n-button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nombre: '',
      descripcion: '',
      tarea: [],
    }
  },
  methods: {
    agregarTareas() {
      this.tarea.push({
        nombre: this.nombre,
        descripcion: this.descripcion,
      });

      localStorage.setItem('tareas', JSON.stringify(this.tarea));
      this.nombre = '';
      this.descripcion = '';
    },
  },
  mounted() {
    const listaTareas = JSON.parse(localStorage.getItem('tareas'));
    if (listaTareas !== null) {
      this.tarea = listaTareas;
    }
  },
};
</script>

<style>
/* Agrega cualquier estilo que necesites aquí */
</style>
