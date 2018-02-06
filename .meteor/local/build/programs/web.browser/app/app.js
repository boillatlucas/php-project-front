var require = meteorInstall({"client":{"views":{"application":{"template.about.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// client/views/application/template.about.js                                                                        //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //

Template.__checkName("about");
Template["about"] = new Template("Template.about", (function() {
  var view = this;
  return HTML.Raw('<div class="body">\n<div class="container pageOther">\n<div class="row">\n  <div class="card-body">\n    <div class="card card-accueil">\n     <div class="text-center">\n          <h3>About</h3>\n          <hr class="mt-2 mb-2">\n     </div>\n        <p class="section-description">\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer faucibus pulvinar quam. Vivamus lorem nulla, mollis sit amet ligula eu, suscipit efficitur tellus. Pellentesque pellentesque odio turpis, sed ornare eros ornare nec. Fusce est erat, elementum et vulputate eget, ullamcorper a enim. Pellentesque porta, felis eu tristique ultricies, diam ipsum lobortis tellus, at condimentum dui lorem at turpis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin tincidunt dui ac ultricies porttitor. In feugiat tortor nibh, ac tempus libero pulvinar sit amet. Vivamus malesuada nisi id magna sodales blandit. Phasellus vehicula ipsum eu orci ornare, ac blandit ipsum porttitor. Praesent dignissim rhoncus lacus. Phasellus sit amet vulputate justo. Mauris sit amet tortor nec lectus cursus vehicula. Pellentesque vel velit rhoncus, efficitur mi ut, lacinia felis.\n        </p>\n        <p class="section-description">\n            Cras sodales, nisl sit amet tempus consectetur, ipsum tortor bibendum quam, id pretium enim turpis non sapien. Quisque commodo ante in dui consectetur euismod. Donec aliquet aliquam tortor. Donec varius commodo tortor, non auctor orci pellentesque non. Etiam egestas in nisl eget tempus. Cras ornare tristique tempor. Aliquam quis elementum quam. Donec ut feugiat felis, at egestas tellus. Nulla justo dolor, finibus eget ante vel, laoreet pharetra nunc. Nullam dui urna, tempor non eros ut, gravida eleifend est. Fusce vel dignissim neque. Aliquam consectetur lacus eget augue venenatis malesuada. Ut malesuada vulputate hendrerit. Proin facilisis, turpis sed eleifend sagittis, massa orci volutpat lectus, ac tincidunt metus turpis in dui.\n        </p>\n        <p class="section-description">\n            In feugiat tincidunt urna. Nulla vitae enim sed ligula ullamcorper suscipit accumsan sed urna. Vivamus feugiat ex placerat, auctor felis sit amet, vulputate turpis. Nulla nisl urna, gravida sit amet metus lobortis, ullamcorper luctus nisl. Morbi vehicula eu ligula eu pellentesque. Suspendisse potenti. Mauris non aliquet metus. Donec fringilla aliquet sem nec aliquam.\n        </p>\n\n    </div>\n  </div>\n</div>\n</div>\n</div>');
}));

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.contact.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// client/views/application/template.contact.js                                                                      //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //

Template.__checkName("contact");
Template["contact"] = new Template("Template.contact", (function() {
  var view = this;
  return HTML.DIV({
    class: "body"
  }, "\n", HTML.DIV({
    class: "container pageAccueil"
  }, "\n", HTML.DIV({
    class: "row"
  }, "\n  ", HTML.DIV({
    class: "card-body"
  }, "\n    ", HTML.DIV({
    class: "card card-accueil"
  }, "\n\n", HTML.Raw("<!--Section: Contact v.2-->"), "\n", HTML.SECTION({
    class: "section"
  }, "\n\n    ", HTML.Raw("<!--Section heading-->"), "\n    ", HTML.Raw('<h3 style="text-align: center;">Contact us</h3>'), "\n    ", HTML.Raw('<hr class="mt-2 mb-2">'), "\n    ", HTML.Raw("<!--Section description-->"), "\n    ", HTML.Raw('<p class="section-description">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within matter of hours to help you.</p>'), "\n\n    ", HTML.DIV({
    class: "row"
  }, "\n\n        ", HTML.Raw("<!--Grid column-->"), "\n        ", HTML.DIV({
    class: "col-md-12 col-xl-12"
  }, "\n            ", HTML.FORM({
    id: "contact-form",
    name: "contact-form",
    action: "mail.php",
    method: "POST"
  }, "\n\n                ", HTML.Raw("<!--Grid row-->"), "\n                ", HTML.Raw('<div class="row">\n\n                    <!--Grid column-->\n                    <div class="col-md-6">\n                        <div class="md-form">\n                            <div class="md-form">\n                                <input type="text" id="name" name="name" class="form-control">\n                                <label for="name" class="">Your name</label>\n                            </div>\n                        </div>\n                    </div>\n                    <!--Grid column-->\n\n                    <!--Grid column-->\n                    <div class="col-md-6">\n                        <div class="md-form">\n                            <div class="md-form">\n                                <input type="text" id="email" name="email" class="form-control">\n                                <label for="email" class="">Your email</label>\n                            </div>\n                        </div>\n                    </div>\n                    <!--Grid column-->\n\n                </div>'), "\n                ", HTML.Raw("<!--Grid row-->"), "\n\n                ", HTML.Raw("<!--Grid row-->"), "\n                ", HTML.Raw('<div class="row">\n                    <div class="col-md-12">\n                        <div class="md-form">\n                            <input type="text" id="subject" name="subject" class="form-control">\n                            <label for="subject" class="">Subject</label>\n                        </div>\n                    </div>\n                </div>'), "\n                ", HTML.Raw("<!--Grid row-->"), "\n\n                ", HTML.Raw("<!--Grid row-->"), "\n                ", HTML.DIV({
    class: "row"
  }, "\n\n                    ", HTML.Raw("<!--Grid column-->"), "\n                    ", HTML.DIV({
    class: "col-md-12"
  }, "\n\n                        ", HTML.DIV({
    class: "md-form"
  }, "\n                            ", HTML.TEXTAREA({
    type: "text",
    id: "message",
    name: "message",
    class: "md-textarea"
  }), "\n                            ", HTML.Raw('<label for="message">Your message</label>'), "\n                        "), "\n\n                    "), "\n                "), "\n                ", HTML.Raw("<!--Grid row-->"), "\n\n            "), "\n\n            ", HTML.Raw('<div class="center-on-small-only" style="text-align:center">\n                <a class="btn btn-primary" id="send" style="font-size: 1.1rem !important;">Send</a>\n            </div>'), "\n            ", HTML.Raw('<div class="status" id="status"></div>'), "\n            ", HTML.Raw('<div class="alert alert-danger" id="Aname" role="alert"> Name cannot be empty !</div>'), "\n            ", HTML.Raw('<div class="alert alert-danger" id="Aemail" role="alert"> Email cannot be empty !</div>'), "\n            ", HTML.Raw('<div class="alert alert-danger" id="Aemailformat" role="alert"> Email format invalid !</div>'), "\n            ", HTML.Raw('<div class="alert alert-danger" id="Asubject" role="alert"> Subject cannot be empty !</div>'), "\n            ", HTML.Raw('<div class="alert alert-danger" id="Amessage" role="alert"> Message cannot be empty !</div>'), "\n            ", HTML.Raw('<div class="alert alert-success" id="Astatus" role="alert"> Email send</div>'), "\n\n        "), "\n        ", HTML.Raw("<!--Grid column-->"), "\n\n    "), "\n\n"), "\n    "), "\n  "), "\n"), "\n"), "\n");
}));

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.donate.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// client/views/application/template.donate.js                                                                       //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //

Template.__checkName("donate");
Template["donate"] = new Template("Template.donate", (function() {
  var view = this;
  return HTML.Raw('<div class="body">\n<div class="container pageAccueil">\n<div class="row">\n  <div class="card-body">\n    <div class="card card-accueil">\n      <div class="text-center">\n        <h3>Donate</h3>\n        <hr class="mt-2 mb-2">\n      </div>\n      <p>\n         In feugiat tincidunt urna. Nulla vitae enim sed ligula ullamcorper suscipit accumsan sed urna. Vivamus feugiat ex placerat, auctor felis sit amet, vulputate turpis. Nulla nisl urna, gravida sit amet metus lobortis, ullamcorper luctus nisl. Morbi vehicula eu ligula eu pellentesque. Suspendisse potenti. Mauris non aliquet metus. Donec fringilla aliquet sem nec aliquam.\n       </p>\n          <div style="margin: 0 auto;text-align:center">\n      <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank" class="buttonDonate">\n        <input type="hidden" name="cmd" value="_donations">\n        <input type="hidden" name="business" value="modenaquentin@gmail.com">\n        <input type="hidden" name="lc" value="FR">\n        <input type="hidden" name="item_name" value="PHP code tester">\n        <input type="hidden" name="no_note" value="0">\n        <input type="hidden" name="currency_code" value="EUR">\n        <input type="hidden" name="bn" value="PP-DonationsBF:paypal-min.png:NonHostedGuest">\n        <button type="submit" class="btn btn-primary waves-effect waves-light"><img style="width:150px" src="/images/cb.png"><br><img style="width:100px" src="/images/paypal-min.png"></button>\n        <img alt="" border="0" src="https://www.paypalobjects.com/fr_FR/i/scr/pixel.gif" width="1" height="1">\n      </form>\n\n      <!--<form target="_blank" action="https://www.sandbox.paypal.com/cgi-bin/webscr" method="post" >\n      <input type="hidden" name="cmd" value="_s-xclick">\n      <input type="hidden" name="hosted_button_id" value="K489WM46W9V2N">\n      <button type="submit" class="btn btn-primary waves-effect waves-light"><img style="width:150px" src="/images/cb.png"/><br><img style="width:100px" src="/images/paypal-min.png"/></button>\n      <img alt="" border="0" src="https://www.sandbox.paypal.com/fr_FR/i/scr/pixel.gif" width="1" height="1">\n    </form>-->\n\n\n        <form target="_blank" action="https://www.coinpayments.net/index.php" method="post" class="buttonDonate">\n        \t<input type="hidden" name="cmd" value="_donate">\n        \t<input type="hidden" name="reset" value="1">\n        \t<input type="hidden" name="merchant" value="e26b4c1fce5829b0926c77b756cd6745">\n        \t<input type="hidden" name="currency" value="EUR">\n        \t<input type="hidden" name="item_name" value="Donate">\n          <button type="submit" class="btn btn-primary waves-effect waves-light"><img style="width:150px" src="/images/coinbase.png"></button>\n        </form>\n\n</div>\n    </div>\n  </div>\n</div>\n</div>\n</div>');
}));

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.home.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// client/views/application/template.home.js                                                                         //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //

Template.__checkName("home");
Template["home"] = new Template("Template.home", (function() {
  var view = this;
  return HTML.Raw('<div class="body">\n<div class="container pageAccueil">\n<div class="row">\n  <div class="card-body">\n    <div class="card card-accueil">\n      <div class="text-center">\n          <h3>Home</h3>\n          <hr class="mt-2 mb-2">\n        </div>\n\n      <div id="successLogout" class="alert alert-success" style="display:none; margin-bottom: 10px;">\n          Lougout successful.\n      </div>\n\n      <div id="successLogIn" class="alert alert-success" style="display:none; margin-bottom: 10px;">\n          Log in successful.\n      </div>\n\n      <p class="texteAccueil">Test flaws and vulnerabilities of a project php Git</p>\n\n      <form>\n        <div class="div-form">\n          <div class="md-form">\n            <i class="fa fa-link prefix grey-text"></i>\n            <input type="text" name="repository" id="repository" class="form-control">\n            <label for="repository">Repository URL</label>\n          </div>\n        </div>\n\n        <div class="div-form">\n          <div class="md-form">\n            <i class="fa fa-envelope prefix grey-text"></i>\n            <input type="email" name="email" id="email" class="form-control">\n            <label id="labelEmail" for="email">Email</label>\n          </div>\n        </div>\n        <button type="submit" class="btn btn-primary waves-effect waves-light">Analize</button>\n      </form>\n    </div>\n  </div>\n</div>\n</div>\n</div>');
}));

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.legal.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// client/views/application/template.legal.js                                                                        //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //

Template.__checkName("legal");
Template["legal"] = new Template("Template.legal", (function() {
  var view = this;
  return HTML.Raw('<div class="body">\n<div class="container pageOther">\n<div class="row">\n  <div class="card-body">\n    <div class="card card-accueil">\n     <div class="text-center">\n          <h3>Legal</h3>\n          <hr class="mt-2 mb-2">\n     </div>\n\n<p class="section-description" style="text-align:center">MENTIONS LEGALES :</p>\n\n<p class="section-description" style="text-align:justify">Conformément aux dispositions des articles 6-III et 19 de la Loi n° 2004-575 du 21 juin 2004 pour la Confiance dans l\'économie numérique, dite L.C.E.N., nous portons à la connaissance des utilisateurs et visiteurs du site : <a href="http://www.analyzePHP.com" target="_blank">www.analyzePHP.com</a> les informations suivantes :</p>\n\n<p class="section-description" style="text-align:justify"><strong>1. Informations légales :</strong></p>\n\n<p class="section-description" style="text-align:justify">Statut du propriétaire : <strong>particulier</strong><br>\nLe Propriétaire est : <strong>test test</strong><br>\nAdresse postale du propriétaire : <strong>1 grande rue 69000 lyon</strong><br>\n <br>\nLe Créateur du site est : <strong>analyzePHP.com</strong><br>\nLe Responsable de la  publication est : <strong>truc muche</strong><br>\nContacter le responsable de la publication : <strong>trucmuche@gmail.com</strong><br>\nLe responsable de la publication est une<strong> personne physique</strong><br>\n<br>\nLe Webmaster est  : <strong>truc muche</strong><br>\nContacter le Webmaster :  <strong><a href="mailto:trucmuche@gmail.com?subject=Contact a partir des mentions lÃ©gales via le site www.analyzePHP.com">trucmuche@gmail.com</a></strong><br>\nL’hebergeur du site est : <strong>ovh ovh.com 69000 lyon</strong><br>\n<strong><u>CREDIT :</u> </strong> Les mentions légales ont étés générées par<strong> <a href="https://www.generer-mentions-legales.com/generateur-mentions-legales.html" target="_blank">rédiger mes mentions legales</a></strong><br>\nRenseignements sur la <a href="https://editioneo.com/formalites/declaration-cnil" target="_blank">déclarer un site à la CNIL</a></p>\n\n<p class="section-description" style="text-align:justify"> </p>\n\n<p class="section-description" style="text-align:justify"><strong>2. Présentation et principe :</strong></p>\n\n<p class="section-description" style="text-align:justify">Est désigné ci-après : <strong>Utilisateur</strong>, tout internaute se connectant et utilisant le site susnommé : <a href="http://www.analyzePHP.com" target="_blank">www.analyzePHP.com</a>.<br>\nLe site <strong>www.analyzePHP.com</strong><strong> </strong>regroupe un ensemble de services, dans l\'état,  mis à la disposition des utilisateurs. Il est ici précisé que ces derniers doivent rester courtois et faire preuve de bonne foi tant envers les autres utilisateurs qu\'envers le webmaster du site www.analyzePHP.com. Le site www.analyzePHP.com est mis à jour régulièrement par truc muche.<br>\ntest test s’efforce de fournir sur le site www.analyzePHP.com des informations les plus précises possibles (sous réserve de modifications apportées depuis leur mise en ligne), mais ne saurait garantir l\'exactitude, la complétude et l\'actualité des informations diffusées sur son site, qu’elles soient de son fait ou du fait des tiers partenaires qui lui fournissent ces informations. En conséquence, l\'utilisateur reconnaît utiliser ces informations données (à titre indicatif, non exhaustives et susceptibles d\'évoluer) sous sa responsabilité exclusive.</p>\n\n<p class="section-description" style="text-align:justify"> </p>\n\n<p class="section-description" style="text-align:justify"><strong>3. Accessibilité :</strong><br>\n<br>\nLe site www.analyzePHP.com est par principe accessible aux utilisateurs 24/24h, 7/7j, sauf interruption, programmée ou non, pour les besoins de sa maintenance ou en cas de force majeure. En cas d’impossibilité d’accès au service, www.analyzePHP.com s’engage à faire son maximum afin de rétablir l’accès au service et s’efforcera alors de communiquer préalablement aux utilisateurs les dates et heures de l’intervention.  N’étant soumis qu’à une obligation de moyen, www.analyzePHP.com ne saurait être tenu pour responsable de tout dommage, quelle qu’en soit la nature, résultant d’une indisponibilité du service.</p>\n\n<p class="section-description" style="text-align:justify"> </p>\n\n<p class="section-description" style="text-align:justify"><strong>4. Propriété intellectuelle :</strong></p>\n\n<p class="section-description" style="text-align:justify"><br>\ntest test est propriétaire exclusif de tous les droits de propriété intellectuelle ou détient les droits d’usage sur tous les éléments accessibles sur le site, tant sur la structure que sur les textes, images, graphismes, logo, icônes, sons, logiciels…<br>\nToute reproduction totale ou partielle du site www.analyzePHP.com, représentation, modification, publication, adaptation totale ou partielle de l\'un quelconque de ces éléments, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de test test, propriétaire du site à l\'email : trucmuche@gmail.com, à défaut elle sera considérée comme constitutive d’une contrefaçon et passible de poursuite conformément aux dispositions des articles L.335-2 et suivants du Code de Propriété Intellectuelle.</p>\n\n<p class="section-description" style="text-align:justify"><br>\n<strong>5. Liens hypertextes et cookies :</strong><br>\n<br>\nLe site www.analyzePHP.com contient un certain nombre de liens hypertextes vers d’autres sites (partenaires, informations …) mis en place avec l’autorisation de test test. Cependant, test test n’a pas la possibilité de vérifier l\'ensemble du contenu des sites ainsi visités et décline donc toute responsabilité de ce fait quand aux risques éventuels de contenus illicites.<br>\nL’utilisateur est informé que lors de ses visites sur le site www.analyzePHP.com, un ou des cookies sont susceptibles de s’installer automatiquement sur son ordinateur par l\'intermédiaire de son logiciel de navigation. Un cookie est un bloc de données qui ne permet pas d\'identifier l\'utilisateur, mais qui enregistre des informations relatives à la navigation de celui-ci sur le site. <br>\nLe paramétrage du logiciel de navigation permet d’informer de la présence de cookie et éventuellement, de la refuser de la manière décrite à l’adresse suivante : <a href="http://www.cnil.fr">www.cnil.fr</a>. L’utilisateur peut toutefois configurer le navigateur de son ordinateur pour refuser l’installation des cookies, sachant que le refus d\'installation d\'un cookie peut entraîner l’impossibilité d’accéder à certains services. Pour tout bloquage des cookies, tapez dans votre moteur de recherche : bloquage des cookies sous IE ou firefox et suivez les instructions en fonction de votre version.</p>\n\n<p class="section-description" style="text-align:justify"><br>\n<strong>6. Protection des biens et des personnes - gestion des données personnelles :</strong><br>\n<br>\nEn France, les données personnelles sont notamment protégées par la loi n° 78-87 du 6 janvier 1978, la loi n° 2004-801 du 6 août 2004, l\'article L. 226-13 du Code pénal et la Directive Européenne du 24 octobre 1995.</p>\n\n<p class="section-description" style="text-align:justify">Sur le site www.analyzePHP.com, test test ne collecte des informations personnelles ( suivant l\'article 4 loi n°78-17 du 06 janvier 1978) relatives à l\'utilisateur que pour le besoin de certains services proposés par le site www.analyzePHP.com. L\'utilisateur fournit ces informations en toute connaissance de cause, notamment lorsqu\'il procède par lui-même à leur saisie. Il est alors précisé à l\'utilisateur du site www.analyzePHP.com l’obligation ou non de fournir ces informations.<br>\nConformément aux dispositions des articles 38 et suivants de la loi 78-17 du 6 janvier 1978 relative à l’informatique, aux fichiers et aux libertés, tout utilisateur dispose d’un droit d’accès, de rectification, de suppression et d’opposition aux données personnelles le concernant. Pour l’exercer, adressez votre demande à www.analyzePHP.com par email : <strong><a href="mailto:trucmuche@gmail.com?subject=Contact ï¿½ partir des mentions lï¿½gales via le site www.analyzePHP.com">trucmuche@gmail.com</a></strong> ou par écrit dûment signée, accompagnée d’une copie du titre d’identité avec signature du titulaire de la pièce, en précisant l’adresse à laquelle la réponse doit être envoyée.</p>\n\n<p class="section-description" style="text-align:justify">Aucune information personnelle de l\'utilisateur du site www.analyzePHP.com n\'est publiée à l\'insu de l\'utilisateur, échangée, transférée, cédée ou vendue sur un support quelconque à des tiers. Seule l\'hypothèse du rachat du site www.analyzePHP.com et de ses droits autorise test test à transmettre les dites informations à l\'éventuel acquéreur qui serait à son tour tenu à la même obligation de conservation et de modification des données vis à vis de l\'utilisateur du site www.analyzePHP.com.<br>\nLe site www.analyzePHP.com est déclaré à la CNIL sous le numéro 123456789.</p>\n\n<p class="section-description" style="text-align:justify">Les bases de données sont protégées par les dispositions de la loi du 1er juillet 1998 transposant la directive 96/9 du 11 mars 1996 relative à la protection juridique des bases de données.</p>\n\n    </div>\n  </div>\n</div>\n</div>\n</div>');
}));

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.myprojects.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// client/views/application/template.myprojects.js                                                                   //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //

Template.__checkName("myprojects");
Template["myprojects"] = new Template("Template.myprojects", (function() {
  var view = this;
  return HTML.Raw('<div class="body">\n<div class="container pageAccueil pageMyProject">\n<div class="row">\n  <div class="card-body">\n    <div class="card card-accueil">\n      <div class="text-center">\n          <h3>My projects</h3>\n          <hr class="mt-2 mb-2">\n      </div>\n\n      <div class="myProjects">\n        \n      </div>\n\n    </div>\n  </div>\n</div>\n</div>\n</div>');
}));

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.projet.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// client/views/application/template.projet.js                                                                       //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //

Template.__checkName("projet");
Template["projet"] = new Template("Template.projet", (function() {
  var view = this;
  return [ HTML.Raw('<div class="loader-container" style="display:none">\n    <div class="analyse">Analyze en cours...</div>\n    <div class="progress_loader float shadow">\n      <div class="progress__item"></div>\n    </div>\n  </div>\n\n'), HTML.DIV({
    class: "body"
  }, "\n", HTML.DIV({
    class: "container pageProject",
    style: "display:none"
  }, "\n\n  ", HTML.DIV({
    class: "card-body"
  }, "\n    ", HTML.DIV({
    class: "card text-center"
  }, "\n      ", HTML.Raw('<div class="cardHeader">\n        <span class="testError"></span>\n        <h3 class="margintop1rem">Error</h3>\n        <p>5 erreurs, 4 notices</p>\n        <span class="buttonExpand" data-id="collapseError">\n          <i class="fa fa-angle-down" aria-hidden="true"></i>\n        </span>\n      </div>'), "\n      ", HTML.Raw('<div class="clearfix"></div>'), "\n      ", HTML.DIV({
    class: "marginSides collapse",
    id: "collapseError"
  }, "\n        ", HTML.TABLE({
    class: "table"
  }, "\n        ", HTML.TBODY("\n\n        "), "\n        "), "\n      "), "\n    "), "\n  "), "\n  ", HTML.DIV({
    class: "card-body"
  }, "\n    ", HTML.DIV({
    class: "card text-center"
  }, "\n      ", HTML.Raw('<div class="cardHeader">\n        <span class="testWarning"></span>\n        <h3 class="margintop1rem">Stats</h3>\n        <p>5 erreurs, 4 notices</p>\n        <span class="buttonExpand" data-id="collapseStats">\n          <i class="fa fa-angle-down" aria-hidden="true"></i>\n        </span>\n      </div>'), "\n      ", HTML.Raw('<div class="clearfix"></div>'), "\n      ", HTML.DIV({
    class: "marginSides collapse",
    id: "collapseStats"
  }, "\n        ", HTML.TABLE({
    class: "table"
  }, "\n        ", HTML.TBODY("\n\n        "), "\n        "), "\n      "), "\n    "), "\n  "), "\n ", HTML.DIV({
    class: "card-body"
  }, "\n    ", HTML.DIV({
    class: "card text-center"
  }, "\n      ", HTML.Raw('<div class="cardHeader">\n        <span class="testValidate"></span>\n        <h3 class="margintop1rem">Sucess</h3>\n        <p>5 erreurs, 4 notices</p>\n        <span class="buttonExpand" data-id="collapseSucess">\n          <i class="fa fa-angle-down" aria-hidden="true"></i>\n        </span>\n      </div>'), "\n      ", HTML.Raw('<div class="clearfix"></div>'), "\n      ", HTML.DIV({
    class: "marginSides collapse",
    id: "collapseSucess"
  }, "\n        ", HTML.TABLE({
    class: "table"
  }, "\n        ", HTML.TBODY("\n\n        "), "\n        "), "\n      "), "\n    "), "\n  "), "\n\n    ", HTML.Raw('<div id="result"></div>'), "\n    ", HTML.Raw('<div id="response"></div>'), "\n"), "\n") ];
}));

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.sign-in.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// client/views/application/template.sign-in.js                                                                      //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //

Template.__checkName("signin");
Template["signin"] = new Template("Template.signin", (function() {
  var view = this;
  return HTML.Raw('<div class="body">\n<div class="container pageAccueil">\n<div class="row">\n  <div class="card-body">\n    <div class="card card-accueil">\n      <div class="text-center">\n          <h3>Sign in</h3>\n          <hr class="mt-2 mb-2">\n        </div>\n\n      <div id="errorCredentials" class="error alert alert-danger" style="display:none; margin-bottom: 10px;">\n        Incorrect username or password.\n      </div>\n\n      <div id="okCredentials" class="alert alert-success" style="display:none; margin-bottom: 10px;">\n        Log in successful.\n      </div>\n\n      <div class="clearfix"></div>\n      <p class="texteAccueil">Sign in to your account</p>\n\n      <form>\n        <div class="div-form">\n          <div class="md-form">\n            <i class="fa fa-envelope prefix grey-text"></i>\n            <input type="text" name="email" id="email" class="form-control">\n            <label for="email">Email</label>\n          </div>\n        </div>\n\n        <div class="div-form">\n          <div class="md-form">\n            <i class="fa fa-key prefix grey-text"></i>\n            <input type="password" name="password" id="password" class="form-control">\n            <label for="password">Password</label>\n          </div>\n        </div>\n        <button type="submit" class="btn btn-primary waves-effect waves-light">Sign in</button>\n      </form>\n    </div>\n  </div>\n</div>\n</div>\n</div>');
}));

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.sign-up.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// client/views/application/template.sign-up.js                                                                      //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //

Template.__checkName("signup");
Template["signup"] = new Template("Template.signup", (function() {
  var view = this;
  return HTML.Raw('<div class="body">\n<div class="container pageAccueil">\n<div class="row">\n  <div class="card-body">\n    <div class="card card-accueil">\n      <div class="text-center">\n          <h3>Sign up</h3>\n          <hr class="mt-2 mb-2">\n        </div>\n\n      <div class="error alert alert-danger" style="display:none; margin-bottom: 10px;">\n\n      </div>\n\n      <p class="texteAccueil">Create a new account.</p>\n\n      <form>\n        <div class="div-form">\n          <div class="md-form">\n            <i class="fa fa-user prefix grey-text"></i>\n            <input type="text" name="name" id="name" class="form-control">\n            <label for="name">Name</label>\n          </div>\n        </div>\n\n        <div class="div-form">\n          <div class="md-form">\n            <i class="fa fa-envelope prefix grey-text"></i>\n            <input type="email" name="email" id="email" class="form-control">\n            <label for="email">Email</label>\n          </div>\n        </div>\n\n        <div class="div-form">\n          <div class="md-form">\n            <i class="fa fa-key prefix grey-text"></i>\n            <input type="password" name="password" id="password" class="form-control">\n            <label for="password">Password</label>\n          </div>\n        </div>\n\n        <div class="div-form">\n          <div class="md-form">\n            <i class="fa fa-key prefix grey-text"></i>\n            <input type="password" name="c_password" id="c_password" class="form-control">\n            <label for="c_password">Confirm password</label>\n          </div>\n        </div>\n\n        <button type="submit" class="btn btn-primary waves-effect waves-light">Analize</button>\n      </form>\n    </div>\n  </div>\n</div>\n</div>\n</div>');
}));

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},"main.html":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// client/main.html                                                                                                  //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
module.watch(require("./template.main.js"), {
  "*": module.makeNsSetter(true)
});

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.main.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// client/template.main.js                                                                                           //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //

Template.__checkName("mainLayout");
Template["mainLayout"] = new Template("Template.mainLayout", (function() {
  var view = this;
  return [ HTML.HEADER("\n        ", HTML.SCRIPT({
    src: " https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.4.5/js/mdb.min.js"
  }), "\n        ", HTML.SCRIPT({
    src: "http://code.jquery.com/jquery-3.3.1.min.js",
    integrity: "sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=",
    crossorigin: "anonymous"
  }), "\n        ", HTML.Raw("<!-- Font Awesome -->"), "\n        ", HTML.Raw("<!-- Latest compiled and minified CSS -->"), "\n        ", HTML.Raw('<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">'), "\n        ", HTML.Raw('<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.0/css/font-awesome.min.css">'), "\n        ", HTML.Raw('<link rel="stylesheet" href=" https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.4.5/css/mdb.min.css">'), "\n    "), "\n\n\n\n    ", HTML.BODY("\n        ", Spacebars.include(view.lookupTemplate("yield")), "\n    "), HTML.Raw('\n\n\n    <footer class="footer">\n      <div class="container pull-right">\n        <a class="navbar-brand" href="/">Home</a>\n        <a class="navbar-brand" href="/my-projects" id="myProjects" style="display:none">My projects</a>\n        <a class="navbar-brand" href="/contact">Contact</a>\n        <a class="navbar-brand" href="/about">About</a>\n        <a class="navbar-brand" href="/donate">Donate</a>\n        <a class="navbar-brand" href="/legal">Legal</a>\n        <a target="_blank" class="navbar-brand navbar-brand-svg" href="https://github.com/boillatlucas/php-project-scanner"><img src="/images/github-icon.svg" width="30" height="30" alt=""></a>\n      </div>\n\n      <div id="login">\n\n      </div>\n    </footer>') ];
}));

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"methods.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// client/methods.js                                                                                                 //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
urlApi = 'http://localhost:8888';
Meteor.methods({
  'getProject': function (data) {
    var headers = getHeaders();
    HTTP.call('GET', urlApi + '/api/project/' + data.slug, {
      params: {},
      headers: headers
    }, function (error, response) {
      //var analized = [];
      //let tools = ['PHPParallelLint','PHPLoc','PHPCPD','PHPCodeFixer'];
      if (error) {
        console.log(error);
      } else {
        if (response.data.return_code == "FAILED") {
          alert('FAILED ! ');
        } else if (response.data.return_code == "OK") {
          if (response.data.return.project.analyzed !== null) {
            console.log('fini');
            clearInterval(data.run_every_sec); //$('#response').append(response.content);

            var rlog = response.data.return.project.logs;
            $('.loader-container').addClass('done');
            $('.progress_loader').addClass('done');
            $('.loader-container').hide();
            $('.pageProject').show();
            $('#collapseSucess > table > tbody').empty();
            $('#collapseStats  > table > tbody').empty();

            for (var i = 0; i < Object.keys(rlog.SUCCESS).length; i++) {
              console.log(rlog.SUCCESS[i].final_output);
              $('#collapseSucess > table > tbody').append('<tr><td>' + rlog.SUCCESS[i].final_output + '</td></tr>');
            } //                      for (var i = 0; i < Object.keys(rlog.STATS).length; i++) {
            //                          console.log(rlog.STATS[i].final_output);
            //                          $('#collapseStats > table > tbody').append('<tr><td>'+rlog.STATS[i].final_output+'</td></tr>')
            //                        }

          } else {
            $('.loader-container').show();
          }
        }
      }
    });
  },
  'createProject': function (data) {
    //console.log(data);
    var headers = getHeaders();
    HTTP.call('POST', urlApi + '/api/project', {
      data: {
        repository: data.repository,
        email: data.email
      },
      headers: headers
    }, function (error, response) {
      if (error) {
        console.log(error);
      } else {
        //console.log(response.data);
        if (response.data.return_code == "OK") {
          Router.go("/project/" + response.data.return.project_saved.slug);
        } else if (response.data.return_code == "FAILED") {
          alert('error ! ');
        }
      }
    });
  }
});
signUp = function (data) {
  //console.log(data);
  HTTP.call('POST', urlApi + '/api/register/', {
    data: {
      name: data.name,
      email: data.email,
      password: data.password,
      c_password: data.c_password
    }
  }, function (error, response) {
    if (error) {
      var textError = "";
      console.log(response.data);

      for (var error in meteorBabelHelpers.sanitizeForInObject(response.data.error)) {
        textError += "<p>" + response.data.error[error] + "</p>";
      }

      ;
      $('.error').html(textError);
      $('.error').show();
    } else {
      sessionStorage.setItem("name", "vert");
      sessionStorage.setItem("token", response.data.success.token);
      Router.go('home');
    }
  });
}, signIn = function (data) {
  //console.log(data);
  HTTP.call('POST', urlApi + '/api/login/', {
    data: {
      email: data.email,
      password: data.password
    }
  }, function (error, response) {
    if (error) {
      $('#okCredentials').hide();
      $('#errorCredentials').show();
      $('#password').val('');
    } else {
      sessionStorage.setItem("name", "vert");
      sessionStorage.setItem("token", response.data.success.token);
      displayLogin();
      Router.go('/?successLogIn');
    }
  });
};

getHeaders = function () {
  var name = sessionStorage.getItem("name");
  var token = sessionStorage.getItem("token");
  var headers = {};

  if (token != null) {
    headers = {
      "Accept": 'application/json',
      "Authorization": 'Bearer ' + token
    };
  }

  return headers;
};

disconnect = function () {
  var headers = getHeaders();
  HTTP.call('POST', urlApi + '/api/logout/', {
    headers: headers
  }, function (error, response) {
    if (error) {
      sessionStorage.removeItem('name');
      sessionStorage.removeItem('token');
    } else {
      sessionStorage.removeItem('name');
      sessionStorage.removeItem('token');
    }
  });
};

displayLogin = function () {
  var name = sessionStorage.getItem("name");
  var token = sessionStorage.getItem("token");

  if (name == null) {
    $('#login').html('<a class="btn btn-primary" href="/sign-in">Sign in</a> <a class="btn btn-primary" href="/sign-up">Sign up</a>');
    $('#myProjects').hide();
  } else {
    $('#login').html(name + '<a class="btn btn-primary" href="/disconnect">Disconnect</a>');
    $('#myProjects').show();
  }
};

listMyProjects = function () {
  var headers = getHeaders();
  console.log(headers);
  HTTP.call('GET', urlApi + '/api/user-projects/', {
    data: {},
    headers: headers
  }, function (error, response) {
    if (error) {
      console.log(error);
    } else {
      console.log(response.data);

      if (response.data.count_result > 0) {
        for (var project in meteorBabelHelpers.sanitizeForInObject(response.data.return)) {
          console.log(response.data.return[project]);
          var slug = '/project/' + response.data.return[project].slug;
          var date = new Date(response.data.return[project].created_at);
          var optionsDate = {
            year: "numeric",
            month: "numeric",
            day: "numeric"
          };
          var dateFormat = date.toLocaleDateString("en-GB") + ' ' + date.toLocaleTimeString('fr-FR');
          var urlRepo = response.data.return[project].repository_url;
          var html = '<div class="project"><div style="margin-bottom: 5px;"><i class="fa fa-link"></i> ' + urlRepo + '</div><div><i class="fa fa-calendar"></i> ' + dateFormat + '</div><div class="goToTest"><a href="' + slug + '" class="btn-primary btn">Go to test</a></div></div>';
          $('.myProjects').append(html);
        }

        ;
      } else {
        var html = '<div class="project">You have not scanned projects yet.</div>';
        $('.myProjects').append(html);
      }
    }
  });
};
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"router.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// client/router.js                                                                                                  //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
Router.configure({
  layoutTemplate: 'mainLayout'
});
Router.route('/', {
  name: 'home'
});
Router.route('/project/:_id', {
  name: "projet",
  data: function () {
    Meteor.call('getProject', {
      slug: this.params._id
    });
  }
});
Router.route('/disconnect', {
  data: function () {
    disconnect();
    sessionStorage.removeItem('name');
    sessionStorage.removeItem('token');
    Router.go('/?successLogout');
  }
});
Router.route('/contact', {
  name: 'contact'
});
Router.route('/about', {
  name: 'about'
});
Router.route('/legal', {
  name: 'legal'
});
Router.route('/donate', {
  name: 'donate'
});
Router.route('/sign-in', {
  name: 'signin'
});
Router.route('/sign-up', {
  name: 'signup'
});
Router.route('/my-projects', {
  name: 'myprojects',
  data: function () {
    listMyProjects();
  }
});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"main.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// client/main.js                                                                                                    //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
var Template;
module.watch(require("meteor/templating"), {
  Template: function (v) {
    Template = v;
  }
}, 0);
var ReactiveVar;
module.watch(require("meteor/reactive-var"), {
  ReactiveVar: function (v) {
    ReactiveVar = v;
  }
}, 1);
var Meteor;
module.watch(require("meteor/meteor"), {
  Meteor: function (v) {
    Meteor = v;
  }
}, 2);
module.watch(require("./main.html"));
module.watch(require("./methods.js"));
module.watch(require("./router.js"));
Template.home.events({
  'submit form': function (event, template) {
    event.preventDefault();
    var repository = event.target.repository.value;
    var email = event.target.email.value;
    Meteor.call('createProject', {
      repository: repository,
      email: email
    });
  }
});
Template.projet.onRendered(function () {
  var slug = $(location).attr('pathname').split('/'); //console.log(slug[2]);

  run_every_sec = setInterval(function () {
    Meteor.call('getProject', {
      slug: slug[2],
      run_every_sec: run_every_sec
    }, function (error, result) {});
  }, 1000); //console.log(run_every_sec);
});

Template.projet.destroyed = function () {
  Meteor.clearInterval(run_every_sec);
};

Template.projet.events({
  "click .buttonExpand": function (event, template) {
    //jQ(event.target);
    //console.log(template);
    var button = $(event.target).closest('.buttonExpand');
    var zone = template.$(event.target).closest('.card').find('.collapse');

    if (zone.is(":visible")) {
      zone.hide();
      button.html('<i class="fa fa-angle-down" aria-hidden="true"></i>');
    } else {
      zone.show();
      button.html('<i class="fa fa-angle-up" aria-hidden="true"></i>');
    }
  }
});
Template.signin.events({
  'submit form': function (event, template) {
    event.preventDefault();
    var password = event.target.password.value;
    var email = event.target.email.value;
    signIn({
      email: email,
      password: password
    });
  }
});
Template.signup.events({
  'submit form': function (event, template) {
    event.preventDefault();
    var password = event.target.password.value;
    var email = event.target.email.value;
    var name = event.target.name.value;
    var c_password = event.target.c_password.value;
    signUp({
      name: name,
      email: email,
      password: password,
      c_password: c_password
    });
  }
});
Template.contact.onRendered(function () {
  $('.alert').hide();
});
Template.contact.events({
  "click #send": function (event, template) {
    event.preventDefault();
    $('.alert').hide();
    var name = document.getElementById('name').value;

    if (name == "") {
      $('#Aname').fadeIn('fast');
      return false;
    }

    var email = document.getElementById('email').value;

    if (email == "") {
      $('#Aemail').fadeIn('fast');
      return false;
    } else {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      if (!re.test(email)) {
        $('#Aemailformat').fadeIn('fast');
        return false;
      }
    }

    var subject = document.getElementById('subject').value;

    if (subject == "") {
      $('#Asubject').fadeIn('fast');
      return false;
    }

    var message = document.getElementById('message').value;

    if (message == "") {
      $('#Amessage').fadeIn('fast');
      return false;
    }

    $('#Astatus').fadeIn('fast'); //document.getElementById('contact-form').submit();
    //$('.alert').addClass('alert-danger').text('Une erreur s\'est produite pendant la mise à jour du stock.').fadeIn('fast');
  }
});
Template.home.onRendered(function () {
  displayLogin();
  var headers = getHeaders();
  HTTP.call('POST', 'http://localhost:8888/api/get-details/', {
    data: {},
    headers: headers
  }, function (error, response) {
    if (error) {
      console.log(error);
    } else {
      $('#email').val(response.data.success.email);
      $('#labelEmail').addClass('active');
    }
  });
  var url = new URL(window.location.href);
  if (url.searchParams.get("successLogout") == "") $('#successLogout').show();
  if (url.searchParams.get("successLogIn") == "") $('#successLogIn').show();
});
Template.about.onRendered(function () {
  displayLogin();
});
Template.contact.onRendered(function () {
  displayLogin();
});
Template.donate.onRendered(function () {
  displayLogin();
});
Template.legal.onRendered(function () {
  displayLogin();
});
Template.projet.onRendered(function () {
  displayLogin();
});
Template.signin.onRendered(function () {
  displayLogin();
});
Template.signup.onRendered(function () {
  displayLogin();
});
Template.myprojects.onRendered(function () {
  displayLogin();
});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"app":{"client":{"template.main.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// app/client/template.main.js                                                                                       //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //

Template.body.addContent((function() {
  var view = this;
  return HTML.getTag("app")();
}));
Meteor.startup(Template.body.renderToDocument);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}},{
  "extensions": [
    ".js",
    ".json",
    ".html",
    ".css"
  ]
});
require("/client/views/application/template.about.js");
require("/client/views/application/template.contact.js");
require("/client/views/application/template.donate.js");
require("/client/views/application/template.home.js");
require("/client/views/application/template.legal.js");
require("/client/views/application/template.myprojects.js");
require("/client/views/application/template.projet.js");
require("/client/views/application/template.sign-in.js");
require("/client/views/application/template.sign-up.js");
require("/app/client/template.main.js");
require("/client/template.main.js");
require("/client/methods.js");
require("/client/router.js");
require("/client/main.js");