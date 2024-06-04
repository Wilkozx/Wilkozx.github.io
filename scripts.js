// Path: index.html
if (window.location.pathname == "/index.html" || window.location.pathname == "/") {
    let current = 1;

    cycleCarousel();
    setInterval(cycleCarousel, 5000);

    function cycleCarousel() {

        let carousel = document.getElementById("carousel");

        while (current <= carousel.children.length) {
            console.log(current);
            changeCarouselTo(current);
            current++;
            console.log(current);   

            if (current == carousel.children.length + 1) {
                current = 1;
                break;
            }
            break;
        }
    }

    function changeCarouselTo(x) {
        let carousel = document.getElementById("carousel-" + x);
        carousel.classList.add("active");
        for (let i = 1; i <= 3; i++) {
            if (i != x) {
                document.getElementById("carousel-" + i).classList.remove("active");
            }
        }
    }

}

// Path: projects.html
if (window.location.pathname == "/projects.html" || window.location.pathname == "/" || window.location.pathname == "/index.html") {
const widgets = document.getElementById("widgets");

function generateWidgets(x) {
    let size = "small";
    let id = 0;
    let difference = 4;

    for (let i = 0; i < x; i++) {

        if (i == difference) {
            size = "small";
            const widget = document.createElement("div");
            widget.id = "widget-" + id;
            widget.classList.add("widget-" + size);
            
            makeWidgetAddons(widget);
            widgets.appendChild(widget);
            difference += 3;
            id++;
        }

        if (i % 3 == 0) {
            size = "small";
            const widget = document.createElement("div");
            widget.id = "widget-" + id;
            widget.classList.add("widget-" + size);
            
            makeWidgetAddons(widget);
            widgets.appendChild(widget);
            id++;
        } else {
            size = "medium";
            const widget = document.createElement("div");
            widget.id = "widget-" + id;
            widget.classList.add("widget-" + size);

            textarea = document.createElement("div");
            textarea.classList.add("widget-textarea");
            widget.appendChild(textarea);

            widgets.appendChild(widget);
            id++;
        }
    } 
}

function populateWidget(widget, title, desc, link) {
    const widgetTitle = widget.querySelector("span");
    const widgetDesc = widget.querySelector("p");
    const widgetLink = widget.querySelector("a");

    widget.addEventListener("click", function() {
        window.location.href = link;
    });

    widgetTitle.innerText = title;
    widgetDesc.innerText = desc;
}

function makeWidgetAddons(widget) {
    textarea = document.createElement("div");
    textarea.classList.add("widget-textarea");
    widget.appendChild(textarea);
    widgettitle = document.createElement("span");
    widgettitle.id = "widget-" + "one" + "-title";
    textarea.appendChild(widgettitle);
    widgetdesc = document.createElement("p");
    widgetdesc.id = "widget-" + "one" + "-desc";
    textarea.appendChild(widgetdesc);
}

generateWidgets(5);
populateWidget(document.getElementById("widget-0"), "Orion Discord Bot", "This is the first widget", "project-1.html");

}

