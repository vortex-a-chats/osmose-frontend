<template>
    <router-view/>
</template>

<script lang="ts">
    export default {}
</script>

<style>
    html {
        font-size: 1rem;
    }

    body {
        text-align: inherit;
    }

    th {
        text-align: center;
    }

    a:visited {
        color: #551a8b;
    }

    .thead-dark a {
        color: lightgray;
    }

    .thead-dark a:visited {
        color: gray;
    }

    /* iframe for josm links */
    iframe#hiddenIframe {
        display: none;
        position: absolute;
    }

    th.country {
        height: 15em;
        vertical-align: bottom;
    }

    th.country .rotate-90 {
        transform: rotate(-90deg);
        max-width: 1.5em;
    }

    div#top_links {
        height: 4em;
    }

    #topmenu li a:link, #topmenu li a:visited {
        padding: 1rem 2rem;
        min-width: 14em;
    }

    .leaflet-sidebar.left.visible,
    .leaflet-sidebar {
        padding: 0
    }

    .leaflet-sidebar.right.visible {
        right: 2em;
        max-height: 50vh;
        top: 10em;
    }

    div#map {
        top: 4em !important;
    }

    div#menu {
        padding: 1rem 2rem !important;
        resize: horizontal;
    }

    div#menu .form-group label.col-form-label {
        padding-right: 1em;
        text-align:left !important;
    }

    .test_group .item {
        padding-left: 1em;
    }

</style>
