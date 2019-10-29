import { registerApplication, start } from "single-spa";

function pathPrefix(prefix: string) {
    return function(location: Location) {
        return location.pathname.startsWith(prefix);
    };
}

registerApplication(
    "navbar",
    () => import("./apps/navbar/navbar.app"),
    () => true
);

registerApplication(
    "home",
    () => import("./apps/home/home.app"),
    location =>
        location.pathname === "" ||
        location.pathname === "/" ||
        location.pathname.startsWith("/home")
);

registerApplication(
    "users",
    () => import("./apps/users/users.app"),
    pathPrefix("/users")
);

registerApplication(
    "angularJS",
    () => import("./apps/angularJS/angularJS.app.js"),
    pathPrefix("/angularJS")
);

start();
