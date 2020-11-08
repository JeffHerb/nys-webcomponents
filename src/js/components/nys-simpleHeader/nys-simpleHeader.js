window.customElements.define('nys-simpleheader', class NYS_SIMPLE_HEADER extends HTMLElement {

    constructor() {
        super();

        const template = document.createElement('template');

        template.innerHTML = `
            <style>
                header {
                    color: #FFF;
                    display: flex;
                    height: 50px;
                }
                header .nys-lockup-and-title {
                    display: inline-flex;
                    height: 50px;
                }
                header .nys-lockup-and-title .nys-lockup {
                    background: url('/images/nys-logo.png') no-repeat 0 -1px transparent;
                    height: 50px;
                    width: 85px;
                }
                header .nys-lockup-and-title .nys-agency-title-one-line {
                    font-size: 1em;
                    font-family: DSari
                }
                header .nys-lockup-and-title .nys-agency-title-one-line {
                    display: inline-flex;
                    font-size: 20xp;
                }
                header .nys-lockup-and-title .nys-app-title-wrapper {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    padding-left: 7px;
                } 
                header .nys-lockup-and-title .nys-app-title-wrapper .nys-agency-name,
                header .nys-lockup-and-title .nys-app-title-wrapper .nys-app-title {
                    font-family: DSari;
                }

                header .nys-lockup-and-title .nys-app-title-wrapper .nys-agency-name {
                    font-size: 12px;
                }
            </style>
            <header>
                <div class="nys-lockup-and-title">
                    <div class="nys-lockup"></div>
                    <div class="nys-app-title-wrapper"></div>
                </div>
                <div class="nys-application-controls">
                </div>
            </header>
        `;

        this.attachShadow({mode: 'open'});

        // Clone and append template
        this.shadowRoot.appendChild(
            template.content.cloneNode(true)
        );
        
        // Variables to store the different header titles
        const sAgencyName = this.getAttribute('agencyName');
        const sAppTitle = this.getAttribute('appTitle');

        // Container we will append the agency titles too
        var dTitleContainer = this.shadowRoot.querySelector('.nys-app-title-wrapper');
        
        // Check if we have titles and provided the structure according to what was appended.
        if (sAgencyName && sAppTitle) {

            var dAgencyName = document.createElement('div');
            dAgencyName.classList.add('nys-agency-name');
            dAgencyName.appendChild(document.createTextNode(sAgencyName));

            dTitleContainer.appendChild(dAgencyName);

            var dAppTitle = document.createElement('div');
            dAppTitle.classList.add('nys-app-title');
            dAppTitle.appendChild(document.createTextNode(sAppTitle));

            dTitleContainer.appendChild(dAppTitle);

        }
        else {

            var sTitle = 'Agency Title Goes Here!';
            
            if (sAgencyName || sAppTitle) {
                sTitle = (sAgencyName !== null) ? sAgencyName : sAppTitle;
            }

            var dSingleLineTitle = document.createElement('div');
            dSingleLineTitle.classList.add('nys-agency-title-one-line');

            dSingleLineTitle.appendChild(document.createTextNode(sTitle));

            dTitleContainer.appendChild(dSingleLineTitle);
        }
        
    }

});