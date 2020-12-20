export default [
  {
    //lolik И все же думаю что path /old/ это логично что он Home. И путь "/old/home" не нужен
    path: "/old/home",
    name: "oldHome",
    component: () => import("../views/old/pages/Home")
  },
  {
    path: "/old/account/",
    name: "oldAccount",
    component: () => import("../views/old/Account")
  },
  {
    path: "/old/account/:page",
    name: "oldAccount",
    component: () => import("../views/old/Account")
  }
];
