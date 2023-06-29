<template>
    <contentDoc>
        <template #not-found>
            <div style="height: 100vh; top: 0; position: relative;">
            </div>
            <div style="position: absolute; inset: 50%; width: max-content; max-width: 50%; transform: translate(-50%, -50%); height: max-content;">
                    <h1 style="width: 100%; text-align: center; font-size: 5rem; padding: 0; margin: 0;">404</h1>
                    <p style="margin: 0; padding: 0; width: 100%; text-align: center;">File <code style="background-color: rgb(46, 45, 45); padding: 0.2rem; border-radius: 0.2rem;">{{ $route.path }}</code> not found</p>
            </div>
            
        </template>
    </contentDoc>
</template>