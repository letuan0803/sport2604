import { RouteConfig } from "vue-router";

const routes: RouteConfig[] = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/RecordManagement.vue") },
      { path: "record", component: () => import("pages/RecordManagement.vue") },
      { path: "subject", component: () => import("pages/SubjectManagement.vue") },
      { path: "monitor", component: () => import("pages/Monitor.vue") },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "*",
    component: () => import("pages/Error404.vue")
  }
];

export default routes;
