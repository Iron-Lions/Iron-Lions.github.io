let favicons = ["/img/favicon/strategy_design.png",
                "/img/favicon/building.png",
                "/img/favicon/programming.png",
                "/img/favicon/outreach_operations.png"];

let link = document.querySelector("link[rel~='icon']");
if(!link) {
    link = document.createElement('link');
    link.rel = 'icon';
    document.getElementsByTagName('head')[0].appendChild(link);
}

link.href = favicons[Math.floor(Math.random()*4)];
