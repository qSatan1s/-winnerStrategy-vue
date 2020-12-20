export default [
  {
    //lolik И все же думаю что path /young/ это логично что он Home. И путь "/young/home" не нужен
    path: "/young/home",
    name: "youngHome",
    component: () => import("../views/young/pages/Home")
  }
];
