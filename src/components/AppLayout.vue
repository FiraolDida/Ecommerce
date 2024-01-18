<template>
    <div class="min-h-full bg-gray-200 flex">
        <SidebarLayout :class="{'-ml-[200px]' : !sidebarOpened}" />

        <div>
            <Navbar @toggle-sidebar="toogleSidebar"></Navbar>

            <main class="p-6">
                <router-view></router-view>
            </main>
        </div>
    </div>
</template>

<script setup>
import Navbar from '@/components/NavbarLayout.vue'
import SidebarLayout from '@/components/SidebarLayout.vue'
</script>