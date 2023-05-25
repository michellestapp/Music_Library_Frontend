describe('Add song, filter new song by search, verify found and delete new song', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })
  

    // #1 create a test (#1) for this form that adds data to each field and clicks on the “submit” button.
  it('passes Add Song', () => {
    cy.get('input[data-cy="title-input"]').focus().type('Michelle')
    cy.get('input[data-cy="artist-input"]').focus().type('The Beatles')
    cy.get('input[data-cy="album-input"]').focus().type('Best Hits')
    cy.get('input[data-cy="release_date-input"]').focus().type('1967-01-01')
    cy.get('input[data-cy="genre-input"]').focus().type('rock')
    cy.get('input[data-cy="runtime-input"]').focus().type('200')
    cy.get('button[data-cy="add-song-button"]').click()
  })
    // #2 Using the search/filter function to display the added record,
    //  Navigate to the search results in the table, and assert that the record/data exists.
  it('Searches for new Song', () =>{
    cy.get('.search-bar > input').wait(500).focus().type('Michelle')
    cy.get('tbody > :nth-child(1) > :nth-child(1)').contains('Michelle').should('exist')
  })

  
    // delete the record that was just added. Use appropriate commands to navigate 
    // the duplicate elements of my table to find the correct row and then trigger the “delete” 
    // button or capability currently coded in the application.
  it('Deletes new song', ()=> {
    cy.get('.search-bar > input').wait(500).focus().type('Michelle')
    cy.get('tr[data-cy="song-data"]>td').contains('Michelle').should('exist')
    cy.get('tr[data-cy="song-data"]>td').eq(6).contains('Delete').click()
  })
    
  })
    // cy.get(':nth-child(1) > :nth-child(7) > button').click()
