<svlete:head>
    <link rel="icon" href="/SNT/linus2.png">
    <title>Le Dieu de la programmation</title>
</svlete:head>

<div>
    <header>
        <div class="header-div">
            <img src="/SNT/linus1.png" width="66" height="90" alt="Linus Torvalds" class="header-photo">
        </div>
        <div class="header-div">
            <h2 class="header-text">Linus Torvalds, le dieu de la programmation.</h2>
            <h3 class="header-text">Lorem Ipsum.</h3>
        </div>
    </header>
    <div class="contents-div">
        <ol class="contents-list">
            Linus Torvalds
            <li><a href="#who">Mais qui est-ce ?</a></li>
            <li><a href="#why">Pourquoi un dieu ?</a></li>
            <li><a href="/snt/linus/linux">Sa création, le noyau Linux.</a></li>
        </ol>
    </div>
    <div  class="main">
        <div id="who">
            <h2 class="content-title">Mais qui est-ce ?</h2>
            <p class="info-paragraph" id="who">
                Linus Torvalds a vécu en Finlande, dans une communauté suédoise. Lors de ses 
                <a class="info-href" href="https://fr.wikipedia.org/wiki/Linus_Torvalds#%C3%89tudes" target="_blank">études</a>
                d'informatique à l'université de Helsinki, il a décidé de créer un noyau de système
                d'exploitation pour sa thèse de master. Il a aussi créé un logiciel de gestion de
                version de code source appelé Git. Ses projets sont caractérisés par leur nature open
                source. C'est-à-dire, que le code source est public, a disposition de tout le monde.
                Cela permet d'inviter la collaboration d'autres développeurs.
            </p>
            <p class="info-paragraph" id="who">
                Linus a marqué les média par son caractère assez fort, il se qualifie lui-même de 
                "<a class="info-href" href="https://fr.wikipedia.org/wiki/Linus_Torvalds#Conflits" target="_blank">personne vraiment désagréable</a>."
                Il a aussi eu des problèmes dû à son comportement envers d'autres développeurs
                qui critiquaient son travail et les qualités techniques du noyau Linux. Son caractère
                lui a donné le surnom de
                "<a class="info-href" href="https://fr.wikipedia.org/wiki/Benevolent_Dictator_for_Life#Description" target="_blank">dictateur bienveillant à vie</a>."
            </p>
        </div>
        <div id="why">
            <h2 class="content-title">Pourquoi un Dieu?</h2>
            <div class="container">
                <div id="why-text">
                    <p class="info-paragraph" id="why">
                        Pour commencer, Linus a dit lui-même qu'il était un
                        <a class="info-href" href="https://www.linkedin.com/pulse/my-id-linus-i-am-your-god-vishnu-vardhan-meedivada" target="_blank">dieu</a>.
                        De plus, dans la communauté des développeurs, il est considéré comme le dieu
                        de la programmation. Cette appellation lui vient des projets informatiques
                        révolutionnaires sur lesquels il a travaillé tel que le noyau Linux et le
                        système de gestion de version 
                        <a class="info-href" href="https://fr.wikipedia.org/wiki/Git" target="_blank">Git</a>.
                    </p>
                    <p class="info-paragraph" id="why">
                        Le noyau Linux a causé une révolution dans le monde des systèmes d'exploitation et de l'
                        <a class="info-href" href="https://fr.wikipedia.org/wiki/Open_source" target="_blank">open source</a>.
                        L'open source désigne la mise en libre accès du code source d'un
                        programme afin qu'il puisse être réutilisé gratuitement par tout le monde et surtout
                        pour inviter la collaboration de la communauté. Ce noyau est utilisé partout par tout
                        le monde, même des entreprises comme
                        <a class="info-href" href="https://www.apple.com" target="_blank">Apple</a> et
                        <a class="info-href" href="https://www.microsoft.com/fr-fr/" target="_blank">Microsoft</a>
                        qui ont leur propre système d'exploitation.
                    </p>
                    <p class="info-paragraph" id="why">
                        Par la suite, Linus Torvalds a été impliqué dans le développement de plusieurs autres
                        programmes, dont Git, un système de contrôle de version qui permet de suivre les
                        modifications et différentes branches de développement d'un programme.
                        <a class="info-href" href="https://fr.wikipedia.org/wiki/Git" target="_blank">Git</a>,
                        étant lui aussi open source, est très répandue dans le monde de la programmation. Il est
                        utilisé par des particuliers (comme moi) voulant garder une trace de leurs modifications,
                        et même par des grandes entreprises telles que Microsoft et leur outil public
                        <a class="info-href" href="https://github.com/" target="_blank">GitHub</a>. 
                        Il a aussi créé Subsurface, un logiciel de journal et de planification de plongée.
                    </p>
                </div>
                <img src="/SNT/linus-god.png" width="388" height="520" alt="Linus God">
            </div>
        </div>
    </div>
</div>

<style>
    header {
        background-color: darkblue;
        margin: 0px;
    }

    .header-text {
        background-color: white;
        color: black;
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
        background-color: rgb(202, 202, 202);
        margin: 10px;
        border-style: solid;
        border-width: 1px;
        border-color: black;
    }

    .main {
        padding-left: 15px;
        padding-right: 15px;
    }

    .content-title {
        padding-left: 70px;
    }

    .info-paragraph {
        color: rgb(255, 0, 0);
        text-indent: 25px;
    }

    .info-href {
        color: rgb(255, 0, 0);
    }

    .container {
        display: grid;
        align-items: center; 
        grid-template-columns: auto auto;
        column-gap: 5px;
    }
    
</style>
