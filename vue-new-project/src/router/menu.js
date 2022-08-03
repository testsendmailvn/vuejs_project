const menu = [
    {
        path: "/",
        component: () => import("../layouts/admin.vue"),
        children: [
            {
                path: "About",
                name: "about",
                component: () => import ("../pages/Home/About.vue")
            },

            {
                path: "roles",
                name: "admin-roles",
               component: () => import ("../pages/Home/About.vue")
            },

            {
                path: "settings",
                name: "admin-settings",
              component: () => import ("../pages/Home/About.vue")
            }
        ]
    }
];

export default menu;