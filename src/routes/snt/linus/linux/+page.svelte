<svelte:head>
    <link rel="icon" href="/SNT/tux.png">
    <title>Le Noyau Linux</title>
</svelte:head>

<div class="linux">
    <header>
        <div class="header-div">
            <img src="/SNT/linux.png" width="160" height="90" alt="Linux" class="header-photo">
        </div>
        <div class="header-div">
            <h2 class="header-text">Le noyau Linux, une révolution informatique.</h2>
            <h3 class="header-text">Lorem Ipsum.</h3>
        </div>
    </header>  
    <div id="contents" class="contents-div">
        <ol class="contents-list">
            Le noyau Linux
            <li><a class="contents-a" href="#what">Mais qu'est-ce que c'est ?</a></li>
            <li><a class="contents-a" href="#why">Pourquoi une révolution ?</a></li>
            <li><a class="contents-a" href="/snt/linus">Son créateur, Linus Torvalds.</a></li>
        </ol>
    </div>
    <div class="main">
        <div id="what">
            <h2 class="content-title">Mais qu'est-ce que c'est ?</h2>
            <p class="info-paragraph" id="what">
                Le noyau Linux est un noyau de système d'exploitation populaire dû à sa polyvalence
                et à sa modularité. Il est
                <a href="https://fr.wikipedia.org/wiki/Open_source" target="_blank">open source</a>,
                et est donc disponible à 
                <a href="https://www.github.com/torvalds/linux" target="_blank">tous</a>.
                Il peut être modifié et utilisé par n'importe qui. Le noyau a été utilisé pour
                créer des centaines de systèmes d'exploitation nommés
                <a href="https://en.wikipedia.org/wiki/List_of_Linux_distributions" target="_blank">distributions</a>
                ou "distro". Il existe des centaines de distributions avec des utilités très diverses.
                Il y a des distributions avec des bureaux, pour des utilisations personnelles
                et des distributions serveur. 
            </p>
        </div>
        <div id="why">
            <h2 class="content-title">Pourquoi une révolution ?</h2>
            <div class="container">
                <div id="why-text">
                    <p class="info-paragraph" id="why">
                        Le noyau Linux doit sa popularité à sa
                        <a href="https://fr.wikipedia.org/wiki/Loadable_Kernel_Module" target="_blank">modularité</a>.
                        En effet, le noyau lui-même est très petit, mais il est très facile
                        de créer ses propres modules et de les ajouter afin de créer une nouvelle 
                        <a href="https://fr.wikipedia.org/wiki/Liste_des_distributions_GNU/Linux" target="_blank">distribution</a>.
                        Cela veut aussi dire qu'il est possible pour un utilisateur d'une
                        distribution de la modifier à son gré.
                    </p>
                    <p class="info-paragraph" id="why">
                        Cette modularité donne aussi une grande polyvalence au noyau Linux. En effet, les différentes
                        <a href="https://fr.wikipedia.org/wiki/Liste_des_distributions_GNU/Linux" target="_blank">distributions</a>
                        ont des utilités très diverses. Il existe des distributions comme
                        <a href="https://ubuntu.com/" target="_blank">Ubuntu</a> ou
                        <a href="https://fedoraproject.org/" target="_blank">Fedora</a> qui en ont même plusieurs,
                        des versions serveur, qui sont des systèmes d'exploitation en ligne de commande ayant
                        pour but d'être stable et léger afin de faire fonctionner des applications sur de
                        très longues périodes, des fois des années. 
                    </p>
                    <p class="info-paragraph" id="why">
                        Il existe aussi des distributions bureau qui ont des fonctionnalités équivalentes à
                        d'autres systèmes comme
                        <a href="https://fr.wikipedia.org/wiki/Microsoft_Windows" target="_blank">Windows</a> et
                        <a href="https://fr.wikipedia.org/wiki/MacOS" target="_blank">macOS</a>.
                        Cependant, ces distributions étant, dans la majorité des cas,
                        <a href="https://fr.wikipedia.org/wiki/Open_source" target="_blank">open source</a>,
                        sont souvent orientées vers la sécurité et n'ont donc pas de récolte d'informations comme sur
                        <a href="https://fr.wikipedia.org/wiki/Microsoft_Windows" target="_blank">Windows</a> ou
                        <a href="https://fr.wikipedia.org/wiki/MacOS" target="_blank">macOS</a>. Néanmoins,
                        ils ont des défauts, ils sont souvent plus compliqués à apprendre que
                        <a href="https://fr.wikipedia.org/wiki/Microsoft_Windows" target="_blank">Windows</a> et
                        <a href="https://fr.wikipedia.org/wiki/MacOS" target="_blank">macOS</a> et sont souvent
                        moins compatibles avec certaines applications comme les jeux vidéos.
                    </p>
                    <p class="info-paragraph" id="why">
                        Finalement, le noyau est aussi très apprécié car il est très sécuritaire et beaucoup
                        moins propriétaire que
                        <a href="https://fr.wikipedia.org/wiki/Microsoft_Windows" target="_blank">Windows</a> et
                        <a href="https://fr.wikipedia.org/wiki/MacOS" target="_blank">macOS</a>
                        et permet donc aux amateurs de modifier leur système d'exploitation au maximum.
                    </p>
                </div>
                <iframe width="560" height="315" 
                    src="https://www.youtube.com/embed/xLhCOFWaY_M?si=lNN16bi95_wPLtyS" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowfullscreen></iframe>
            </div>
        </div>
    </div>
</div>

<style>

    .linux {
        background-color: black;
    }

    div {
        color: white;
    }

    header {
        background-color: darkblue;
        margin: 0px;
    }

    .header-text {
        background-color: black;
        color: white;
        margin: 10px;
    }

    .header-div {
        display: inline-block;
        vertical-align: top;
    }

    .header-photo {
        margin: 10px;
    }

    .contents-div {
        background-color: rgb(90, 90, 90);
        margin: 10px;
        border-style: solid;
        border-width: 1px;
        border-color: white;
    }

    .main {
        padding-left: 15px;
        padding-right: 15px;
    }

    .content-title {
        padding-left: 70px;
    }

    .contents-a {
        color:white
    }

    .info-paragraph {
        color: rgb(255, 0, 0);
        text-indent: 25px;
    }

    a {
        color: rgb(255, 0, 0);
    }

    .container {
        display: grid;
        align-items: center; 
        grid-template-columns: auto auto;
        column-gap: 5px;
    }
</style>
