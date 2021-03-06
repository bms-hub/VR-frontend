

describe("Maps validation", ()=> {
    //Mesmo sendo somente um teste, utilizei o beforeEach para indicar uma boa prática
    beforeEach(() => {
        cy.visit('https://www.vr.com.br/')
    })

    it('Mapa deve ser exibido em tela', ()=> {
        //Abaixo faço a navegação seguindo o link informado no teste, embora exista um link semelhante, porém, sem a "/" no início.
        cy.get('a[href="/onde-aceita.htm"]').click()
        cy.contains('Onde usar meu cartão VR?').click()
        //Asserção feita com esse elemento no carregamento do Mapa do Google
        cy.get('a[title="Abrir esta área no Google Maps (abre uma nova janela)"]').should('exist')
        
    })
})