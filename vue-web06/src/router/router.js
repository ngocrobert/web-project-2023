import { createRouter, createWebHistory } from 'vue-router';

import CustomerList from '../pages/customer/CustomerList.vue'
import EmployeeList from '../pages/employee/EmployeeList.vue'
import ReportList from '../pages/report/ReportList.vue'
import Index from '../pages/Index.vue';




const routerList = [
    { path: "/customer", name:"CustomerRouter", component: CustomerList},
    { path: "/employee", name:"EmployeeRouter", component: EmployeeList},
    { path: "/report", name:"ReportRouter", component: ReportList},
    { path: "/", name:"HomeRouter", component: Index},

]

const router = createRouter({
    history: createWebHistory(), 
    routes: routerList
})

export default router