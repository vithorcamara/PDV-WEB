export class Router {
    routes = {}

    add(routName, page){
        this.routes[routName] = page
    }

    route(event) {
        event = event || window.event
        event.preventDefault()
    
        window.history.pushState({}, "", event.target.href)
    
        this.handle()
    }

    handle() {
        const {pathname} = window.location        
        const route = this.routes[pathname] || this.routes[404]
        //teste de verificação console.log(route)
        fetch(route).then(data => data.text()).then(html => {
            document.querySelector("#section-home").innerHTML = html})
        }
    }