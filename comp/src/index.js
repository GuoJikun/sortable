import Sortable from "./sortable.vue";

Sortable.install = (app) => {
  app.component(Sortable.name, Sortable);
};

export { Sortable };
export default Sortable;
