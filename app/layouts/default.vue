<template>
    <div class="bg-white-100 h-screen w-screen overflow-auto relative">
        <NavbarDesktop />
        <NavbarMobile />
        <div>
            <slot />
        </div>

        <Footer />
    </div>
</template>
