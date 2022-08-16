const menu = [
    {
        path: "/",
        component: () => import("../layouts/admin.vue"),
        children: [
            {
                path: "Hero",
                name: "hero",
                component: () => import ("../pages/Home/Hero.vue")
            },
            {
                path: "About",
                name: "about",
                component: () => import ("../pages/Home/About.vue")
            },
            {
                path: "Facts",
                name: "facts",
               component: () => import ("../pages/Home/Facts.vue")
            },
            {
                path: "Resume",
                name: "resume",
              component: () => import ("../pages/Home/Resume.vue")
            },
            {
                path: "Portfolio",
                name: "portfolio",
                component: () => import ("../pages/Home/Portfolio.vue")
            },
            {
                path: "Services",
                name: "services",
                component: () => import ("../pages/Home/Services.vue")
            },

            {
                path: "Skills",
                name: "skills",
               component: () => import ("../pages/Home/Skills.vue")
            },

            {
                path: "Contacts",
                name: "contacts",
              component: () => import ("../pages/Home/Contacts.vue")
            },
            {
                path: "Testimonials",
                name: "testimonials",
              component: () => import ("../pages/Home/Testimonials.vue")
            }
        ]
    }
];

export default menu;