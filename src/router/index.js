import { createRouter, createWebHistory } from "vue-router";
import DashboardView from '@/views/DashboardView.vue'
import LoginView from '@/views/LoginView.vue'
import RequestPassword from '@/views/RequestPassword.vue'
import ResetPassword from '@/views/ResetPassword.vue'
import store from "@/store";
import AppLayout from '@/components/AppLayout.vue'
import Products from '@/components/AppLayout.vue'

const routes = [
    {
        path: '/app',
        name: 'app',
        redirect: '/app/dashboard',
        component: AppLayout,
        meta: {
          requiresAuth: true
        },
        children: [
          {
            path: 'dashboard',
            name: 'app.dashboard',
            component: Dashboard
          },
          {
            path: 'products',
            name: 'app.products',
            component: Products
          },
        //   {
        //     path: 'users',
        //     name: 'app.users',
        //     component: Users
        //   },
        //   {
        //     path: 'customers',
        //     name: 'app.customers',
        //     component: Customers
        //   },
        //   {
        //     path: 'customers/:id',
        //     name: 'app.customers.view',
        //     component: CustomerView
        //   },
        //   {
        //     path: 'orders',
        //     name: 'app.orders',
        //     component: Orders
        //   },
        //   {
        //     path: 'orders/:id',
        //     name: 'app.orders.view',
        //     component: OrderView
        //   },
        //   {
        //     path: '/report',
        //     name: 'reports',
        //     component: Report,
        //     meta: {
        //       requiresAuth: true
        //     },
        //     children: [
        //       {
        //         path: 'orders/:date?',
        //         name: 'reports.orders',
        //         component: OrdersReport
        //       },
        //       {
        //         path: 'customers/:date?',
        //         name: 'reports.customers',
        //         component: CustomersReport
        //       }
        //     ]
        //   },
        ]
    },
    {
        path: '/login',
        name: 'login',
        component: LoginView
    },
    {
        path: '/request-password',
        name: 'requestPassword',
        component: RequestPassword,
      },
      {
        path: '/reset-password/:token',
        name: 'resetPassword',
        component: ResetPassword,
      },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth && !store.state.user.token) {
        next({ name: 'login' })
    } else if (to.meta.requiresFuest && store.state.user.token) {
        next({ name: 'app.dashboard'})
    } else {
        next()
    }
})

export default router;